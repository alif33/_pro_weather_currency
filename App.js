import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Weather from './components/Weather'
import Currency from './components/Currency'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Tab navigation
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-variant'
                  : 'home-variant';
              } else if (route.name === 'Weather') {
                iconName = focused ? 'weather-lightning-rainy' : 'weather-lightning-rainy';
              }else if (route.name === 'Currency') {
                iconName = focused ? 'currency-usd' : 'currency-usd';
              }

              // You can return any Icon component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            showLabel: false
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Weather" component={Weather} />
        <Tab.Screen name="Currency" component={Currency} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


