import { FlatList, ScrollView, Dimensions, Image, StyleSheet, SafeAreaView, Text, Pressable, View } from "react-native";
import { Images, Styles } from "../../assets/themes";
import MedLog from "./MedLog";

export default function useLogSection(medicationsSection) {
  console.log("one medication section info")
  console.log(medicationsSection)
  const time = medicationsSection.time;
  const medications = medicationsSection.medications;
  // medications = [ { time:"08:00", medications : [{name: "Activan", dose: "one per day"}] }, 
  // {time:"10:00", medications: [{name: "Birth control", dose: "one per day"}, {name: "Vitamins", dose: "twice per day"}]} ]
  console.log(medications[0])
  return(
    <View style={{flexDirection: "Column"}}>
      <Text>{time}</Text>
      <FlatList
          data={medications}
          renderItem={({item}) => (
            <MedLog medication={item} />
          )}
          keyExtractor={item => item}
        />
    </View>

  )
}
