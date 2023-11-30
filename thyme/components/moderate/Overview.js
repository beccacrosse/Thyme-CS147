import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Styles } from "../../assets/themes";
import { Avatar, Button, Card } from "react-native-paper";
import ChipList from "./ChipList";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const Overview = (props) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>Patient Information</Text>
        <Card style={{ backgroundColor: Styles.inputFieldColor }}>
          <Card.Content>
            <Text variant="bodyMedium">
              <Text style={{ fontWeight: "bold" }}> Patient Name: </Text> Anna
              Gao
            </Text>
            <Text variant="bodyMedium">
              <Text style={{ fontWeight: "bold" }}> Date of Birth: </Text>
              09/01/2002
            </Text>
            <Text variant="bodyMedium">
              <Text style={{ fontWeight: "bold" }}> Insurance Provider: </Text>
              Kaiser
            </Text>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>Medications</Text>
        <Card style={{ backgroundColor: Styles.inputFieldColor }}>
          <Card.Title
            title="Adderall"
            subtitle="Schedule: Daily as evening"
            left={LeftContent}
          />
          <Card.Title
            title="Aspirin"
            subtitle="Schedule: As needed"
            left={LeftContent}
          />
          <Card.Title
            title="Ativan"
            subtitle="Schedule: Daily - Morning"
            left={LeftContent}
          />
          <Card.Title
            title="Vitamin D3"
            subtitle="Schedule: Daily - Morning"
            left={LeftContent}
          />
        </Card>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>Symptoms</Text>
        <Card style={{ backgroundColor: Styles.inputFieldColor }}>
          <Card.Content>
            <ChipList
              chipValues={[
                "Headache",
                "Fatigue",
                "Anxiety",
                "Loss of Appetite",
              ]}
            />
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  subheaderText: {
    color: Styles.buttonOutlineColor,
    fontSize: "18px",
    marginBottom: 10,
  },
  tabs: {
    backgroundColor: Styles.buttonOutlineColor,
  },
});

export default Overview;
