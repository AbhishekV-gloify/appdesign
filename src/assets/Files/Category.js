import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'



const Category = () => {

    const [selectedValue, setSelectedValue] = useState("java");
    const [isClicked, setIsClicked] = useState(false)
    return (
        <View>
            <View style={[styles.blackBorder, styles.picker]}>
                <TouchableOpacity
                    style={styles.inputText}
                    onPress={() => { setIsClicked(!isClicked) }}>
                    <Text style={{ lineHeight: 40 }} >Select BOQs</Text>
                </TouchableOpacity>
                {isClicked ? (<Icon name="caretdown" size={14} color='black' style={{ paddingHorizontal: 10 }} />) : (<Icon name="caretup" size={14} color='black' style={{ paddingHorizontal: 10 }} />)}
            </View>

            {isClicked ? 
            (<View style={styles.pickerArea}>
                

            </View>) 
            : null }

            
        </View>
    )
}

const styles = StyleSheet.create({
    topMargin: { marginTop: 20 },

    labelBg: {
        flexDirection: "row",
        paddingVertical: 2,
        paddingHorizontal: 8,
        position: "absolute",
        zIndex: 0,
        marginLeft: 30,
        backgroundColor: "white"
    },

    labeltext: {
        color: "black",
        opacity: 0.4,
        alignItems: "center",
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '400'
    },

    blackBorder: {
        width:'90%',
        alignSelf:'center',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 12,
        zIndex: -1,
        borderRadius: 7
    },

    inputText: {
        flex: 1,
        color: "gray",
        paddingLeft: 20
    },



    white: { color: 'white' },

    picker:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },

    pickerArea:{
        width:'90%',
        backgroundColor:'white',
        elevation:5,
        borderRadius:12,
        height:250,
        alignSelf:'center',
        marginTop:10
    }


})

export default Category

