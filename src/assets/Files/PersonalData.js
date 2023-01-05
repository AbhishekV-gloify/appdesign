import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PersonalDetails from "./PersonalDetails";
import Notification from "./Notification";
import TabNavigate from "./TabNavigate"

const SimpleEdittext = ({ label, value, setValue }) => {

    // if (required == false) {
    return (
        <View style={styles.topMargin}>
            <View style={styles.labelBg}>
                <Text style={styles.labeltext}>
                    {label}
                </Text>
            </View>

            <View style={[styles.blackBorder, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <TextInput
                    style={styles.inputText}
                    placeholder={value}
                    onChangeText={(value) => setValue(value)}
                />
            </View>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();


const PersonalData = ({ route, navigation }) => {

    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');




    return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.greenborder2}>
                        <View style={styles.lightGreen}>
                            <Icon2 name='done' size={26} color='white' style={styles.iconBg} />
                        </View>
                        <Text style={styles.infotext}>Step 2 of registration successfully completed</Text>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.greenborder}>
                            <View style={styles.alignCenter}>
                                <Text style={styles.textStyle}>First Name : {route?.params?.data?.isNameAdded}</Text>
                                <Text style={styles.textStyle}>Last Name : {route?.params?.data?.lastName}</Text>
                                <Text style={styles.textStyle}>Mobile no : {route?.params?.data?.mobileNo}</Text>
                                <Text style={styles.textStyle}>Email : {route?.params?.data?.email}</Text>
                            </View>
                        </View>

                        <SimpleEdittext label={'Enter data'} setValue={setData1} />
                        <SimpleEdittext label={'Enter data2'} setValue={setData2} />



                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('navigation')}>
                            <Text style={{ color: 'white' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },

    iconBg: {
        backgroundColor: '#247470',
        borderRadius: 17,
        alignSelf: 'center',
        padding: 5
    },

    greenborder: {
        borderColor: '#247470',
        borderWidth: 1,
        borderRadius: 12,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        justifyContent: 'center'
    },

    greenborder2: {
        paddingVertical: 30,
        width: '90%',
        marginVertical: 20,
        alignSelf: "center",
        borderColor: '#247470',
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: 'center'
    },

    topMargin: { marginTop: 20 },

    alignCenter: { alignItems: "center" },

    infotext: {
        fontSize: 27,
        fontWeight: '500',
        color: '#247470',
        textAlign: 'center'
    },

    lightGreen: {
        backgroundColor: '#EDFDFC',
        borderRadius: 22,
        alignSelf: 'center',
        height: 50,
        width: 50,
        justifyContent: 'center'
    },

    labelBg: {
        flexDirection: "row",
        paddingVertical: 2,
        paddingHorizontal: 8,
        position: "absolute",
        zIndex: 0,
        marginLeft: 30,
        backgroundColor: "white"
    },

    textStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#247470'
    }
    ,

    labeltext: {
        color: "black",
        opacity: 0.4,
        alignItems: "center",
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '400'
    },

    blackBorder: {
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 12,
        zIndex: -1,
        marginHorizontal: 20,
        borderRadius: 7
    },

    inputText: {
        flex: 1,
        color: "gray",
        paddingLeft: 20
    },

    button: {
        backgroundColor: '#247470',
        borderRadius: 6,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 20,
        alignSelf: 'center'
    }
})

export default PersonalData