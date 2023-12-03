import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Styles} from '../../assets/themes';
import { LinearGradient } from 'expo-linear-gradient';
import useMedLog from '../../components/logPage/useMedLog';
import useMedInfo from '../../components/logPage/useMedInfo';
import { useNavigation } from "@react-navigation/native";

export default function Log() {
  pill = useMedLog();
  info = useMedInfo();
  return (
    
    <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
        start={{x:0.6, y:0.4}}   
    >
      <View>
      </View>
      <Text>Log!!</Text>

      {pill}
      <StatusBar style="auto" />
      </LinearGradient>   
  )
}