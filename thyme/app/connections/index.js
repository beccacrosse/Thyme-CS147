import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../assets/themes";

import { Images } from "../../assets/themes";
import Profile from "../../components/shared/Profile";
import { Searchbar,Divider } from "react-native-paper";
import {
  useFonts,
  AlegreyaSans_400Regular,
} from "@expo-google-fonts/alegreya-sans";
import ConnectionContactCard  from "../../components/shared/ConnectionContactCard"

export default function Connections() {
  let [fontsLoaded] = useFonts({
    AlegreyaSans_400Regular,
  });

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  if (!fontsLoaded) {
    return <Text>font not loaded</Text>;
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      style={Styles.container}
      colors={["#C2D8A4", "rgba(194, 216, 164, 0.00)"]}
      start={{ x: 0.6, y: 0.4 }}
    >
      <View style={{ display: "flex", flexDirection: "column", top: -10 }}>

        <View style = {{top : -100}}>
          <Text
            variant="displayLarge"
            style={{
              fontFamily: "Alegreya Sans",
              fontSize: 60,
              color: "#263E20",
              fontWeight: "bold",
            }}
          >
            Connections
          </Text>
        </View>

        <View style={{ width: "full" , top: -90, }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View style={{top : -70, width: "full"}}>
        <Divider bold = "true" />
        </View>
        
       

        <View style={{top: -60, display : 'flex', flexDirection : "row", alignItems: "center", justifyContent: "space-evenly"}}>
          
          <Profile profileImage={Images.anna} profileSize={140} />
          <Text
            variant="displayLarge"
            style={{
              fontFamily: "Alegreya Sans",
              fontSize: 30,
              color: "#263E20",
              fontWeight: "bold",
            }}
          >
            Anna Gao
          </Text>
        </View>

        <View style={{top : 0, width: "full"}}>
        <Divider bold = "true" />
        </View>

        <ConnectionContactCard/>

      </View>
    </LinearGradient>
  );
}
