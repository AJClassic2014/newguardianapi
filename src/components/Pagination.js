
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    width: '100%',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  grow: {
    flexGrow: 1,
  },
  menuLeft: {
    color: '#000000',
    fontSize: '1rem',
    fontWeight: 550,
  },
  menuRight: {
    marginLeft: '4%',
    color: '#000000',
    fontSize: '1rem',
    fontWeight: 550,
  },

});

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);
  }

  setPage = (page) => {
    this.props.handlePage(page);
  }

  render() {
    const { 
      total,
      classes,
      currentPage,
      allPages
    } = this.props;
    return (
      allPages > 1 &&
      <Toolbar className={classes.root}>
        <div className={classes.menuLeft}>
          {`${(currentPage - 1) * 15 + 1}-${currentPage * 15 > total ? 
            total : currentPage * 15} of ${total}`}
        </div>
        <div className={classes.menuRight}>
            <Button
              size="small"
              variant="contained"
              className={classes.margin}
              onClick={() => this.setPage(1)}
              disabled={currentPage === 1}
            >
              First
            </Button>        
            <Button
              size="small"
              variant="contained"
              className={classes.margin}
              onClick={() => this.setPage(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              Prev
            </Button>
          {
            `Current Page：${currentPage}`
          }
            <Button
              size="small"
              variant="contained"
              className={classes.margin}
              onClick={() => this.setPage(currentPage + 1)}
              disabled={currentPage === allPages}
            >
              Next
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.margin}
              onClick={() => this.setPage(allPages)}
              disabled={currentPage === allPages}
            >
              Last
            </Button>
        </div>
      </Toolbar>
    )
  }
}

export default withStyles(styles)(Pagination);
