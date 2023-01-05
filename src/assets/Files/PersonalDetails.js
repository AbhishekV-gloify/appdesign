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

const SimpleEdittext = ({ label, value, required, setValue, rightIcon, enabled , data}) => {

    // if (required == false) {
    return (
        <View style={styles.topMargin}>
            <View style={styles.labelBg}>
                <Text style={styles.labeltext}>
                    {label}
                </Text>
                {required && <Text style={{ color: "red" }}>*</Text>}
            </View>

            <View style={[styles.blackBorder, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <TextInput
                    style={styles.inputText}
                    placeholder={value}
                    onChangeText={(value) => setValue(value)}
                    editable={enabled}
                    value={data}
                />
                {rightIcon &&
                    <Icon
                        name={rightIcon}
                        size={23}
                        color='#247470'
                        style={{ marginRight: 20, alignSelf: "center" }}
                    />
                }
            </View>
        </View>
    );
}

const PersonalDetails = ({ navigation , route}) => {
    const [addMoreEdu, setAddMoreEdu] = useState(false);
    const [addMoreReg, setAddMoreReg] = useState(false);
    const [isNameAdded, setIsNameAdded] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [locality, setLocaity] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [practising, setPractising] = useState('');
    const [educationData, setEducationData] = useState([{
        degree: '',
        college: '',
        year: ''
    }])
    const [eduInput, setEduInput] = useState([{
        degree: '',
        college: '',
        year: ''
    }])
    const [regInput, setRegInput] = useState([{
        regDetail: '',
        council: '',
        year: ''
    }])

    const dataObject = { isNameAdded, lastName, mobileNo, email }
    
    // const { data2} = route?.params
console.log("qwertioiuhgfd  :::: ", route?.params?.dta1)

    const handleInputChange = (e, index) => {
        const { degree, college, year } = e.target;
        const list = [...eduInput];
        list[index][degree] = value;
        setEduInput(list);
    }

    const handleRegInputChange = (e, index) => {
        const { regDetail, council, year } = e.target;
        const list2 = [...regInput];
        list2[index][regDetail] = value;
        setRegInput(list2);
    }

    const handleRegClick = () => {
        setRegInput([...regInput, { regDetail: '', council: '', year: '' }])
    }

    const handleclick = () => {
        setEduInput([...eduInput, { degree: '', college: '', year: '' }])
    }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Icon name='arrow-left' size={30} color='#000' style={{ marginTop: 20, marginLeft: 10 }} />
            <Text style={{ marginTop: 20, marginStart: 15, fontSize: 20, fontWeight: "700", color: 'black' }}>Personal Details</Text>

            <ScrollView>

                <SimpleEdittext label='First Name' value='Vikas' setValue={setIsNameAdded} />
                <SimpleEdittext label='Last Name' value='Gloify' setValue={setLastName} />
                <SimpleEdittext label='Mobile No' value='9916476600' setValue={setMobileNo} />
                <SimpleEdittext label='Email' value='vikas@goify.com' setValue={setEmail} />


                <View style={{
                    borderWidth: 1, borderRadius: 6, borderColor: 'gray', flexDirection: "row", margin: 20,
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
                        padding: '5%',
                        justifyContent: "center",
                        borderRadius: 32,
                        marginVertical: 10,
                        marginEnd: 20,
                    }}>
                        <Icon2 name='camera' size={25} color='#247470' style={[styles.cameraBG]} />
                    </View>
                </View>

                {console.log({ isNameAdded }, { lastName }, { email })}
                <SimpleEdittext
                    label='Date of Birth' value='DD / MM / YY' required={true} setValue={setDob}
                    rightIcon={"calendar-blank-outline"}
                />



                <View style={{ flexDirection: "row", margin: 20 }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 16, lineHeight: 18 }}>Gender</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>

                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-around', marginHorizontal: 10 }}>
                    <TouchableOpacity style={gender === 'Male' ? styles.genderBtnSelected : styles.genderBtn} onPress={() => setGender('Male')}>
                        <Icon3 name='male' size={20} color='black' />
                        <Text style={{ color: 'black', marginLeft: 5 }}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={gender === 'Female' ? styles.genderBtnSelected : styles.genderBtn} onPress={() => setGender('Female')}>
                        <Icon3 name='female' size={20} color='black' />
                        <Text style={{ color: 'black', marginLeft: 5 }}>Female</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={gender === 'Other' ? styles.genderBtnSelected : styles.genderBtn} onPress={() => setGender('Other')}>
                        <Icon3 name='md-transgender' size={20} color='black' />
                        <Text style={{ color: 'black', marginLeft: 5 }}>Other</Text>
                    </TouchableOpacity>
                </View>

                {/* {isGenderSelected ? ChangeGenderBackground() : null} */}


                <SimpleEdittext label='Address' value='' required={true} setValue={setAddress} />
                <SimpleEdittext label='Landmark' value='' required={false} setValue={setLandmark} />
                <SimpleEdittext label='Locality' value='' required={true} setValue={setLocaity} />


                <View style={{ flexDirection: "row" }}>


                    <View style={{ marginTop: 20, flex: 1 }}>
                        <View style={{ flexDirection: "row", paddingVertical: 2, paddingHorizontal: 8, position: "absolute", zIndex: 0, marginLeft: 30, width: "auto", backgroundColor: "white" }}>
                            <Text style={{ color: "black", opacity: 0.4, alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400' }}>
                                Pincode
                            </Text>
                            <Text style={{ color: "red" }}>*</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: 'gray', marginTop: 12, zIndex: -1, marginHorizontal: 20, borderRadius: 7 }}>
                            <TextInput onChangeText={(value) => setPincode({ value })} style={{ color: "gray", paddingLeft: 20 }}>

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
                            <TextInput onChangeText={(value) => setCity({ value })} style={{ color: "gray", paddingLeft: 20 }}>

                            </TextInput>
                        </View>

                    </View>

                </View>

                <SimpleEdittext label='State' value='' required={true} onChangeText={(value) => setValue({ setState })} />
                <SimpleEdittext label='Country' value='' required={true} onChangeText={(value) => setValue({ setCountry })} />


                <View style={styles.bigbox}>
                    <Text style={styles.educational_text}>Education Qualification</Text>
                    {eduInput.map((x, i) => {
                        return (
                            <View>
                                <View style={styles.sep} />
                                <SimpleEdittext label='Enter Degree' value='Select Degree' required={true} setValue={setEducationData} />
                                <SimpleEdittext label='College/University' value='Select College/University' required={true} setValue={setEducationData} />
                                <SimpleEdittext label='Degree Year' value='MM / YYYY' required={true} setValue={setEducationData} rightIcon={"calendar-blank-outline"} />
                            </View>
                        );
                    })}

                    <TouchableOpacity onPress={() => { handleclick() }} style={styles.addmoreBtn}>
                        <Icon_Entypo name='plus' color='white' size={15} style={{ backgroundColor: "#247470", borderRadius: 12, alignSelf: "center", padding: 4 }} />
                        <Text style={{ alignSelf: 'center', fontSize: 12, lineHeight: 18, marginLeft: 10, color: '#247470' }}>Add more</Text>
                    </TouchableOpacity>


                </View>

                <View style={{ borderWidth: 1, borderColor: 'gray', marginTop: 15, marginHorizontal: 10, borderRadius: 6 }}>
                    <Text style={{ color: "black", alignItems: "center", fontSize: 16, lineHeight: 19, fontWeight: '400', marginTop: 7, marginLeft: 10 }}>Registration Details</Text>

                    {regInput.map((x, i) => {
                        return (
                            <View>
                                <View style={styles.sep} />
                                <SimpleEdittext label='Enter Registration Detail' value='1234-5678-90' required={true} setValue={setEducationData} />
                                <SimpleEdittext label='Council' value='Select Council' required={false} setValue={setEducationData} />
                                <SimpleEdittext label='Year' value='YYYY' required={false} setValue={setEducationData} rightIcon={"calendar-blank-outline"} />
                            </View>
                        );
                    })}


                    <TouchableOpacity onPress={() => handleRegClick()} style={styles.addmoreBtn}>
                        <Icon_Entypo name='plus' color='white' size={15} style={{ backgroundColor: "#247470", borderRadius: 12, alignSelf: "center", padding: 4 }} />
                        <Text style={{ alignSelf: 'center', fontSize: 12, lineHeight: 18, marginLeft: 10, color: '#247470' }}>Add more</Text>
                    </TouchableOpacity>
                </View>


                <SimpleEdittext label='Speciality' value='' required={true} setValue={setSpeciality} />
                <SimpleEdittext label='Practising Since' value='MM / YYYY' required={true} setValue={setPractising} />

                <SimpleEdittext label='display data' value='' required={false} enabled={false} data={route?.params?.dta1}/>
                <SimpleEdittext label='display data2' value='' required={false} enabled={false} data={route?.params?.data2}/>


                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('data', { data: dataObject })}>
                    <Text style={styles.white}>Next</Text>
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
        flex: 1,
        color: "gray",
        paddingLeft: 20
    },

    nextButton: {
        backgroundColor: "#247470",
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 6,
        marginVertical: 20
    },
    sep: {
        backgroundColor: 'gray',
        borderWidth: 0.5,
        marginTop: 20,
        opacity: 0.4,
    },

    white: { color: 'white' },

    addmoreBtn: {
        flexDirection: "row",
        alignSelf: "flex-end",
        margin: 10
    },

    genderBtn: {
        flexDirection: "row",
        borderColor: "#C4C4C4",
        borderWidth: 1,
        borderRadius: 6,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginHorizontal: 10
    },

    genderBtnSelected: {
        flexDirection: "row",
        borderColor: "#247470",
        backgroundColor: '#F0FFFE',
        borderWidth: 1,
        borderRadius: 6,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginHorizontal: 10
    },

    bigbox: {
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginHorizontal: 10,
        borderRadius: 6
    },

    educational_text: {
        color: "black",
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '400',
        marginTop: 7,
        marginLeft: 10
    }
})

export default PersonalDetails
