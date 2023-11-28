import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import {Styles} from '../../assets/themes'

export default function Connections() {
  return (
    <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
        start={{x:0.6, y:0.4}}
        
      >

      <Text>Connections!!</Text>
      <StatusBar style="auto" />
      </LinearGradient>   
  )
}

