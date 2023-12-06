import {
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
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

  const goButton = (
    <Pressable style={styles.goButton} onPress={() => {}}>
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

  //const [modalVisible, setModalVisible] = useState(false);

  return (
    // <View style={{ marginBottom: 10 }}>
    //     <MedicationCheckIn
    //       medicationIcon={image}
    //       medicationName={title}
    //       medicationDescription="TBD"
    //       daysDone="1"
    //       pillFrequency={dose}
    //       time={"TBD"}
    //       date={"DATE TBD"}
    //       isVisible={modalVisible}
    //     />
    // <Card
    //   style={{
    //     backgroundColor: "white",
    //     marginBottom: 20,
    //     marginTop: 10,
    //   }}
    // >
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
