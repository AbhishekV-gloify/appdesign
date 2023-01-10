import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from "react-native-date-picker";
import NameWithEdittext from '../Component/NameWithEdittext'
const boqData = [
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    },
    {
        boq: "james carter",
    }
];



const Category = () => {

    const [selectedValue, setSelectedValue] = useState("Select BOQs")
    const [isClicked, setIsClicked] = useState(false)
    const [data, setData] = useState(boqData)
    const [isCategoryVisible, setIsCategoryVisible] = useState(false)
    const [isCategoryClicked, setIsCategoryClicked] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('Select Category')
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false)
    const [month,setMonth] = useState(new Date().getMonth())

    return (
        <View>
            <View style={[styles.blackBorder, styles.picker]}>
                <TouchableOpacity
                    style={styles.inputText}
                    onPress={() => { setIsClicked(!isClicked), setIsCategoryClicked(false) }}>
                    <Text style={{ lineHeight: 40 }} >{selectedValue}</Text>
                </TouchableOpacity>

                {isClicked ?
                    (
                        <Icon
                            name="caretdown"
                            size={14}
                            color='black'
                            style={styles.horizontal_padding} />
                    ) :
                    (
                        <Icon name="caretup"
                            size={14}
                            color='black'
                            style={styles.horizontal_padding}
                        />
                    )
                }


            </View>

            {isClicked ?
                (<View style={styles.pickerArea}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity
                                style={styles.boqItem}
                                onPress={() => {
                                    setIsClicked(false)
                                    setSelectedValue(item.boq)
                                    setIsCategoryVisible(true)
                                }}>

                                <Text>{item.boq}</Text>

                            </TouchableOpacity>
                        )
                        } />

                </View>
                ) : null}


            {isCategoryVisible ? (
                <View style={[styles.blackBorder, styles.picker]}>
                    <TouchableOpacity
                        style={styles.inputText}
                        onPress={() => { setIsCategoryClicked(!isCategoryClicked), setIsClicked(false) }}>
                        <Text style={{ lineHeight: 40 }} >{selectedCategory}</Text>
                    </TouchableOpacity>

                    {isCategoryClicked ?
                        (
                            <Icon
                                name="caretdown"
                                size={14}
                                color='black'
                                style={styles.horizontal_padding} />
                        ) :
                        (
                            <Icon name="caretup"
                                size={14}
                                color='black'
                                style={styles.horizontal_padding}
                            />
                        )
                    }


                </View>
            ) : null}

            {isCategoryClicked ?
                (
                    <View style={styles.categoryCard}>

                        <TouchableOpacity
                            onPress={() => {
                                setSelectedCategory('Raw Materials'),
                                    setIsCategoryClicked(false)
                                setIsFormVisible(true)
                            }}
                            style={{justifyContent: 'center',alignItems:'center'}}>
                            <Text style={styles.categoryItem}>Raw Materials</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedCategory('Appliances'),
                                    setIsCategoryClicked(false)
                                setIsFormVisible(true)
                            }}>
                            <Text style={styles.categoryItem}>Appliances</Text>
                        </TouchableOpacity>

                    </View>
                ) : null
            }


            {selectedCategory == 'Appliances' ? (
                <View style={styles.formCard}>
                    <NameWithEdittext names='Item Name' plHolder="Enter Item Name" />
                    <NameWithEdittext names='Item Quantity' plHolder="Enter Item Qty." />
                    <NameWithEdittext names='Item Code' plHolder="Enter Item Code" keyboardtype='numeric' />
                    <NameWithEdittext names='Item Value' plHolder="Enter Item Value" />
                </View>
            ) : null}

            {selectedCategory == 'Raw Materials' ? (
                <View style={styles.formCard}>

                    <NameWithEdittext names='Item Name' plHolder="Enter Item Name" />
                    <NameWithEdittext names='Item Quantity' plHolder="Enter Item Qty." />
                    <NameWithEdittext names='Item Code' plHolder="Enter Item Code" keyboardtype='numeric' />
                    <NameWithEdittext names='Item Value' plHolder="Enter Item Value" keyboardtype='numeric'/>
                    <NameWithEdittext names='Refer Code' plHolder="Enter Refer Code" />
                    <NameWithEdittext names='GSTIN' plHolder="Enter GSTIN" />


                    <TouchableOpacity style={styles.purchaseDateView} onPress={() => {
                        setOpen(true)
                    }}>
                        <DatePicker
                            modal
                            mode="date"
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                setMonth(date.getMonth())
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        <Text style={styles.purchasedata}>Item Purchase Date</Text>
                        <View style={styles.fd_horizontal}>
                            <Text>{date.getDate()}/{month}/{date.getFullYear()}</Text>
                            <Icon2 name="calendar-blank-outline" size={20} color='black' />
                        </View>
                    </TouchableOpacity>




                </View>
            ) : null}




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
        width: '90%',
        alignSelf: 'center',
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

    picker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    pickerArea: {
        width: '90%',
        backgroundColor: 'white',
        elevation: 5,
        height: 250,
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 10
    },

    boqItem: {
        width: '90%',
        height: 40,
        borderBottomWidth: .2,
        borderBottomColor: '#8e8e8e',
        alignSelf: 'center',
        justifyContent: 'center',

    },

    itemView: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5
    },

    horizontal_padding: {
        paddingHorizontal: 10
    },

    categoryCard: {
        width: '90%',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 10,
        padding: 10,
    },

    categoryItem: {
        width: '90%',
        height: 40,
        borderBottomWidth: .2,
        borderBottomColor: '#8e8e8e',
        justifyContent: 'center',
        alignSelf:'center',
    },

    formCard: {
        width: '90%',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 10,
    },

    horizintal_flex: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
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

    purchasedata: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        paddingHorizontal: 5
    },

    purchaseDateView: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },

    fd_horizontal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 6,
        borderWidth: 0.5,
        justifyContent: 'space-evenly',
        padding: 5
    }





})

export default Category

