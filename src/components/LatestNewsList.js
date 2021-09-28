import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: 400,
    marginTop: 40,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  title: {
    fontSize: 14,
    fontWeight: 550,
  },
  section: {
    color: '#ff6600',
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
    textDecoration:'none',
  }

});

class LatestNewsList extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = {
      checked: [1],
    }; */
  }

  /* handleToggle = value => () => {
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
  }; */

  render() {
    const {
      classes,
      results,
    } = this.props;
    return (
      <List dense className={classes.root}>
        {results.slice(0,14).map(value => (
          <ListItem key={value.id}>
            <ListItemText
              primary={
                <Typography
                  className={classes.title}
                  color="textPrimary">
                  <a href={value.link} className={classes.link}>{value.title}</a>
                </Typography>
              }
             />
            
          </ListItem>
        ))}
        
        
      </List>
    );
  }
}

LatestNewsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestNewsList);