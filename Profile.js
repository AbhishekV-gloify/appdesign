import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Octicons';

import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';



const Profile = () => {

  return (
    <View style={styles.container}>


      <View style={{ backgroundColor: "#1d4ab9", flex: 0.3, zIndex: -1 }}>
        <View style={{ flex: 1, zIndex: 1 }}>
          <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-between" }}>
            <Icon name="menu" size={17} color="white" style={[styles.background, { marginLeft: 20 }]} />
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Profile</Text>
            <Icon2 name="notifications" size={17} color="white" style={[styles.background, { marginRight: 20 }]} />
          </View>
        </View>
      </View>


      <ScrollView style={{ marginTop: -40, flex: 0.7 }}>
        <View style={[styles.whiteCard, { height: 'auto', paddingVertical: 20, alignItems: "center" }]}>
          <View style={[styles.createShadow, { width: 110, height: 110 }]}>
            <Image source={require('./src/paul.png')} style={styles.imageStyle} />
            <View style={[styles.createShadow, { width: 30, height: 30, position: "absolute", bottom: 5, right: 0 }]}>
              <Image source={require('./src/badge.png')} style={styles.badgeStyle} />
            </View>
          </View>

          {/* <Text style={[styles.lizacarter, { marginTop: 10 }]}>Liza Carter</Text> */}

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, marginHorizontal: 5, backgroundColor: "#1341b6", borderRadius: 5, elevation: 5, shadowColor: "black", shadowRadius: 5, shadowOffset: { width: 0, height: 2 }, }}>
              <Text style={{ color: "white", flexWrap: 'nowrap' }}> 35 Followers </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, marginHorizontal: 5, backgroundColor: "#1ccbc4", borderRadius: 5, elevation: 5, shadowColor: "black", shadowRadius: 5, shadowOffset: { width: 0, height: 2 } }}>
              <Text style={{ color: "white" }}>123 Friends</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View style={[styles.whiteCard2, { marginTop: 20, paddingHorizontal: 5, paddingVertical: 10, marginBottom: 20 }]}>
          <View style={[{ paddingVertical: 5, width: "95%", alignSelf: "center", borderRadius: 10, backgroundColor: '#F0F0F0' }]}>

            <Text style={[{ fontWeight: "bold", color: "black", fontSize: 17, marginTop: 10, marginLeft: 10 }]}>Badge</Text>
            <View style={{ flexDirection: "row" }}>

                <ImageBackground
                  source={require('./src/assets/images/hexagone-fill.png')}
                  resizeMode="contain"
                  style={[{ height:80, flex:1, justifyContent: 'center', alignItems: 'center' }]}
                >
                  <Icon2 name="trophy-sharp" color="#FFC000" size={35} />
                </ImageBackground>

              <ImageBackground
                source={require('./src/assets/images/hexagone-fill.png')}
                resizeMode="contain"
                style={{ flex: 1, height: 80, justifyContent: 'center', alignItems: 'center' }}
              >
                <Image source={require('./src/assets/images/badge.png')} style={{ width: 35, height: 35 }} />

              </ImageBackground>

              <ImageBackground
                source={require('./src/assets/images/hexagone-fill.png')}
                resizeMode="contain"
                style={[{ flex: 1, height: 80, justifyContent: 'center', alignItems: 'center' }]}
              >
                <Image source={require('./src/assets/images/badge.png')} style={{ width: 35, height: 35 }} />
              </ImageBackground>


            </View>


          </View>


          <View style={[{ flex: 0.4, flexDirection: "row", width: '95%', alignSelf: "center", borderRadius: 10, backgroundColor: "#F0F0F0", marginTop: 10, height: 100 }]}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
              <Icon2 name='globe-outline' size={35} color="#FFC000" />
              <Text style={{ color: "#9D9D9D", alignSelf: "center" }}>World Rank</Text>
              <Text style={{ color: "#333333", fontWeight: 'bold' }}>7,373,025</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
              <Icon2 name='globe-outline' size={35} color="#FFC000" />
              <Text style={{ color: "#9D9D9D", alignSelf: "center" }}>World Rank</Text>
              <Text style={{ color: "#333333", fontWeight: 'bold' }}>1,913</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
              <Icon3 name='feed-star' size={35} color="#FFC000" />
              <Text style={{ color: "#9D9D9D", alignSelf: "center" }}>Score</Text>
              <Text style={{ color: "#333333", fontWeight: 'bold' }}>5,400</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: '#305BD7',
    padding: 20,
    borderRadius: 10
  },
  container: {
    flex: 1
  },

  badge: {
    marginLeft: 20,
    marginTop: 10
  },

  whiteCard: {
    height: 230,
    borderRadius: 10,
    backgroundColor: 'white',
    width: "90%",
    alignSelf: "center",
    elevation: 5
  },

  whiteCard2: {
    alignSelf: "center",
    justifyContent: "space-around",
    width: "90%",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    // padding: 13,
    borderRadius: 10,
  },

  lizacarter: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'black'
  },

  shadow: {
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 20,
  },


  shadow2: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },

  createShadow: {
    backgroundColor: "#fff",
    borderRadius: 55,
    elevation: 8,
    alignItems: "center",
    justifyContent: "center"
  },

  grayCard: {
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: "95%",
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },

  background: {
    backgroundColor: "#305BD7",
    borderRadius: 10,
    shadowRadius: 6,
    padding: 10,
    elevation: 8,
    shadowOpacity: 0.26,
  },

  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  badgeStyle: {
    width: 20,
    height: 20,
    borderRadius: 10
  },

  hexagon: {
    width: 100,
    height: 55,
  },
  hexagonInner: {
    width: 70,
    height: 45,
    backgroundColor: "#1341b6",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -10,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 35,
    borderLeftColor: "transparent",
    borderRightWidth: 35,
    borderRightColor: "transparent",
    borderTopWidth: 20,
    borderTopColor: "#1341b6",
  },
  hexagonBefore: {
    position: "absolute",
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 35,
    borderLeftColor: "transparent",
    borderRightWidth: 35,
    borderRightColor: "transparent",
    borderBottomWidth: 25,
    borderBottomColor: "#1341b6",
  },
});

export default Profile