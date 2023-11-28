import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../assets/themes";
import forestImage from "../assets/icons/forest.png";

export default function App() {
  const [user, setUser] = useState("Anna");
  return (
    
       <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
        start={{x:0.6, y:0.4}}
        
      >

    <Text variant="displayLarge" style={styles.welcomeText}>
      Hello, {user}
    </Text>
         <Image
          style = {{ width: 500,
          height: 500,resizeMode: 'stretch'}}
          source={forestImage}
          />

     
      </LinearGradient>   

  );
}

const styles = StyleSheet.create({
  welcomeText :{
    fontSize: 42,
    color: '#263E20',
    marginBottom: 150,
  },

})

//fill: linear-gradient(180deg, #C2D8A4 0.77%, rgba(194, 216, 164, 0.00) 100%);
