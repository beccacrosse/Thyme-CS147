import Icons from "../icons/icons";
import Images from "../images/images";
import { StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
  connectionPageProfile: {
    top: -400,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeMessage: {
    fontFamily: "Alegreya Sans",
    fontSize: 80,
    color: "#263E20",
    marginBottom: 90,
    fontWeight: "bold",
  },
  //heading text (i.e. Today's Plan, titles of each screen)
  //subheading text (name of medication on log page)
  //information text (detailed text)
  bodyText: {
    fontFamily: "Alegreya Sans",
    color: "#263E20",
  },
  navBarColor: "#3C6433",
  completedColor: "#64C24D", // Apple
  backgroundColor: "#C2D8A4",
  buttonOutlineColor: "#3C6433",
  navBarSelectedColor: "#C2D8A4",
  toggleUnselectedColor: "#F7FFEB",
  toggleSelectedColor: "#3C6433",
  //inputFieldColor: "#F0F6E6", //Panache
  inputFieldColor: "#263E20", //Panache
  contentBackground: "#F0F6E6",
});

const UserMedications = {
  medications: [
    { time: "08:00", 
    medications: [{ name: "Antibiotics", dose: "twice per day", image: Images.asprin },{ name: "Birth control", dose: "one per day", image: Images.avitan }, ] },
    { time: "10:00", 
    medications: [{ name: "Adderall", dose: "once per day", image: Images.adderall }, { name: "Vitamins", dose: "once per", image: Images.d3 }] },
    { time: "20:00", 
    medications: [{ name: "Antibiotics", dose: "twice per day", image: Images.asprin  }, { name: "Melatonin", dose: "once per day", image: Images.avitan  }] }
    ]
};

export { Icons, Images, Styles, UserMedications };
