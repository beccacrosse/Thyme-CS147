import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../assets/themes";

import { Images } from "../../assets/themes";
import Profile from "../../components/shared/Profile";
import {Searchbar}  from "react-native-paper";




export default function Connections() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <LinearGradient
      // Background Linear Gradient
      style={Styles.container}
      colors={["#C2D8A4", "rgba(194, 216, 164, 0.00)"]}
      start={{ x: 0.6, y: 0.4 }}
    >
      <View style = {{display: "flex", flexDirection: "column" }}>

      <View style = {{width : "100"}}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      />
      </View>

       <View>
      <Text variant="displayLarge" style={{ 
    fontFamily: "Alegreya Sans",
    fontSize: 60,
    color: '#263E20',
    fontWeight: "bold",}}>
        Connections
      </Text>
      </View> 

      <View style = {Styles.connectionPageProfile}>
      <Profile
        profileImage = {Images.anna}
        profileSize = {200}
        
      />
       <Text variant="displayLarge" style={{ fontFamily: "Josefin Sans",
    fontSize: 30,
    color: '#263E20',
    fontWeight: "bold",}}>
        Anna Gao
      </Text>
     </View>

      </View>
      
    
    </LinearGradient>
  );
}
