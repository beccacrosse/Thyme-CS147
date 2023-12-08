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
  grayedOut: "#EDEDED",
  grayedOutText: "#B5B5B5",
  grayedOutButton: "#D0D0D0",
});

const UserMedications = {
  medications: [
    {
      time: "08:00",
      medications: [
        {
          name: "Antibiotics",
          dose: "Take 1 pill twice per day",
          image: Images.asprin,
          time: "08:00",
          description:
            "Antibiotics are medications that fight bacterial infections. Antibiotics can stop the growth of bacteria by preventing them from making certain proteins they need to multiply. (Source: Cleveland Clinic)",
        },
        {
          name: "Birth control",
          dose: "Take 1 pill once per day",
          image: Images.avitan,
          time: "08:00",
          description:
            "Birth control pills are a type of contraception that’s 99% effective at preventing pregnancy when taken consistently every day. The pill contains hormones that regulate menstruation, decrease PMS symptoms, lower the risk of ovarian and uterine cancers, improve acne and treat endometriosis. (Source: Cleveland Clinic)",
        },
      ],
    },
    {
      time: "10:00",
      medications: [
        {
          name: "Adderall",
          dose: "Take 1 pill, on Mondays",
          image: Images.adderall,
          time: "10:00",
          description:
            "Adderall treats attention-deficit hyperactivity disorder (ADHD). It works by improving focus and reducing impulsive behavior. It may also be used to treat narcolepsy. It works by promoting wakefulness. It belongs to a group of medications called stimulants. (Source: Cleveland Clinic)",
        },
        {
          name: "Vitamin D",
          dose: "Take 1 pill once per day",
          image: Images.d3,
          time: "10:00",
          description:
            "Vitamin D capsules and tablets treat low vitamin D levels in your body. It increases the amount of calcium your body can absorb. Vitamin D and calcium help build and maintain the health of your bones, your immune system and your brain. (Source: Cleveland Clinic)",
        },
      ],
    },
    {
      time: "20:00",
      medications: [
        {
          name: "Antibiotics",
          dose: "Take 1 pill twice per day",
          image: Images.asprin,
          time: "20:00",
          description:
            "Antibiotics are medications that fight bacterial infections. Antibiotics can stop the growth of bacteria by preventing them from making certain proteins they need to multiply. (Source: Cleveland Clinic)",
        },
        // {
        //   name: "Melatonin",
        //   dose: "Take 1 pill once per day",
        //   image: Images.avitan,
        //   time: "20:00",
        // },
      ],
    },
  ],
};

export { Icons, Images, Styles, UserMedications };
