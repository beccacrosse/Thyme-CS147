import React from 'react'
import { FlatList, Dimensions, StyleSheet,SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Styles, Images, UserMedications } from '../../assets/themes';
import { LinearGradient } from 'expo-linear-gradient';
import useMedLog from '../../components/logPage/useMedLog';
import useMedInfo from '../../components/logPage/useMedInfo';
import useLogSection from '../../components/logPage/useLogSection';
import BackButton from '../../components/shared/BackButton';
import Profile from "../../components/shared/Profile";

import { useNavigation } from "@react-navigation/native";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export default function Log() {
  date = "Thu, 2 November";

  return (

    <LinearGradient
      // Background Linear Gradient
      style={Styles.container}
      colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
      start={{ x: 0.6, y: 0.4 }}
    >
      <ScrollView>
      <SafeAreaView>
        <View style={{ width: windowWidth * .93 }}>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
              <View style={{ flexDirection: "column", alignItems:"center" }}>
                {/* <BackButton style={{ alignSelf: "flex-start", width: 90}} /> */}
                <Text style={{ fontSize: 25, marginTop: 60 }}>{date}</Text>
              </View>
              <View style={Styles.profile}>
                <Profile profileImage={Images.anna} profileSize={90} />
              </View>
            </View>
            <Image></Image>
          </View>

          <Text style={{ fontSize: 38, marginBottom: 20 }}>Today's Plan</Text>
          <FlatList
          data={UserMedications.medications}
          renderItem={({item}) => useLogSection(item)}
          keyExtractor={item => item}
        />
        </View>
        </SafeAreaView>

        {/* <logSection /> */}
      </ScrollView>
      <StatusBar style="auto" />
    </LinearGradient>
  )
}