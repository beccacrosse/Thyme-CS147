import React from 'react'
import { FlatList, Dimensions, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Styles} from '../../assets/themes';
import { LinearGradient } from 'expo-linear-gradient';
import useMedLog from '../../components/logPage/useMedLog';
import useMedInfo from '../../components/logPage/useMedInfo';
import useLogSection from '../../components/logPage/useLogSection';

import { useNavigation } from "@react-navigation/native";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export default function Log() {
  date = "Thu, 2 November";
  medications = [ { time:"08:00", medications : [{name: "Antibiotics", dose: "twice per day"}] }, 
  {time:"10:00", medications: [{name: "Birth control", dose: "one per day"}, {name: "Vitamins", dose: "once per"}]},
  {time:"20:00", medications: [{name: "Antibiotics", dose: "twice per day"}, {name: "Drink Booster", dose: "once per day"}]} ]
  return (
    
    <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
        start={{x:0.6, y:0.4}}   
    >
      <ScrollView>

    <View style={{width: windowWidth* .95}}>
      <View>
        <Text>{date}</Text>
        <Image></Image>
      </View>

      <Text style={{fontSize: 38, marginBottom:20}}>Today's Plan</Text>
      <FlatList
          data={medications}
          renderItem={({item}) => useLogSection(item)}
          keyExtractor={item => item}
        />
    </View>

      {/* <logSection /> */}
      </ScrollView>
      <StatusBar style="auto" />
      </LinearGradient>   
  )
}