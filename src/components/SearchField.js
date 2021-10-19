
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { BsSearch } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const styles = theme => ({
  textField: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: 650,
    height: 44,
  },
  button: {
    backgroundColor: '#ffffff',
  },
  searchButton:{
    fontSize: '1.1rem',
    borderRight: 'solid',
    borderRadius: 0,
    borderWidth: 'thin',
    borderColor: '#dfe1e5',
    color:'#70757a',
    strokeWidth: 40,
  },
  inputHeight: {
    height: 4,
    fontSize: "1em"
  },
  searchField: {
    marginLeft: 40,
    marginTop: 13,
  },
});

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserTypes = this.handleUserTypes.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear = () => {
    this.props.handleUserTypes("");
  }

  handleUserTypes = (event) => {
    this.props.handleUserTypes(event.target.value);
  }

  handleSearch = () => {
    this.props.handleSearch();
  }

  render() {
    const {
      userTypes,
      classes,
    } = this.props;
    return (
      <div className={classes.searchField}>
        <Input
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          value={userTypes}
          onChange={this.handleUserTypes}
          variant="outlined"
          InputProps={{ classes: { input: this.props.classes.inputHeight } }}
          endAdornment={
            <InputAdornment position="end">
              <Button
                className={classes.searchButton}
                onClick={this.handleClear}
              >
                <AiOutlineClose/>
              </Button>
              <Button
                className={classes.searchButton}
                onClick={this.handleSearch}
              >
                <BsSearch/>
              </Button>
            </InputAdornment>
          }
        />
      </div>
    )
  }
}

export default withStyles(styles)(SearchField);
