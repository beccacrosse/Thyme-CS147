import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../assets/themes";
import Profile from "../../components/shared/Profile";
import { Images } from "../../assets/themes";
import SettingsMenu from "../../components/SettingsMenu";

export default function Settings() {
  return (
    <LinearGradient
      // Background Linear Gradient
      style={Styles.container}
      colors={["#C2D8A4", "rgba(194, 216, 164, 0.00)"]}
      start={{ x: 0.6, y: 0.4 }}
    >
      <View style={{ alignItems: "center", flexDirection: "column", top: -120 }}>
        <View style={{ }}>
          <Text
            variant="displayLarge"
            style={{
              fontFamily: "Alegreya Sans",
              fontSize: 60,
              color: "#263E20",
              fontWeight: "bold",
            }}
          >
            Settings
          </Text>
        </View><View style={{ top:96}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: 100,
            paddingLeft: 20,
            paddingBottom: 30
          }}
        >
          <Profile profileImage={Images.anna} profileSize={100} />
          <View>
            <Text
              variant="displayLarge"
              style={{
                fontFamily: "Alegreya Sans",
                fontSize: 30,
                color: "#263E20",
                fontWeight: "bold",
                left: 30,
              }}
            >
              Anna Gao
            </Text>
            <Text
              style={{
                fontFamily: "Alegreya Sans",
                fontSize: 18,
                color: "#263E20",
                fontWeight: "bold",
                left: 30,
              }}
            >
              Member
            </Text>
          </View>
        </View>
        <SettingsMenu /></View>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
