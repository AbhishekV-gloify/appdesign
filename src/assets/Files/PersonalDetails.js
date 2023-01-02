import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const SimpleEdittext = ({ label, value, required, calendarIcon }) => {

    if (required == false) {
        return (
            <View style={styles.topMargin}>
                <View style={styles.labelBg}>
                    <Text style={styles.labeltext}>
                        {label}
                    </Text>
                </View>

                <View style={styles.blackBorder}>
                    <TextInput style={styles.inputText}>
                        {value}
                    </TextInput>
                </View>
            </View>
        );
    }
    else if ((required == true) && (calendarIcon == false)) {
        return (
            <View style={styles.topMargin}>
                <View style={styles.labelBg}>
                    <Text style={styles.labeltext}>
                        {label}
                    </Text>
                    <Text style={{ color: "red" }}>*</Text>

                </View>

                <View style={styles.blackBorder}>
                    <TextInput style={styles.inputText}>
                        {value}
                    </TextInput>
                </View>
            </View>
        );
    } else if ((required == true) && (calendarIcon == true)) {
        return (
            <View>
                <View style={{ flexDirection: "row", paddingVertical: 2, paddingHorizontal: 8, position: "absolute", zIndex: 0, marginLeft: 30, width: "auto", backgroundColor: "white" }}>
                    <Text style={{ color: "black", opacity: 0.4, alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400' }}>
                        {label}
                    </Text>
                    <Text style={{ color: "red" }}>*</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'gray', marginTop: 12, zIndex: -1, marginHorizontal: 20, borderRadius: 7 }}>
                    <TextInput style={{ color: "gray", paddingLeft: 20 }}>
                        {value}
                    </TextInput>
                    <Icon name='calendar-blank-outline' size={23} color='#247470' style={{ marginRight: 20, alignSelf: "center" }} />
                </View>
            </View>
        );
    }
}

