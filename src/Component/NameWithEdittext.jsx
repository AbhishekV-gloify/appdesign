import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'


const NameWithEdittext = ({ names, plHolder, keyboardtype }) => {
    return (
        <View style={styles.horizintal_flex}>
            <View style={styles.itemView}>
                <Text style={styles.form_itemName}>{names}</Text>
            </View>
            <TextInput
                placeholder={plHolder}
                style={styles.editText}
                keyboardType={keyboardtype} />
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5
    },

    editText: {
        borderColor: 'black',
        borderRadius: 6,
        flex: 1,
        borderWidth: 0.5,
        height: 40
    },

    form_itemName: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        paddingHorizontal: 5,
        alignSelf: 'center',
    },
    horizintal_flex: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },

})

export default NameWithEdittext