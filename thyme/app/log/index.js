import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Styles} from '../../assets/themes';
import { LinearGradient } from 'expo-linear-gradient';



export default function Log() {
  return (
    <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
        start={{x:0.6, y:0.4}}
        
      >

      <Text>Log!!</Text>
      <StatusBar style="auto" />
      </LinearGradient>   
  )
}




// export const log = () => {
//   return (
//     <div>log</div>
//   )
// }
