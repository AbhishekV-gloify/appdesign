import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    FlatList,
    View,
    TouchableOpacity,
} from 'react-native';
import axios from "axios";

const PatientData = () => {
    const [patientList, setPatientList] = useState([])
    const [pageno, setPageNo] = useState(1)
    
    const getLists = async (pageno) => {
        console.log("pageno", pageno)
        await axios.get("https://reqres.in/api/users?page="+pageno)
            .then(res => {
                console.log("resulteeeeeeeeeeeeeeeeeeee", res.data.data)
                console.log("some",...patientList,...res.data.data)
                setPatientList([...patientList,...res.data.data])
            })
            .catch(console.log);
    }

    useEffect((pageno) => {
        getListData(pageno)
    }, [])

    const getListData = async (pageno) => {
        await getLists(pageno)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>All Patients</Text>
            <FlatList
                data={patientList}
                ListFooterComponent={() => (
                    <TouchableOpacity 
                        style={{ 
                            marginVertical: 10, 
                            width: '100%', 
                            backgroundColor: '#2474700D', 
                            height: 54, 
                            justifyContent: 'center', 
                            alignItems: 'center'
                         }} 
                        onPress={()=>{
                            setPageNo(pageno+1);  
                            getListData(pageno+1)
                        }}
                    >
                        <Text 
                            style={{
                                fontFamily:'Poppins-Medium', 
                                fontWeight:'400', 
                                fontSize:14, 
                                color:'#247470'
                            }}
                        >
                            Load more data
                        </Text>
                    </TouchableOpacity>
                )}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 5, width: '100%', alignSelf: 'center' }}>

                            <Image source={{ uri: item.avatar }} style={{ height: 54, width: 54, borderRadius: 21, marginHorizontal: 20 }} />

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontWeight: '500', fontSize: 16, color: 'black', fontStyle: 'normal' }}>{item.first_name}</Text>
                                <Text style={{ color: '#9A9A9A', fontFamily: 'Poppins-Medium', fontWeight: '400', fontSize: 13 }}>F 35, {item.email}</Text>
                            </View>
                        </View>
                    )
                }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    textStyle: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        fontSize: 20,
        margin: 20,
    }
})

export default PatientData