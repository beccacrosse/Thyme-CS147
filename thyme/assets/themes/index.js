import Icons from "../icons/icons";
import Images from "../images/images";
import { StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeMessage: {
    fontFamily: "Josefin Sans",
    fontSize: 80,
    color: '#263E20',
    marginBottom: 150,
    fontWeight: "bold",
  },
});

export { Icons, Images, Styles };
