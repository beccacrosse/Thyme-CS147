
import { Dimensions, Image, Button, StyleSheet, SafeAreaView, Text, Pressable, View } from "react-native";
import { Icons, Styles } from "../../assets/themes";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Feather } from '@expo/vector-icons';

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
export default function useMedLog() {
  // const image = medication.imageUrl;
  // const title = medication.medTitle;
  // const dose = medication.dose;
  const image = Icons.activan;
  const title = 'activan';
  const dose = '1 pill once per day';
  const goButton = 
  <Pressable style={styles.goButton}>
    <Feather name="arrow-right" size={45} color={"black"} />
  </Pressable>
  
  return(
      <View style={styles.logContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.pillImage}/> 
        </View>
        <Link style={styles.pillInfo} href={{pathname: '#', params: {title}}} asChild>
        <Pressable>
        <View style={{}}>
          <Text style={styles.logTextPrimary} numberOfLines={1}>{title}</Text>
          <Text style={styles.logTextSecondary} numberOfLines={1}>{dose}</Text>
        </View>
        </Pressable>
        </Link>
        <Link style={styles.buttonContainer} href={{pathname: './cardInteractionPages/medCheckin', params: {}}} asChild>
            {goButton}
        </Link>
      </View>
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

