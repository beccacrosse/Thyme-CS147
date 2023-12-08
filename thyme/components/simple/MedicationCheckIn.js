import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import BackButton from "../shared/BackButton";
import Profile from "../shared/Profile";
import { Icons, Images } from "../../assets/themes";
import { ProgressBar } from "react-native-paper";
import { Styles } from "../../assets/themes";
import { Card } from "react-native-paper";
import MainButton from "../shared/MainButton";
import { Overlay } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getData, setData } from "../../asyncStorage.js";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const MedicationCheckIn = (props) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [isButtonDefault, setButtonDefault] = useState(true);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isTextEditable, setTextEditable] = useState(true);
  const [buttonText, setButtonText] = useState("Submit Log");
  //onst [taken, setTaken] = useState(false);

  const [med, setMed] = useState([]);

  const medicationIcon = props.medicationIcon;
  const medicationName = props.medicationName;
  const medicationDescription = props.medicationDescription
    ? props.medicationDescription
    : "[Description of Medication]";
  const daysDone = props.daysDone;
  const daysAway = props.daysAway;
  const pillNumber = props.pillNumber;
  const pillFrequency = props.pillFrequency;
  const pillDose = props.pillDose;
  const time = props.time;
  const date = props.date;
  const visibilityFunction = props.visibilityFunction;
  const completedColorFunction = props.completedColorFunction;
  let taken = false;

  // Toggles the Log Information Overlay
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const completeCheckin = () => {
    setVisible(!visible);
    completedColorFunction();
  };

  // Toggles the Information Overlay
  const toggleInfoOverlay = () => {
    setInfoVisible(!infoVisible);
  };

  const buttonAction = () => {
    toggleOverlay();
    setButtonDefault(!isButtonDefault);
    setButtonText("Log Complete");
    setButtonDisabled(!isButtonDisabled);
    setTextEditable(!isTextEditable);
    completedColorFunction();

    const key = "December 8, 2023";
    taken = true;
    const storageValue = [medicationName, time];
    (async () => {
      try {
        let currArr = await getData("December 8, 2023");

        if (currArr != undefined) {
          currArr = JSON.parse(currArr);

          const occurence = currArr.find((arr) =>
            arr.every((item, index) => item === storageValue[index])
          );

          if (!occurence) {
            currArr.push(storageValue);
          }
          await setData(key, JSON.stringify(currArr));
        } else {
          console.log("didn't work");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  };

  const onEdit = () => {
    setButtonDefault(!isButtonDefault);
    setButtonText("Submit Log");
    setButtonDisabled(!isButtonDisabled);
    setTextEditable(!isTextEditable);
  };

  if (isTextEditable == true) {
    symptomsDisplayed = (
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <Text style={styles.subheaderText}>Symptoms</Text>
      </View>
    );
  } else {
    symptomsDisplayed = (
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <Text style={styles.subheaderText}>Symptoms</Text>
        <Pressable onPress={onEdit}>
          <Feather
            name="edit"
            size={24}
            color="black"
            style={styles.editIcon}
          />
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.checkInContainer}>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={{ backgroundColor: Styles.inputFieldColor }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitleText}>Log Successful!</Text>
          <Text style={styles.modalBodyText}>
            You have successfully logged your {medicationName} intake for {date}
            .
          </Text>
          <MainButton buttonText="OK" buttonAction={toggleOverlay} />
        </View>
      </Overlay>
      <Overlay
        isVisible={infoVisible}
        onBackdropPress={toggleInfoOverlay}
        style={{ backgroundColor: Styles.inputFieldColor }}
      >
        <View style={styles.modalView}>
          <Image source={medicationIcon} style={styles.medicationIconSmall} />
          <Text style={styles.modalTitleText}>{medicationName}</Text>
          <Text style={styles.modalBodyText}>{medicationDescription}</Text>
          <MainButton buttonText="OK" buttonAction={toggleInfoOverlay} />
        </View>
      </Overlay>
      <View style={styles.headerContainer}>
        <View>
          <BackButton buttonAction={() => props.visibilityFunction()} />
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Profile profileImage={Images.anna} profileSize={80} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.medicationContainer}>
          <Image source={medicationIcon} style={styles.medicationIcon} />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.titleText}>{medicationName} </Text>
            <Pressable onPress={toggleInfoOverlay}>
              <Ionicons
                name="ios-information-circle-outline"
                size={16}
                color="black"
              />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, marginLeft: 13, marginTop: 10 }}>
            {daysDone} days done
          </Text>
          <View style={styles.nextTreeContainer}>
            <Text style={{ marginLeft: 10 }}>
              {daysAway} days away from receiving a pine tree
            </Text>
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
        <View>
          <Text style={styles.subheaderText}>Program</Text>
          <Card style={styles.programDetails}>
            <Card.Title title={pillDose + " at " + time} />
          </Card>
        </View>
        <View>
          {symptomsDisplayed}
          <TextInput
            style={styles.input}
            placeholder={"Describe your symptoms"}
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            editable={isTextEditable}
          />
        </View>
        <View style={styles.checkInButtonContainer}>
          <View style={styles.checkInButton}>
            <MainButton
              buttonText={buttonText}
              buttonAction={buttonAction}
              isDefault={isButtonDefault}
              isDisabled={isButtonDisabled}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkInButton: {
    marginBottom: 10,
    marginTop: 10,
  },
  checkInButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  checkInContainer: {
    height: windowHeight,
  },
  dateText: {
    fontSize: 25,
    margin: 10,
  },
  editIcon: {
    marginRight: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: windowWidth,
  },
  input: {
    backgroundColor: "white",
    height: windowHeight * 0.15,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
  },
  medicationIcon: {
    height: 150,
    margin: 20,
    width: 150,
    resizeMode: "contain",
  },
  medicationIconSmall: {
    height: 50,
    margin: 5,
    width: 50,
    resizeMode: "contain",
  },
  medicationContainer: {
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
    width: windowWidth * 0.8,
  },
  modalTitleText: {
    fontSize: 22, // Size of Title Font
    fontWeight: "bold",
    margin: 5,
    textAlign: "center",
  },
  modalBodyText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  nextTreeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    justifyContent: "center",
    margin: 6,
  },
  programDetails: {
    marginLeft: 10,
    marginRight: 10,
  },
  progressBar: {
    marginBottom: 5,
    marginTop: 5,
    width: windowWidth * 0.95,
  },
  titleText: {
    fontSize: 28,
  },
  subheaderText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  treeIcon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});

export default MedicationCheckIn;
