import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image } from 'react-native'
import {Card, Title, Paragraph} from 'react-native-paper'

const WeatherView = props =>{
    
  return(
      <View> 
        <SafeAreaView> 
            <View
               style={{
                   backgroundColor: '#5656c0',
                   paddingBottom: 20
               }}
            > 
                <Text 
                    style={styles.temp}
                    >{props.temp}&deg; C
                </Text>
                <Text 
                    style={styles.name}
                    >{props.name}
                </Text>
                <Image 
                    source={{uri:`http://openweathermap.org/img/w/${props.icon}.png`}}
                    style={{
                        width: 150,
                        height: 150,
                        alignSelf: 'center'
                    }}
                />                    
                <Text
                    style={styles.desc}
                    >{props.desc}
                </Text>
            </View>
            <View style={styles.cardView}> 
                <Card 
                    style={{
                        width: "100%",
                        height: 80,
                        marginTop: 100,
                        marginBottom: 20
                    }}
                > 
                    <Title
                    style={{
                        textAlign: 'center',
                        paddingTop: 10

                    }} 
                    ><Text
                    style={{
                        color: '#522289',
                        fontWeight: 'bold'
                    }}
                >Temparature{"\n"}</Text>  
                    <Text
                        style={{
                            fontSize: 25
                        }}
                    >{props.temp}&deg; C</Text></Title>
                </Card>
                <Card
                    style={{
                        width: "100%",
                        height: 80,
                        alignSelf: 'center'
                    }}
                > 
                    <Title
                        style={{
                            textAlign: 'center',
                            paddingTop: 10

                        }} 
                    >
                        <Text style={{
                            color: '#522289',
                            fontWeight: 'bold'
                        }}>Humidity{"\n"}
                        </Text>
                        <Text
                            style={{
                                fontSize: 25
                            }}
                            >{props.humidity}
                        </Text>
                    </Title>
                </Card>
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
    temp:{
        paddingTop: 50,
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'
    },
    name: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    desc: {
        color: '#fff',
        textAlign: 'right',
        marginRight: 50,
        fontWeight: 'bold',
        fontSize: 20
    },
    cardView: {
        flex: 1,
        width: '80%',
        alignSelf: 'center'
    }
});
  
export default WeatherView