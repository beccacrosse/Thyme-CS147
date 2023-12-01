import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReportPage from "./ReportPage";
import BackButton from "../shared/BackButton";
import MainButton from "../shared/MainButton";
import Profile from "../shared/Profile";
import { Images } from "../../assets/themes";
import ReportTabs from "./ReportTabs";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");


const ReportModal = ({change}) => {
  //const [modalVisible, setModalVisible] = useState(false);

  let visibility = props.isVisible;

  // useEffect(() => {
  //   if (visibility != null) {
  //     setModalVisible(visibility);
  //   }
  // }, [visibility]);

  console.log(visibility);



  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={{ height: windowHeight }}>
          <View>
            <BackButton
              style={{ alignSelf: "flex-start" }}
              buttonAction={() => change()}
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
      </Modal>
    </View>
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
