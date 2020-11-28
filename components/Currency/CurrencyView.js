import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
const CurrencyView = props =>{
    const [amount, setamount] = React.useState({
        TotalAmount: ''
    });
    var d = new Date();
    var days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    let { rate } = props
    const handleAmount = amount =>{
        let TotalAmount = rate * amount
        setamount({
            TotalAmount:TotalAmount
        })
    }
  return(
      <View>             
        <SafeAreaView> 
        <View
            style={{
                backgroundColor: '#5656c0',
                paddingBottom: 30
            }}
        > 
            <Text
                style={
                    styles.usd
                }
            >{props.base}</Text>
            <Text
                style={styles.local}
            >{props.rate} {props.currency}</Text>

            <Text
                style={{
                    paddingTop: 20,
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#fff'
                }}
            >{d.getDate()}, {days[d.getDay()]}</Text>
        </View>
        <View
            style={{
                color: '#5656c0',
                width: '100%',
                height: 60,
                alignSelf: 'center',
                paddingTop: 20
            }}
        > 
        {amount.TotalAmount !== '' ?<Text
            style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#5656c0',
                fontWeight: 'bold'
            }}
        >{amount.TotalAmount} {props.currency}</Text>: null} 
        </View>
        <View> 
        <TextInput
                style={{
                    borderBottomWidth:2,
                    borderBottomColor: '#5656c0',
                    color: '#5656c0',
                    alignSelf: 'center',
                    height: 60,
                    width: 200,
                    fontWeight: 'bold'
                }}
                keyboardType = 'numeric'
                placeholder="USD"
                onChangeText={amount => handleAmount(amount)}
            />
        </View>
        </SafeAreaView>
      </View>
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      height: 780,
      width: "100%"
    },
    usd:{
        paddingTop: 120,
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'
    },
    local: {
        color: '#fff',
        textAlign: 'right',
        marginRight: 50,
        fontSize: 20
    }
});
  
export default CurrencyView