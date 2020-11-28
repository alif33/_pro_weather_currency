import React from 'react'
import WeatherView from './Weather/WeatherView'
export default class Weather extends React.Component {
  constructor(){
    super()
    this.state = {
       name: '',
       temp: '',
       humidity: '',
       desc: '',
       icon: ''
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition( location=>{
       let { latitude, longitude } = location.coords
       const API_KEY = '9f0e93e4ede6381236864d3090571516'
       fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
       .then(response =>{
         return response.json()
       })
       .then(results =>{
         this.setState({
          name: results.name,
          temp: results.main.temp,
          humidity: results.main.humidity,
          desc: results.weather[0].description,
          icon: results.weather[0].icon
         })
       })
       .catch ( error=>{
         console.log(error)
       })
    },
    error=>{
      console.log(error)
    },{
      enableHighAccuracy: true,
      maximumAge: 20000
    })
  }
  render(){
    return (
      <WeatherView 
        name ={this.state.name}
        temp ={this.state.temp}
        humidity ={this.state.humidity}
        desc ={this.state.desc}
        icon ={this.state.icon}
      />
      )
    }
}



  


