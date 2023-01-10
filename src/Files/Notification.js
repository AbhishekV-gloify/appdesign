import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
} from 'react-native';

const Notification = () => {

    const userData = [
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 55 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        },
        {
            name: "Liza Dutton",
            time: "3 mis ago",
            scoreContent: "scored 50 mins Bussiness Strategy",
            Moudule: "Module Part - 10"
        },
        {
            name: "Dwayne johnson",
            time: "2 mis ago",
            scoreContent: "scored 45 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        },
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 25 mins Economics",
            Moudule: "Module Part - 11"
        },
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 55 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        },
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 55 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        },
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 55 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        },
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 55 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        },
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 55 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        },
        {
            name: "james carter",
            time: "2 mis ago",
            scoreContent: "scored 55 mins Marketing Strategy",
            Moudule: "Module Part - 11"
        }
    ]


    return (
        <View style={styles.container}>
            <View style={styles.blueBackground}>
                <View style={styles.topRow}>
                    <Icon name="menu" size={17} color="white" style={styles.background} />
                    <View style={styles.noti_text}>
                        <Text style={styles.noti_text2}>Notification</Text>
                    </View>
                </View>
            </View>

            <View style={styles.whiteCard}>
                <FlatList
                    data={userData}
                    renderItem={(Element) => {
                        return (
                            <View style={styles.horizontalFlex}>
                                <Image
                                    source={require("../paul.png")}
                                    style={styles.imagelogo} />
                                <View style={styles.verticalTexts}>
                                    <View style={[styles.horizontalFlex, styles.separateBetween]}>
                                        <Text style={styles.textName}>{Element.item.name}</Text>
                                        <Text style={styles.time_text}>{Element.item.time}</Text>
                                    </View>
                                    <Text style={styles.scoreContent_text}>{Element.item.scoreContent}</Text>
                                    <Text style={styles.textModule}>{Element.item.Moudule}</Text>
                                </View>
                            </View>
                        )
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topRow: {
        flexDirection: "row",
        marginTop: 20
    },

    noti_text: {
        flex: 1,
        justifyContent: "center",
        marginEnd: 40
    },

    noti_text2: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        alignSelf: "center"
    },

    horizontalFlex: {
        flexDirection: "row"
    },

    verticalTexts: {
        flex: 1,
        height: 80
    },

    separateBetween: {
        justifyContent: "space-between",
        marginTop: 10
    },

    time_text: {
        fontSize: 12,
        marginEnd: 20
    },

    scoreContent_text: {
        fontSize: 12,
        marginTop: 7
    },

    background: {
        backgroundColor: "#305BD7",
        borderRadius: 10,
        shadowRadius: 6,
        padding: 10,
        elevation: 8,
        shadowOpacity: 0.26,
        marginLeft: 20,
    },

    whiteCard: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: "90%",
        alignSelf: "center",
        elevation: 5,
        marginTop: -40,
        marginBottom: 40,
    },

    blueBackground: {
        backgroundColor: "#1d4ab9",
        height: 120
    },

    imagelogo: {
        flex: 0.3,
        resizeMode: "contain",
        marginTop: 10,
        height: 40,
        borderRadius: 15,
    },

    textName: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#616161",
    },

    textModule: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#616161",
    }

})

export default Notification