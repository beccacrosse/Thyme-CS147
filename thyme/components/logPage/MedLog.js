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
import { Images, Styles, Icons } from "../../assets/themes/index.js";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Avatar, Button, Card, IconButton } from "react-native-paper";
import MedicationCheckIn from "../simple/MedicationCheckIn.js";
import { getData, setData } from "../../asyncStorage.js";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const MedLog = ({medication}) => {
  const avatarSize = 50;
  const date = "Thu, 2 November";
  const time = medication.time;
  const title = medication.name;
  const image = medication.image;
  const dose = medication.dose;
  const medicationDescription = "Individualized information about each medication coming soon :)";
  const daysDone = 1;
  const pillNumber = 1;
  const buttonDisabled = (title!="Adderall")? false: true;
  const defaultColor = (title!="Adderall")? "white": Styles.grayedOut
  const secondaryColor = (title!="Adderall")? "black": Styles.grayedOutButton
  const secondaryTextColor = (title!="Adderall")? "black": Styles.grayedOutText
  
  //const RightContent = (props) => <Card.Actions>{goButton}</Card.Actions>;

  const goButton = (
    <Pressable disabled={buttonDisabled} style={styles.goButton} onPress={() => setModalVisible(!modalVisible)}>
      <Feather name="arrow-right" size={45} color={secondaryColor} />
    </Pressable>
  );
  
  const LeftContent = (props) => (
    <Image
      style={[styles.icon, { width: avatarSize, height: avatarSize }]}
      source={medication.image}
    />
  );


  const [modalVisible, setModalVisible] = React.useState(false);
  function handleVisibility() {
    setModalVisible(!modalVisible);
  }

  const [backgroundColor, setBackgroundColor] = useState(defaultColor)
  function handleBackgroundColor() {
    console.log('handleBackgroundColor has been called!')
    setBackgroundColor(Styles.completedColor);
    console.log('')
  }

  return (
    <View style={{ marginBottom: 10 }}>
      <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
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
          time={time}
          date={date}
          visibilityFunction={handleVisibility}
          completedColorFunction={handleBackgroundColor}
          isVisible={modalVisible}
        />
        </LinearGradient>
    </Modal>
        
    <Card
      style={{
        backgroundColor: backgroundColor,
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <View
            style={{
              width: windowWidth * .75,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          > 
      
      <Card.Title titleStyle={{color: secondaryTextColor}} subtitleStyle={{color: secondaryTextColor}}
        title={title}
        subtitle={dose}
        left={LeftContent}
        //right={RightContent}
      />
      <Card.Actions>
              {goButton}
        </Card.Actions>
        </View>
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

export default MedLog;