import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
//import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import './App.css';
import { IoEarthOutline } from "react-icons/io5";
import { withStyles } from '@material-ui/core/styles';
import groupBySection from "./functions/GroupBySection";
import guardianApi from "./functions/GuardianApi";
import SearchField from "./components/SearchField";
import NoResults from "./components/NoResults";
import ResultList from "./components/ResultList";
import PinnedList from "./components/PinnedList";
import LatestNewsList from "./components/LatestNewsList";
import SectionGroup from "./components/SectionGroup";
import LoadingPage from "./components/LoadingPage";
import ErrorPage from "./components/ErrorPage";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

const styles = () => ({
  title: {
    padding: '13px 0 0 16px',
    fontSize: '1.4rem',
    fontWeight: 700,
    width: '140px',
    color: '#FFFFFF',
    backgroundColor: '#0f1010',
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: "",
      userTypes: "",
      results: [],
      activeSection: "all",
      latestNews: [],
      pinnedList: [],
      currentPage: 0,
      allPages: 0,
      total: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleUserTypes = this.handleUserTypes.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleSection = this.handleSection.bind(this);
    this.handlePinnedList = this.handlePinnedList.bind(this);
    this.getResultList = this.getResultList.bind(this);
    this.getLatestNews = this.getLatestNews.bind(this);
  }

  handleUserTypes = (userTypes) => {
    this.setState({ userTypes: userTypes });
  };

  handlePinnedList = (pinnedList) => {
    this.setState({ pinnedList: pinnedList });
  };

  handleSection = (activeSection) => {
    this.setState({ activeSection: activeSection },()=>{
      this.handleSearch();
    }
      );
};

  getLatestNews = () => {
    this.setState(() => {
      guardianApi("", 0,"all")
        .then(({ data: { response } }) => {
          let results = groupBySection(response.results).slice(0, 10);
          this.setState({
            latestNews: [...results],
            error: "",
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: error.message });
        });
    });
  };

  getResultList = (input, page,activeSection) => {
    this.setState({ loading: true, }, () => {
      guardianApi(input, page,activeSection)
        .then(({ data: { response } }) => {
          let results = groupBySection(response.results);
          this.setState({
            results: [...results],
            currentPage: response.currentPage,
            allPages: response.pages,
            total: response.total,
            loading: false,
            error: "",
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: error.message });
        });
    });
  };

  handlePage = (currentPage) => {
    if (currentPage >= 1) {
      this.getResultList(this.state.userTypes, currentPage, this.state.activeSection);
    }
  };

  handleSearch = () => {
    this.getResultList(this.state.userTypes, 1, this.state.activeSection);
  };

  componentDidMount = () => {
    this.getResultList(this.state.userTypes, this.state.currentPage, "all");
    this.getLatestNews();
  };

  render() {
    const { classes } = this.props;
    const {
      userTypes,
      results,
      latestNews,
      currentPage,
      allPages,
      total,
      pinnedList,
      loading,
      error,
    } = this.state;
    //console.log(results);
    let element = null;
    let latestNewsList = null;
    if (loading && error.length === 0) {
      element = <LoadingPage />;
    }
    else if (error.length !== 0) {
      element = <ErrorPage error={error} />;
    }
    else if (results.length === 0) {
      element = <NoResults />;
    }
    else {
      element = <ResultList
        results={results}
        pinnedList={pinnedList}
        currentPage={currentPage}
        allPages={allPages}
        total={total}
        handlePage={this.handlePage}
        handlePinnedList={this.handlePinnedList}
      />;
      latestNewsList = <LatestNewsList
        latestNews={latestNews}
      />
    }
    return (
      <div>
        <div className="Header">
        <div className="searchArea">
          <Typography
            className={classes.title}>
             Gnews<IoEarthOutline className={classes.slogan}/>
          </Typography>
          <SearchField
            userTypes={userTypes}
            handleSearch={this.handleSearch}
            handleUserTypes={this.handleUserTypes}
          />
          <Weather/>
        </div>
        <SectionGroup handleSection={this.handleSection}/>
        </div>
        <div className="App">
          <div>
          </div>
          <div className="Container">
            <div className="Total">About {total} results </div>
            {element}
            <Footer />
          </div>
          <div className="App-right">
            {latestNewsList}
            <PinnedList
              results={results}
              pinnedList={pinnedList}
              handlePinnedList={this.handlePinnedList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);