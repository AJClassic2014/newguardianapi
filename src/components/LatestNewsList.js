import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: 368,
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
  newsBar: {
    display: 'flex',
    alignContent: 'center',
    fontSize: '1rem',
    fontWeight: 550,
  },
  newsTitle: {
    paddingLeft: 10,
    fontSize: '1.4rem',
    fontWeight: 550,
    color: '#000000',
  },

  listItem: {
    borderBottom: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },

  titleLeft:{
    width: 11,
    backgroundColor: '#01cfff',
  },

  link: {
    fontSize: '0.8rem',
    color: "#70757a",
    textDecoration: 'none',
  },
  rollUp: {
    animation:'anis 10s linear infinite',
  },
});

class LatestNewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      latestNews,
    } = this.props;
    return (
      <List dense className={classes.root}>
        <div className={classes.newsBar}>
          
            <span className={classes.titleLeft}>&nbsp;</span><div className={classes.newsTitle}>Latest News
          </div>
        </div>
        <div className={classes.rollUp}>
        {latestNews.map(value => (
          <ListItem key={value.id} className={classes.listItem}>
            <ListItemText
              primary={
                <Typography
                  className={classes.title}
                  color="primary">
                  <a href={value.link} className={classes.link}>{value.title}</a>
                </Typography>
              }
            />

          </ListItem>
        ))}</div>
      </List>
    );
  }
}

LatestNewsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestNewsList);