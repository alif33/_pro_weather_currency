import React from 'react'
import publicIP from 'react-native-public-ip';
import CurrencyView from './Currency/CurrencyView'
export default class Currency extends React.Component {
  constructor(){
    super()
    this.state = {
       base: '',
       currency: '',
       rates: '',
       rate: ''
    }
  }
componentDidMount() {
  publicIP()
  .then(ip => {
    fetch(`http://ip-api.com/json/${ip}?fields=currency`)
    .then( response=>{
      return response.json()
    })
    .then(data=>{
      let { currency } = data
      if(data) {
        const API_KEY = '5fe0641f2b494ab990140ed0fb5a52fe'
        fetch(`https://api.currencyfreaks.com/latest?apikey=${API_KEY}`)
        .then( response =>{
          return response.json()
        })
        .then( amount =>{
          let rates = amount.rates
          if(rates) {
            let allRates = []
            for (var key in rates) {
              if (rates.hasOwnProperty(key)) {
                  allRates.push(key + " " + rates[key])
                  if(key === currency){
                      console.log(key + " " + rates[key]);
                      this.setState({
                        base: amount.base,
                        currency: currency,
                        rates: allRates,
                        rate: rates[key]                        
                      })
                  }
              }
          }
          }
        })
      }
    })
  })
  .catch(error => {
    console.log(error);
  });
}

render(){
  return (
    <CurrencyView 
      base={this.state.base} 
      currency={this.state.currency} 
      rates={this.state.rates}
      rate={this.state.rate}
    />  
    )
  }
}


  

