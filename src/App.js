import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
//import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import groupBySection from "./functions/GroupBySection";
import guardianApi from "./functions/GuardianApi";
import SearchField from "./components/SearchField";
import NoResults from "./components/NoResults";
import ResultList from "./components/ResultList";
import PinnedList from "./components/PinnedList";
import LatestNewsList from "./components/LatestNewsList";
import LoadingPage from "./components/LoadingPage";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

const styles = () => ({
  title: {
    padding: '15px 0 0 85px',
    fontSize: '2rem',
    fontWeight: 700,
    width: '100px',
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

  getLatestNews = () => {
    this.setState(() => {
      guardianApi("", 0)
        .then(({ data: { response } }) => {
          let results = groupBySection(response.results).slice(0, 5);
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
  }

  getResultList = (input, page) => {
    this.setState({ loading: true, }, () => {
      guardianApi(input, page)
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
  }

  handlePage = (currentPage) => {
    if (currentPage >= 1) {
      this.getResultList(this.state.userTypes, currentPage);
    }
  };

  handleSearch = () => {
    this.getResultList(this.state.userTypes, 1);
  };

  componentDidMount = () => {
    this.getResultList(this.state.userTypes, this.state.currentPage);
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
    console.log(results)
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
          <Typography
            className={classes.title}>
            Gnews
          </Typography>
          <SearchField
            userTypes={userTypes}
            handleSearch={this.handleSearch}
            handleUserTypes={this.handleUserTypes}
          />
        </div>
        <div className="App">
          <div>
          </div>
          <div className="Container">
            <div className="Total">About {total} results </div>
            {element}
            <Footer />
          </div>
          <div>
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