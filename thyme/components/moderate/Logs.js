import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Card } from "react-native-paper";
import { Styles } from "../../assets/themes";

const Logs = (props) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <ScrollView  style = {{backgroundColor : Styles.contentBackground}}>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>November 30, 2023</Text>
        <Card style={{ backgroundColor: Styles.contentBackground }}>
          <Card.Title
            title="Ativan"
            subtitle="Taken at 8:00am"
            left={LeftContent}
          />
        </Card>
        <Card
          style={{ backgroundColor: Styles.contentBackground, marginTop: 10 }}
        >
          <Card.Title
            title="Vitamin D3"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          />
        </Card>
        <Card
          style={{
            backgroundColor: Styles.contentBackground,
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          <Card.Title
            title="Aspirin"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          />
        </Card>
        <Text style={styles.subheaderText}>November 29, 2023</Text>
        <Card style={{ backgroundColor: Styles.contentBackground }}>
          <Card.Title
            title="Ativan"
            subtitle="Taken at 8:00am"
            left={LeftContent}
          />
        </Card>
        <Card
          style={{ backgroundColor: Styles.contentBackground, marginTop: 10 }}
        >
          <Card.Title
            title="Vitamin D3"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          />
        </Card>
        <Card
          style={{ backgroundColor: Styles.contentBackground, marginTop: 10 }}
        >
          <Card.Title
            title="Aspirin"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          />
        </Card>
        <Card
          style={{
            backgroundColor: Styles.contentBackground,
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          <Card.Title
            title="Adderall"
            subtitle="Taken at 8:00pm"
            left={LeftContent}
          />
        </Card>
        <Text style={styles.subheaderText}>November 28, 2023</Text>
        <Card
          style={{ backgroundColor: Styles.contentBackground, marginTop: 10 }}
        >
          <Card.Title
            title="Vitamin D3"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          />
        </Card>
        <Card
          style={{ backgroundColor: Styles.contentBackground, marginTop: 10 }}
        >
          <Card.Title
            title="Aspirin"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          />
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

export default Logs;
