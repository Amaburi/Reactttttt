import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import Index from '../Screens/Home/index';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, animationEnabled: false }}>        
          <Stack.Screen name="Home" component={Index} />
          <Stack.Screen name="loginsc" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  
      
    );
  };
  
  
  
  export default Navigation;