
import { ScrollView, Dimensions, Image, StyleSheet, SafeAreaView, Text, Pressable, View } from "react-native";
import { Images, Styles } from "../../assets/themes";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { Avatar, Button, Card } from "react-native-paper";
import imageUrl from "../"

import * as React from 'react';

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
export default function useMedLog(medication) {

  // Function to change the image source
  const changeImageSrc = () => {
    setImageSrc('new-image-src.jpg');
  }
  // const image = medication.imageUrl;
  // const title = medication.medTitle;
  // const dose = medication.dose;
  const size = 60;
  const title = medication.name;
  const imageUrl = "../../assets/images/bluePill.png"
  const imageUrl2 = "../../assets/images/" + medication.image
  console.log("medication.image:")
  console.log(medication.image)
  console.log("imageUrl and imageUrl2 are the same:")
  console.log(imageUrl == imageUrl2)
  const image = require(imageUrl);
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
          <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
          </Card.Actions>
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

