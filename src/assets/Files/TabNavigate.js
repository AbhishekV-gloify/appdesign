import React from "react";
import {Image} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./PersonalDetails";
import SettingsScreen from "./PatientData";

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    elevation: 0,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon:
                        (tabInfo) => (<Image source={require('../images/Vector.png')} />),
                    tabBarShowLabel: false,
                    tabBarIndicatorStyle:  {
                        backgroundColor: 'transparent',
                    }
                }} />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: (tabInfo) => (<MaterialIcons
                        name="settings"
                        size={25}
                        color={tabInfo.tintColor} />),
                    tabBarShowLabel: false,
                    tabBarIndicatorStyle: {
                        backgroundColor: 'transparent',
                    }
                }} />

        </Tab.Navigator>
    );
}
export default MyTabs;
