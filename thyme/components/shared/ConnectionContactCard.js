import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import {
  Avatar,
  Card,
  IconButton,
  Button,
  MD3Colors,
} from "react-native-paper";
import Profile from "../shared/Profile";

import ReportModal from "../moderate/ReportModal";

// Back Button
const ConnectionContactCard = ({
  type,
  title,
  subtitle,
  profileImage,
  profileSize,
  icon,
}) => {
  //const LeftContent = props => <Profile {...props} profileImage={profileImage} profileSize={profileSize} />;
  const [modalVisible, setModalVisible] = useState(false);


  const setVisibility = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ marginBottom: 10 }}>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Button>
          </View>
        </View>
      </Modal> */}

      <ReportModal change={setVisibility} />


      <Card>
        <View
          style={{
            width: 160,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Profile profileImage={profileImage} profileSize={profileSize} />
          </Card.Content>
          <Card.Title title={title} subtitle={subtitle} />

          <Card.Actions>
            <IconButton
              theme={{ colors: { primary: "#263E20" } }}
              size={34}
              iconColor="#263E20"
              mode="outlined"
              icon={icon}
              onPress={() => setModalVisible(true)}
            ></IconButton>
          </Card.Actions>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 10,
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
});

export default ConnectionContactCard;
