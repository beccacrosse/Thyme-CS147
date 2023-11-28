import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    
       <LinearGradient
        // Background Linear Gradient
        style={styles.container}
        colors={['#C2D8A4', 'rgba(194, 216, 164, 0.00)']}
        start={{x:0.6, y:0.4}}
        
      >

      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      </LinearGradient>
     
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});

//fill: linear-gradient(180deg, #C2D8A4 0.77%, rgba(194, 216, 164, 0.00) 100%);