
import { ScrollView, Dimensions, Image, StyleSheet, SafeAreaView, Text, Pressable, View } from "react-native";
import { Images, Styles } from "../../assets/themes";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { Avatar, Button, Card } from "react-native-paper";

import * as React from 'react';

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
export default function useMedLog(medication) {
  // const image = medication.imageUrl;
  // const title = medication.medTitle;
  // const dose = medication.dose;
  const size = 60;
  const title = medication.name;
  const image = Images.asprin;
  const dose = medication.dose;
  const goButton = 
  <Pressable style={styles.goButton}>
    <Feather name="arrow-right" size={45} color={"black"} />
  </Pressable>
  
  return(
    <Card
          style={{
            backgroundColor: "white",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          {/* <Card.Title
            title="Aspirin"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          /> */}
           <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={image} />
          </Card.Content>
          <Card.Title  title={title}
            subtitle={dose}/>
        </View>
          
        </Card>
  
  
  )
}

const styles = {
  logContainer :{
    backgroundColor: Styles.completedColor,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "10%",
    width: windowWidth * .9,
    height: windowHeight * .085,

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

