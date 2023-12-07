import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../assets/themes";
import { ProgressBar } from "react-native-paper";
import forestImage from "../assets/icons/forest.png";
import { Icons } from "../assets/themes";
import { getAllData, setData, clearData } from "../asyncStorage.js";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export default function App() {
  const [user, setUser] = useState("Anna");

  // Update Storage with Default Keys
  useEffect(() => {
    (async () => {
      await clearData();

      const key1 = "Antibiotics-December 8, 2023-8:00am";
      const value1 = [
        "Antibiotics",
        "December 8, 2023",
        "8:00am",
        "TEMP_ICON",
        false,
      ];
      await setData(key1, JSON.stringify(value1));

      const key2 = "Birth control-December 8, 2023-8:00am";
      const value2 = [
        "Birth control",
        "December 8, 2023",
        "8:00am",
        "TEMP_ICON",
        false,
      ];
      await setData(key2, JSON.stringify(value2));

      const key3 = "Adderall-December 8, 2023-10:00am";
      const value3 = [
        "Adderall",
        "December 8, 2023",
        "10:00am",
        "TEMP_ICON",
        false,
      ];
      await setData(key3, JSON.stringify(value3));

      const key4 = "Vitamins-December 8, 2023-10:00am";
      const value4 = [
        "Vitamins",
        "December 8, 2023",
        "10:00am",
        "TEMP_ICON",
        false,
      ];
      await setData(key4, JSON.stringify(value4));

      const key5 = "Antibiotics-December 8, 2023-20:00pm";
      const value5 = [
        "Antibiotics",
        "December 8, 2023",
        "20:00pm",
        "TEMP_ICON",
        false,
      ];
      await setData(key5, JSON.stringify(value5));

      const key6 = "Melatonin-December 8, 2023-20:00pm";
      const value6 = [
        "Melatonin",
        "December 8, 2023",
        "20:00pm",
        "TEMP_ICON",
        false,
      ];
      await setData(key6, JSON.stringify(value6));
    })();
  }, []);

  return (
    <LinearGradient
      // Background Linear Gradient
      style={Styles.container}
      colors={["#C2D8A4", "rgba(194, 216, 164, 0.00)"]}
      start={{ x: 0.6, y: 0.4 }}
    >
      <Text
        variant="displayLarge"
        style={[Styles.welcomeMessage, { marginTop: 30 }]}
      >
        Hello, Anna
      </Text>
      <Image
        style={{ width: 300, height: 300, resizeMode: "stretch" }}
        source={forestImage}
      />
      <View>
        <View style={styles.nextTreeContainer}>
          <Text style={{ fontSize: 20 }}>Time Until Next Plant</Text>
          <Image source={Icons.pineTree} style={styles.treeIcon} />
        </View>
        <View style={{ alignItems: "center" }}>
          <ProgressBar
            progress={0.8}
            color={Styles.buttonOutlineColor}
            style={styles.progressBar}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

//fill: linear-gradient(180deg, #C2D8A4 0.77%, rgba(194, 216, 164, 0.00) 100%);

const styles = StyleSheet.create({
  progressBar: {
    marginBottom: 5,
    marginTop: 5,
    width: windowWidth * 0.9,
  },
  nextTreeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  treeIcon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