const PersonalDetails = () => {


    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Icon name='arrow-left' size={30} color='#000' style={{ marginTop: 20, marginLeft: 10 }} />
            <Text style={{ marginTop: 20, marginStart: 15, fontSize: 20, fontWeight: "700", color: 'black' }}>Personal Details</Text>

            <ScrollView>

                <SimpleEdittext label='First Name' value='Vikas' required={false} calendarIcon={false} />
                <SimpleEdittext label='Last Name' value='Gloify' required={false} calendarIcon={false} />
                <SimpleEdittext label='Mobile No' value='9916476600' required={false} calendarIcon={false} />
                <SimpleEdittext label='Email' value='vikas@goify.com' required={false} calendarIcon={false} />


                <View style={{ borderWidth: 1, borderRadius: 6, borderColor: 'gray', flexDirection: "row", margin: 20, 
                alignItems: "center", 
                justifyContent: "space-between"
                 }}>
                    <View style={{ flexDirection: "row", marginLeft: 20 }}>
                        <Text style={{ color: "black", fontWeight: "400", fontSize: 16, lineHeight: 18 }}>Add profile pic</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
                    <View style={{ 
                        backgroundColor: '#E2EEED', 
                        alignItems: "center", 
                        // width: 64, 
                        // height: 64, 
                        padding:'5%',
                        justifyContent: "center", 
                        borderRadius: 32,
                         marginVertical: 10, 
                         marginEnd: 20 ,
                         }}>
                        <Icon2 name='camera' size={25} color='#247470' style={[styles.cameraBG]} />
                    </View>
                </View>



                <View>

                    <View style={{ flexDirection: "row", paddingVertical: 2, paddingHorizontal: 8, position: "absolute", zIndex: 0, marginLeft: 30, width: "auto", backgroundColor: "white" }}>
                        <Text style={{ color: "black", opacity: 0.4, alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400' }}>
                            Date of Birth
                        </Text>
                        <Text style={{ color: "red" }}>*</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'gray', marginTop: 12, zIndex: -1, marginHorizontal: 20, borderRadius: 7 }}>
                        <TextInput style={{ color: "gray", paddingLeft: 20 }}>
                            DD / MM / YY
                        </TextInput>
                        <Icon name='calendar-blank-outline' size={23} color='#247470' style={{ marginRight: 20, alignSelf: "center" }} />
                    </View>
                </View>

                <View style={{ flexDirection: "row", margin: 20 }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 16, lineHeight: 18 }}>Gender</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>

                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flexDirection: "row", borderColor: "#C4C4C4", borderWidth: 1, marginLeft: 20, borderRadius: 6, flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 10 }}>
                        <Icon3 name='male' size={20} color='black' />
                        <Text style={{ color: 'black', marginLeft: 5 }}>Male</Text>
                    </View>

                    <View style={{ flexDirection: "row", borderColor: "#C4C4C4", borderWidth: 1, borderRadius: 6, marginStart: 10, flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 10 }}>
                        <Icon3 name='female' size={20} color='black' />
                        <Text style={{ color: 'black', marginLeft: 5 }}>Female</Text>
                    </View>

                    <View style={{ flexDirection: "row", borderColor: "#C4C4C4", borderWidth: 1, borderRadius: 6, flex: 1, marginStart: 10, marginRight: 20, alignItems: "center", justifyContent: "center", paddingVertical: 10 }}>
                        <Icon3 name='md-transgender' size={20} color='black' />
                        <Text style={{ color: 'black', marginLeft: 5 }}>Other</Text>
                    </View>
                </View>


                <SimpleEdittext label='Address' value='' required={true} calendarIcon={false} />
                <SimpleEdittext label='Landmark' value='' required={false} calendarIcon={false} />
                <SimpleEdittext label='Locality' value='' required={true} calendarIcon={false} />




                <View style={{ flexDirection: "row" }}>
                    
                    
                    <View style={{ marginTop: 20, flex: 1 }}>
                        <View style={{ flexDirection: "row", paddingVertical: 2, paddingHorizontal: 8, position: "absolute", zIndex: 0, marginLeft: 30, width: "auto", backgroundColor: "white" }}>
                            <Text style={{ color: "black", opacity: 0.4, alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400' }}>
                                Pincode
                            </Text>
                            <Text style={{ color: "red" }}>*</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'gray', marginTop: 12, zIndex: -1, marginHorizontal: 20, borderRadius: 7 }}>
                            <TextInput style={{ color: "gray", paddingLeft: 20 }}>

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flex: 1 }}>

                        <View style={{ flexDirection: "row", paddingVertical: 2, paddingHorizontal: 8, position: "absolute", zIndex: 0, marginLeft: 30, width: "auto", backgroundColor: "white" }}>
                            <Text style={{ color: "black", opacity: 0.4, alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400' }}>
                                City
                            </Text>
                            <Text style={{ color: "red" }}>*</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'gray', marginTop: 12, zIndex: -1, marginHorizontal: 20, borderRadius: 7 }}>
                            <TextInput style={{ color: "gray", paddingLeft: 20 }}>

                            </TextInput>
                        </View>

                    </View>

                </View>

                <SimpleEdittext label='State' value='' required={true} calendarIcon={false}/>
                <SimpleEdittext label='Country' value='' required={true} calendarIcon={false}/>


                <View style={{ borderWidth: 1, borderColor: 'gray', marginTop: 15, marginHorizontal: 10, borderRadius: 6 }}>
                    <Text style={{ color: "black", alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400', marginTop: 7, marginLeft: 10 }}>Education Qualification</Text>

                    <SimpleEdittext label='Enter Degree' value='Select Degree' required={true} calendarIcon={false}/>
                    <SimpleEdittext label='Degree Year' value='MM / YYYY' required={true} calendarIcon={false}/>

                    <View style={{ flexDirection: "row", alignSelf: "flex-end", margin: 10 }}>
                        <Icon_Entypo name='plus' color='white' size={15} style={{ backgroundColor: "#247470", borderRadius: 12, alignSelf: "center", padding: 4 }} />
                        <Text style={{ alignSelf: 'center', fontSize: 12, lineHeight: 18, marginLeft: 10, color: '#247470' }}>Add more</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: 'gray', marginTop: 15, marginHorizontal: 10, borderRadius: 6 }}>
                    <Text style={{ color: "black", alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400', marginTop: 7, marginLeft: 10 }}>Registration Details</Text>


                    <SimpleEdittext label='Enter Registration Detail' value='1234-5678-90' required={true} calendarIcon={false}/>
                    <SimpleEdittext label='Council' value='Select Council' required={false} calendarIcon={false}/>
                    <SimpleEdittext label='Year' value='YYYY' required={true} calendarIcon={true} style={{marginTop:20}}/>

                    <View style={{ flexDirection: "row", alignSelf: "flex-end", margin: 10 }}>
                        <Icon_Entypo name='plus' color='white' size={15} style={{ backgroundColor: "#247470", borderRadius: 12, alignSelf: "center", padding: 4 }} />
                        <Text style={{ alignSelf: 'center', fontSize: 12, lineHeight: 18, marginLeft: 10, color: '#247470' }}>Add more</Text>
                    </View>
                </View>

                
                <SimpleEdittext label='Speciality' value='' required={true} calendarIcon={false} />

                <SimpleEdittext label='Practising Since' value='MM / YYYY' required={true} calendarIcon={false}/>
                

               

                <TouchableOpacity style={{ backgroundColor: "#247470", width: '90%', alignSelf: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 6, marginVertical: 20 }}>
                    <Text style={{ color: 'white' }}>Next</Text>
                </TouchableOpacity>



            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "red",
    },


    inputContainer: {
        borderColor: "black",
        borderWidth: 1, // Create border
        borderRadius: 8, // Not needed. Just make it look nicer.
        padding: 8, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
    },

    textinput_style: {
        height: 50,
        left: '0%',
        right: '0%',
        top: '19.35%',
        bottom: '0%',
        background: '#000',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#BEC2C4'
    },

    cameraBG: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // width: 64,
        // height: 64,
        // borderRadius: 32,
        // alignSelf:'center',
        // backgroundColor: '#E2EEED',
    },

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
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 12,
        zIndex: -1,
        marginHorizontal: 20,
        borderRadius: 7
    },

    inputText: {
        color: "gray",
        paddingLeft: 20
    }
})

export default PersonalDetails
