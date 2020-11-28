import React from 'react'
import { View } from 'react-native'
import publicIP from 'react-native-public-ip';
import HomeView from './Home/HomeView'
export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {
       country: '',
       city: ''
    }
  }
  componentDidMount() {
    // Local Ip
    publicIP()
    .then(ip => {
      //fetch country and city by api
      fetch(`http://ip-api.com/json/${ip}?fields=country,city`)
      .then( response=>{
        return response.json()
      })
      .then(data=>{
        let { country, city } = data
        this.setState({
          country: country,
          city: city
        })
      })
    })
    .catch(error => {
      console.log(error);
    });

  }
  render(){
    return (
      //Home view Component
      <View> 
        <HomeView country={this.state.country} city={this.state.city}/> 
      </View>
      )
    }
}


  