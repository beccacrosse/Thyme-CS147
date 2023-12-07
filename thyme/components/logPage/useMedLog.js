import {
  ScrollView,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Images, Styles, Icons } from "../../assets/themes";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Avatar, Button, Card, IconButton } from "react-native-paper";
import MedicationCheckIn from "../simple/MedicationCheckIn";
import { getData, setData } from "../../asyncStorage.js";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export default function useMedLog(medication) {
  const avatarSize = 50;
  const title = medication.name;
  const image = medication.image;
  const dose = medication.dose;
  const medicationDescription = "TBD";
  const daysDone = 1;
  const pillNumber = 1;
  let isVisible = true;

  const goButton = (
    <Pressable style={styles.goButton} onPress={() => handleVisibility(!modalVisible)}>
      <Feather name="arrow-right" size={45} color={"black"} />
    </Pressable>
  );

  const LeftContent = (props) => (
    <Image
      style={[styles.icon, { width: avatarSize, height: avatarSize }]}
      source={medication.image}
    />
  );

  const RightContent = (props) => <Card.Actions>{goButton}</Card.Actions>;

  // const [modalVisible, setModalVisible] = useState(false);
  // function handleVisibility() {
  //   setModalVisible(!modalVisible);
  // }

  return (
    <View style={{ marginBottom: 10 }}>
      <Modal
      animationType="slide"
      transparent={false}
      visible={false}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
    >
      <LinearGradient
        // Background Linear Gradient
        style={Styles.container}
        colors={["#C2D8A4", "rgba(194, 216, 164, 0.00)"]}
        start={{ x: 0.6, y: 0.4 }}
      >
      <MedicationCheckIn
          medicationIcon={image}
          medicationName={title}
          medicationDescription={medicationDescription}
          daysDone={daysDone}
          pillNumber={pillNumber}
          pillDose={dose}
          time={"TBD"}
          date={"DATE TBD"}
          // visibilityFunction={handleVisibility}
          isVisible={false}
        />
        </LinearGradient>
    </Modal>
        
    <Card
      style={{
        backgroundColor: "white",
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <Card.Title
        title={title}
        subtitle={dose}
        left={LeftContent}
        right={RightContent}
      />
    </Card>
    </View>
  );
}

const styles = {
  logContainer: {
    backgroundColor: Styles.completedColor,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "10%",
    width: windowWidth * 0.9,
    height: windowHeight * 0.085,
  },
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  pillImage: {
    aspectRatio: 1,
  },
  pillInfo: {
    flex: 4.25,
    margin: 5,
    borderWidth: 2,
    borderColor: "red",
  },
  logTextPrimary: {
    color: "black",
    fontSize: 35,
  },
  logTextSecondary: {
    color: "black",
    fontSize: 15,
  },
  buttonContainer: {
    flex: 0.75,
    borderWidth: 2,
    marginRight: 0,
    borderColor: "red",
  },
  goButton: {
    // borderWidth: 1,
    // borderColor: "blue",
  },
};
