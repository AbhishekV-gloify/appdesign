import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Octicons';
import { TextInput } from 'react-native-paper';

import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    TouchableOpacity,
    ImageBackground,

} from 'react-native';

const PersonalDetails = () => {

    const [text, onChangeText] = useState("Useless Text");


    return (
        <View>
            <Icon name='arrow-left' size={30} color='#000' style={{ marginTop: 20, marginLeft: 10 }} />
            <Text style={{ marginTop: 20, marginStart: 15, fontSize: 20, fontWeight: "700", color: 'black' }}>Personal Details</Text>

            <ScrollView>

                <TextInput
                    mode='outlined'
                    label={"First Name"}
                    activeOutlineColor='black'
                    outlineColor='gray'
                    style={{ margin: 10}}
                />


                <TextInput
                    mode='outlined'
                    label={"Last Name"}
                    activeOutlineColor='black'
                    outlineColor='gray'
                    style={{ margin: 10}}
                />

                <TextInput
                    mode='outlined'
                    label={"Mobile No"}
                    activeOutlineColor='black'
                    outlineColor='gray'
                    style={{ margin: 10 }}
                />

                <TextInput
                    mode='outlined'
                    label={"Email"}
                    activeOutlineColor='black'
                    outlineColor='gray'
                    style={{ margin: 10 }}
                />

                <View style={{borderWidth:1,borderColor:'gray', flexDirection:"row", margin:10}}>
                    <Text>Add profile pic</Text>
                    <Text style={{color:'red'}}>*</Text>
                    <Icon name=''/>
                </View>

            </ScrollView>

        </View>
    )
}

const styles = () => StyleSheet.create({
    input: {
        backgroundColor: "red",
    },

    labelContainer: {
        backgroundColor: "black", // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 3, // Amount of spacing between border and first/last letter
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "black", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    inputContainer: {
        borderColor: "black",
        borderWidth: 1, // Create border
        borderRadius: 8, // Not needed. Just make it look nicer.
        padding: 8, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
    },
})

export default PersonalDetails
