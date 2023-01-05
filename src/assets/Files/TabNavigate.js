import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./PersonalDetails";
import SettingsScreen from "./Notification";
// import { createAppContainer } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue' },

        }} tabBarOptions={{
            showIcon: true,
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            labelStyle: {
                fontSize: 12,
                padding: 10,
            },
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon:
                        (tabInfo) => (<MaterialIcons
                            name="home"
                            size={25}
                            color={tabInfo.tintColor} />),
                    tabBarShowLabel: false,
                    tabBarIndicatorStyle: {
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


// const Tabs = ()=> createMaterialTopTabNavigator({
//     Home: {
//         screen : Home,
//         navigationOptions : {
//             tabBarLabel : ({}) => {
//                 <View>
//                     <Icon2 name="ios-home" color="#fff" size={22}/>
//                     <Text style = {{color:'#fff'}}>home</Text>
//                 </View>
//             }
//         }
//     },

//     Setting : {
//         screen : Setting,
//         navigationOptions : {
//             tabBarLabel : ({}) => {
//                 <View>
//                     <Icon2 name="ios-home" color="#fff" size={22}/>
//                     <Text style = {{color:'#fff'}}>Setting</Text>
//                 </View>
//             }
//         }
//     }
// },
// {
//     initialRouteName : "Home",
//     lazyLoad : true,
//     tabBarPosition : "top",
//     swipeEnabled : true,
//     tabBarOptions : {
//         style : {
//             height : 60,
//             backgroundColor : "#2b2b39",
//             paddingBottom : 3,
//             paddingTop : 3,
//         },
//         activeTintColor : "#fff",
//         inactiveTintColor : "gray",
//     }
// });

// const MainScreenNavigator = createMaterialTopTabNavigator({
//     Tabs: {
//         screen : Tabs,
//         navigationOptions : {
//             title : 'My App',
//             headerStyle : {
//                 backgroundColor : '#2b2b39'
//             }
//         }
//     }
// })

export default MyTabs;
