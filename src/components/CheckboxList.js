import React, { useDebugValue } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import StandFirst from "./StandFirst";

const styles = theme => ({
  root: {
    width: 700,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 550,
    marginTop: 20,
  },
  section: {
/*     color: '#ff6600',
    background: '#F5F5F6', */
    color: '#71767b',
    background: '#F5F5F6',
    height: 21,
    borderRadius: 5,
  },
  pinned: {
    backgroundColor: '#70c5ca85',
  },
  pinnedBar: {
    fontSize: '1rem',
    fontWeight: 550,
    backgroundColor: '#ed8836a3',
  },
  pinnedTitle: {
    fontSize: '1rem',
    fontWeight: 550,
    color: 'white',
  },
  link: {
    color: '#1a0dab',
    textDecoration: 'none',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 20,
    fontWeight: 'normal',
  },

  thumbNail:{
  width:200,
  borderRadius:12,
  },

  newsContainer:{
    display: 'grid',
    gridTemplateColumns:  '1fr 3fr',
    gridColumnGap: '1rem',

  },
  altContainer:{
    textAlign: 'right',
  },
  textContainer:{
    display: 'grid',
    gridTemplateRows:  '4fr 1fr',
    justifyContent: 'start',
    gridRowGap: '1rem',
    textAlign: 'left',
  },
  listItem:{
    margin: '32 0',
  },
  standFrist:{
    width: 417,
  },
  sectionContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: 417,
  },
  published:{
    float:'right',
  }


});

class CheckboxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1],
    };
  }

  handleToggle = value => () => {
    const { pinnedList, handlePinnedList } = this.props;
    const currentIndex = pinnedList.indexOf(value);
    const newList = [...pinnedList];

    if (currentIndex === -1) {
      newList.push(value);
    } else {
      newList.splice(currentIndex, 1);
    }
    handlePinnedList(newList);
    this.setState({
      checked: newList,
    });
    console.log(newList);
  };

  render() {
    const {
      classes,
      results,
    } = this.props;
    console.log(results)
    return (
      <List dense className={classes.root}>
        {results.map(value => (
          <ListItem key={value.id} className={classes.listItem}>
            <ListItemText
              primary={
                <Typography
                  className={classes.title}
                  color="textPrimary">
                  <a href={value.link} className={classes.link}>{value.title}</a>
                </Typography>
              }
              secondary={
                <React.Fragment>
                  {((value.standFirst!=null||undefined)&&(value.thumbnail!=null||undefined))?(<div className={classes.newsContainer}>
                    <div><img src={value.thumbnail} className={classes.thumbNail}/></div>
                    <div className={classes.textContainer}>
           
                   <div className={classes.standFrist}><span className={classes.published}>Published: {value.date}</span>
                    <StandFirst text={(value.standFirst!=null||undefined)?value.standFirst.substring(0,2000):""}/> </div>
                      
                  <div className={classes.sectionContainer}>
                 <a href={value.link}>{value.shortUrl}</a><span className={classes.section}>&nbsp;Section: {value.section}&nbsp;</span>
                  </div>
      
                  </div>
                  </div>):(<div className={classes.altContainer}>
                    <span>Published: {value.date}</span><br/><span className={classes.section}>&nbsp;Section: {value.section}&nbsp;</span>
                  </div>)
                  
                  
                  }
                </React.Fragment>
              } />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value)}
                checked={this.state.checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);