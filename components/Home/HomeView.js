import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import cityImage from '../../assets/city.png'
const HomeView = props =>{
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(
      <View> 
            <ImageBackground 
                source={cityImage}
                style={styles.image}
            > 
                <SafeAreaView>
                <View> 
                    <Text
                        style={styles.city}
                    >{props.city}</Text>

                    <Text
                        style={styles.country}
                    >{props.country}
                    </Text>
                    <Text
                    style={{
                        color: '#000',
                        textAlign: 'center',
                        paddingTop: 80,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#522289'

                    }}
                >{d.getDate()}, {months[d.getMonth()]} </Text>
                </View>                
                </SafeAreaView>
            </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      height: 780,
      width: "100%"
    },
    city:{
        paddingTop: 70,
        paddingLeft: 40,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#522289'
    },
    country: {
        paddingTop: 5,
        paddingLeft: 60,
        fontSize: 15,
        color: '#735f8a',
        fontWeight: 'bold'
    }
});
  
export default HomeView