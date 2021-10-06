import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import weatherApi from "../functions/WeatherApi";
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  weatherContainer: {
    display:'grid',
    gridTemplateColumns: '2fr 1fr 2fr',
    alignItems: 'center',
    justifyItems: 'center',
    //gridColumnGap: '1rem',

  },
  weatherImg:{
      width: 40,
      borderRadius: 12,
  },
  weatherInfo:{
    color: '#ccc',
    marginLeft: 5,
},
temperature:{
    color: '#ffffff',
    fontWeight: 'bold',
}
});

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        weatherDescriptions: "",
        temperature: "",
        weatherIcons: "",
      };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {
    this.getWeatherInfo();
  };

  getWeatherInfo = () => {
    this.setState(() => {
        weatherApi()
        .then(({ data: { current } }) => {
          this.setState({
            weatherDescriptions: current.weather_descriptions,
            temperature: current.temperature,
            weatherIcons: current.weather_icons
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: error.message });
        });
    });
  }

  render() {
const { classes,
    } = this.props; 
    const {
        weatherDescriptions,
        temperature,
        weatherIcons
      } = this.state;
    return (
      <div className={classes.weatherContainer}>
          <span className={classes.root}>
              Melbourne    
              </span>

        <img src={weatherIcons} className={classes.weatherImg}/>    

        <span className={classes.weatherInfo}>
        <span className={classes.temperature}>{temperature}°C</span> Now  <br/> {weatherDescriptions}
        </span>
      </div>
    );
  }
}

export default withStyles(styles)(Weather);