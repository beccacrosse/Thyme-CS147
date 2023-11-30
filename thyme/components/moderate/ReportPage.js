import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../assets/themes";
import ReportTabs from "./ReportTabs";
import BackButton from "../shared/BackButton";
import MainButton from "../shared/MainButton";
import Profile from "../shared/Profile";
import { Images } from "../../assets/themes";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export default function ReportPage() {
  return (
    <SafeAreaView style={{ height: windowHeight }}>
      <View>
        <BackButton style={{ alignSelf: "flex-start" }} />
        <View style={styles.profile}>
          <Profile profileImage={Images.anna} profileSize={140} />
        </View>
      </View>
      <ReportTabs />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <MainButton buttonText="Save PDF" buttonAction={() => {}} />
        </View>
        <View style={styles.button}>
          <MainButton buttonText="Share" buttonAction={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    width: windowWidth,
    height: windowHeight * 0.1,
  },
  profile: {
    alignItems: "center",
    marginBottom: 10,
  },
});
