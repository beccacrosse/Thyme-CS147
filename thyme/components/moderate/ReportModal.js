import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReportPage from "./ReportPage";
import BackButton from "../shared/BackButton";
import MainButton from "../shared/MainButton";
import Profile from "../shared/Profile";
import { Images } from "../../assets/themes";
import ReportTabs from "./ReportTabs";
import { Styles } from "../../assets/themes";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const ReportModal = (props) => {
  // const [modalVisible, setModalVisible] = useState(props.isVisible);

  //let visibility = props.isVisible;

  // useEffect(() => {
  //   if (visibility != null) {
  //     setModalVisible(visibility);
  //   }
  // }, [visibility]);

  //console.log(visibility);

  // handleBackButtonClick = () => {
  //   props.visibilityFunction(!modalVisible);
  //   console.log(modalVisible);
  // };

  return (
    <Modal
        animationType="slide"
        transparent={false}
        visible={props.isVisible}
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
    {/* <ScrollView> */}
    <SafeAreaView style={{ display: "flex", flexDirection: "column", top: 40 }}>
    
        
          <View>
            <BackButton
              style={{ alignSelf: "flex-start" }}
              buttonAction={() => props.visibilityFunction()}
            />
            <View style={styles.profile}>
              <Profile profileImage={Images.anna} profileSize={140} />
            </View>
          </View>
          <ReportTabs />
          <View style={styles.buttonContainer}>
            <View style={styles.button2}>
              <MainButton buttonText="Save PDF" buttonAction={() => {}} />
            </View>
            <View style={styles.button2}>
              <MainButton buttonText="Share" buttonAction={() => {}} />
            </View>
          </View>
   
    </SafeAreaView>
    {/* </ScrollView> */}
    </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button2: {
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

export default ReportModal;
