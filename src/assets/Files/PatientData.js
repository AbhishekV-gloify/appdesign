import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Button,
    FlatList,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import axios from "axios";
import { useScrollToTop, useNavigation, useRoute, useNavigationState, useFocusEffect , useIsFocused} from '@react-navigation/native';

function Profile({ userId }) {
    const [user, setUser] = React.useState(null);
  
    useFocusEffect(
      React.useCallback(() => {
        const unsubscribe = API.subscribe(userId, user => setUser(user));
  
        return () => unsubscribe();
      }, [userId])
    );
  
    return <ProfileContent user={user} />;
  }

const PatientData = () => {
    const [patientList, setPatientList] = useState([])
    const [pageno, setPageNo] = useState(1)

    const ref = React.useRef(null);
    const navigation = useNavigation();
    const route = useRoute();
    const index = useNavigationState(state => state);
    const isFocused = useIsFocused();

    

    console.log('navigation, ', navigation)
    console.log('route', route)
    console.log('navigation state', index, 'index : ', index.index)


    useScrollToTop(React.useRef({
        scrollToTop: () => ref.current?.scrollToOffset({ offset: 100 }),
    }));

    const getLists = async (pageno) => {
        await axios.get("https://reqres.in/api/users?page=" + pageno)
            .then(res => {
                setPatientList([...patientList, ...res.data.data])
            })
            .catch(console.log);
    }

    useEffect((pageno) => {
        
        getListData(pageno)
        return () => {
            setPatientList()
        }
    }, [])

    const getListData = async (pageno) => {
        await getLists(pageno)
    }


    return (
        <View style={styles.container}>
            <ScrollView ref={ref}>
                <Text style={styles.textStyle}>All Patients</Text>
                <Button
                    title="Back"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
             <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;

                <FlatList
                    data={patientList}
                    ListFooterComponent={() => (
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                setPageNo(pageno + 1);
                                getListData(pageno + 1)
                            }}>

                            <Text style={styles.btnText}>
                                Load more data
                            </Text>
                        </TouchableOpacity>
                    )}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.horizontal_view}>
                                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                                <View style={styles.jc_center}>
                                    <Text style={styles.txt_name}>{item.first_name}</Text>
                                    <Text style={styles.txt_email}>F 35, {item.email}</Text>
                                </View>
                            </View>
                        )
                    }}
                />

            </ScrollView>
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
    },
    btn: {
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#2474700D',
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '400',
        fontSize: 14,
        color: '#247470'
    },

    avatar: {
        height: 54,
        width: 54,
        borderRadius: 21,
        marginHorizontal: 20
    },

    jc_center: {
        justifyContent: 'center'
    },

    txt_name: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
        fontStyle: 'normal'
    },

    txt_email: {
        color: '#9A9A9A',
        fontFamily: 'Poppins-Medium',
        fontWeight: '400',
        fontSize: 13
    },

    horizontal_view: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        width: '100%',
        alignSelf: 'center'
    }
})

export default PatientData