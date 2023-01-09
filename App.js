import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import PersonalData from './src/assets/Files/PersonalData'
import PersonalDetails from './src/assets/Files/PersonalDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/assets/Files/TabNavigate'
import PatientData from './src/assets/Files/PatientData';
import Category from './src/assets/Files/Category';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='category' >
        <Stack.Screen options={{headerShown: false}} name="register" component={PersonalDetails} />
        <Stack.Screen options={{headerShown: false}} name="data" component={PersonalData}/>
        <Stack.Screen options={{headerShown: false}} name= "navigation" component={Tabs}/>
        <Stack.Screen options={{headerShown: false}} name= "All Patients" component={PatientData}/>
        <Stack.Screen options={{headerShown: false}} name='category' component={Category}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
