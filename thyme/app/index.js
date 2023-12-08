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
  const [init, setInit] = useState(false);

  // Update Storage with Default Keys
  useEffect(() => {
    if (init == false) {
      setInit(true);
      (async () => {
        await clearData();
        await setData("December 8, 2023", JSON.stringify([]));
        await getData("December 8, 2023");
      })();
    }
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
            progress={0.5}
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
