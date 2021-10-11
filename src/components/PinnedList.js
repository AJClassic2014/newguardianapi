import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
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
    fontSize: '1rem',
    fontWeight: 550,
  },
  section: {
    color: '#ff6600',
  },
  pinned: {
    backgroundColor: '#f2f2f2',
  },
  pinnedBar: {
    display: 'flex',
    alignContent: 'center',
    minHeight: '3rem',
    fontSize: '1rem',
    fontWeight: 550,
    backgroundColor: '#feb301',
  },
  pinnedTitle: {
    margin: 'auto',
    fontSize: '1rem',
    fontWeight: 550,
    color: 'white',
  },
  link: {
    textDecoration: 'none',
  }

});

class PinnedList extends React.Component {
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
      //results,
      pinnedList,
    } = this.props;
    return (
      <List dense className={classes.root}>
        <div className={classes.pinnedBar}>
          <span className={classes.pinnedTitle}>
            Pinned Items
          </span>
        </div>
        {
          pinnedList.map(pinnedItem => (
            <ListItem className={classes.pinned} key={pinnedItem.id}>
              <ListItemText
                primary={
                  <Typography className={classes.title} color="textPrimary">
                    <a href={pinnedItem.link} className={classes.link}>{pinnedItem.title}</a>
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(pinnedItem)}
                  checked={this.state.checked.indexOf(pinnedItem) !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          )
          )
        }
      </List>
    );
  }
}

PinnedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedList);