import axios from "axios";

export default () => {
     const test=axios.get(`http://api.weatherstack.com/current?access_key=1c6318f97658c27cf76240d063f797bb&query=Melbourne`);
    console.log(test); 
    return axios.get(`http://api.weatherstack.com/current?access_key=1c6318f97658c27cf76240d063f797bb&query=Melbourne`);
}