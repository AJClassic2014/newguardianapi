import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';

const styles = () => ({
  root: {
    color: '#22213c',
    textAlign: 'left',
  }
});

class StandFirst extends Component {
  constructor(props) {
    super(props);
    this.handleStringHTML = this.handleStringHTML.bind(this);
  }

  handleStringHTML = (value) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(value, "text/html");
    return doc;
  };

  render() {
    const { classes,
      text
    } = this.props;
    return (
      <div className={classes.root}>
        {
          ReactHtmlParser(text)
        }
      </div>
    );
  }
}

export default withStyles(styles)(StandFirst);