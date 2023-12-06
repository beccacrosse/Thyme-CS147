import { Dimensions, Image, Button, StyleSheet, SafeAreaView, Text, Pressable, View } from "react-native";
import { Icons, Styles } from "../../assets/themes";

import PopUpMedication from '../shared/PopUpMedication';
import MedicationCheckIn from '../simple/MedicationCheckIn';


const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
export default function useMedLog() {
  // const image = medication.imageUrl;
  // const title = medication.medTitle;
  // const dose = medication.dose;
  const props = {
    title: "Activan", 
    message: "blahblahblah", 
    primaryButtonText: "pbtext", 
    secondaryButtonText: "cancel",
  isVisible: true,
  placeholder: "How are you feeling?",
  isBackButtonVisible: true}
  medicationPopup = PopUpMedication(props)
  return(
    {medicationPopup}
  )
}

const styles = {
  logContainer :{
    backgroundColor: Styles.completedColor,
    borderColor: Styles.buttonOutlineColor,
    borderRadius: 3,
    borderRadius: "10%",
    width: windowWidth * .9,
    height: windowHeight * .085,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red"
  },
  pillImage : {
    aspectRatio:1,
  },
  pillInfo: {
    flex: 4.25,
    margin: 5,
    borderWidth: 2,
    borderColor: "red"
  },
  logTextPrimary : {
    color: "black",
    fontSize: 35,
  },
  logTextSecondary : {
    color: "black",
    fontSize: 15
  },
  buttonContainer: {
    flex: .75,
    borderWidth: 2,
    marginRight: 0,
    borderColor: "red"
  },
  goButton: {
    borderWidth: 1,
    borderColor: "blue"
  }
}

