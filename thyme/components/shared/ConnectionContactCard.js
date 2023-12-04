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
import ReminderModal from "../moderate/ReminderModal";
import greenTick from "../../assets/themes"
// Back Button
const ConnectionContactCard = ({
  title,
  subtitle,
  profileImage,
  profileSize,
  icon,
}) => {
  //const LeftContent = props => <Profile {...props} profileImage={profileImage} profileSize={profileSize} />;
  const [modalVisible, setModalVisible] = useState(false);

  function handleVisibility() {
    setModalVisible(!modalVisible);
  }

  if (subtitle == "Professional") {
    return (
      <View style={{ marginBottom: 10 }}>
        <ReportModal
          isVisible={modalVisible}
          visibilityFunction={handleVisibility}
        />

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
                onPress={() => handleVisibility(!modalVisible)}
              ></IconButton>
            </Card.Actions>
          </View>
        </Card>
      </View>
    );
  } else {
    const content =
      "Your " +
      subtitle.toLowerCase() +
      " " +
      title +
      " has not yet taken medication for today, do you want to send her a reminder";
    return (
      <View style={{ marginBottom: 10 }}>
        <ReminderModal
          visible={modalVisible}
          content={content}
          visibilityFunction={handleVisibility}
        />
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
                mode="default"
                icon={greenTick}
                onPress={() => handleVisibility(!modalVisible)}
              ></IconButton>
              <IconButton
                theme={{ colors: { primary: "#263E20" } }}
                size={34}
                iconColor="#263E20"
                mode="outlined"
                icon={icon}
                onPress={() => handleVisibility(!modalVisible)}
              ></IconButton>

              
            </Card.Actions>
          </View>
        </Card>
      </View>
    );
  }
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
