import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const PersonalData = ({route, props}) => {

    const {name, lname, mno, email} = route.params

    console.log(name);

    return (
        <View style={styles.container}>

            <View style={styles.horizontal}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../images/Vector.png')}
                />

                <Icon name='calendar-blank-outline' size={26} color='gray' />

                <Image
                    style={styles.tinyLogo}
                    source={require('../images/notification.png')}
                />

                <Image
                    style={styles.tinyLogo}
                    source={require('../images/CombinedShape.png')}
                />
            </View>


            <View style={{ flex: 10 }}>
                <View style={{ borderColor: '#247470', borderWidth: 1, borderRadius: 12, flex: 0.5, justifyContent: 'center', margin: 20 }}>
                    <View style={{ backgroundColor: '#EDFDFC', borderRadius: 22, alignSelf: 'center', height: 50, width: 50, justifyContent: 'center' }}>
                        <Icon2 name='done' size={26} color='white' style={{ backgroundColor: '#247470', borderRadius: 17, alignSelf: 'center', padding: 5 }} />
                    </View>
                    <Text style={{ fontSize: 27, fontWeight: '500', color: '#247470', textAlign: 'center' }}>Step 2 of registration successfully completed</Text>
                </View>

                <View style={{flex: 1 }}>
                    <View style={{ borderColor: '#247470', borderWidth: 1, borderRadius: 12, flex: 0.7, marginHorizontal:20}}>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:20, fontWeight:'500',color:'#247470'}}>First Name : {name}</Text>
                        <Text style={{fontSize:20, fontWeight:'500',color:'#247470'}}>Last Name : {lname}</Text>
                        <Text style={{fontSize:20, fontWeight:'500',color:'#247470'}}>Mobile no : {mno}</Text>
                        <Text style={{fontSize:20, fontWeight:'500',color:'#247470'}}>Email : {email}</Text>
                    </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        flex: 0.5,
    }

})

export default PersonalData