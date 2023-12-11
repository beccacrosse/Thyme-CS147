import React from "react";
import { Dimensions, Text, View, Image, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../assets/themes";

import { Images } from "../../assets/themes";
import {Icons} from "../../assets/themes";
import Profile from "../../components/shared/Profile";
import { Searchbar,Divider,Button} from "react-native-paper";
import AddNewModal from "../../components/moderate/AddNewModal";
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts,
  AlegreyaSans_400Regular,
} from "@expo-google-fonts/alegreya-sans";
import ConnectionContactCard  from "../../components/shared/ConnectionContactCard"
import DefaultConnectionContactCard from "../../components/shared/DefaultConnectionContactCard";

const windowWidth = Dimensions.get("window").width;
export default function Connections() {
  const isTablet = windowWidth > 500
  let [fontsLoaded] = useFonts({
    AlegreyaSans_400Regular,
  });

  const [newUserName, setNewUserName] = React.useState("");
  const [newUserRelation, setNewUserRelation] = React.useState("");
  const [newUserModalVisible, setNewUserModalVisible] = React.useState(false);
  const [newUserAdded, setNewUserAdded] = React.useState(false);

  function handleNewUserName (newUserName) {
    setNewUserName(newUserName);
  }

  function handleNewUserRelation (newUserRelation) {
    setNewUserRelation(newUserRelation);
  }

  function handleNewUserModalVisible (userModalVisibleFromChildren) {
    setNewUserModalVisible(userModalVisibleFromChildren);
  }

  function handleNewUserAdded (){
    setNewUserAdded(true);
  }
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  if (!fontsLoaded) {
    return <Text>font not loaded</Text>;
  }

 

  return (
    <LinearGradient
      // Background Linear Gradient
      style={Styles.container}
      colors={["#C2D8A4", "rgba(194, 216, 164, 0.00)"]}
      start={{ x: 0.6, y: 0.4 }}
    >
      <ScrollView>
      <View style={{ display: "flex", flexDirection: "column", top: 150 }}>

        <View style = {{top : -100, }}>
          <Text
            variant="displayLarge"
            style={{
              fontFamily: "Alegreya Sans",
              fontSize: 60,
              color: "#263E20",
              fontWeight: "bold",
            }}
          >
            Connections
          </Text>
        </View>

        <View style={isTablet? {widht: "full", top: -70} :{ width: "full" , top: -90, }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View style={{top : -70, width: "full"}}>
        <Divider bold = "true" />
        </View>
        
       

        <View style={isTablet? {top: 0, display : 'flex', flexDirection : "row", alignItems: "center", justifyContent: "left"}
        :{top: -60, display : 'flex', flexDirection : "row", alignItems: "center", justifyContent: "left"}}>
          
          <Profile profileImage={Images.anna} profileSize={100} />
          <Text
            variant="displayLarge"
            style={{
              fontFamily: "Alegreya Sans",
              fontSize: 30,
              color: "#263E20",
              fontWeight: "bold",
              left: 30
            }}
          >
            Anna Gao
          </Text>
        </View>

        {/* <View style={{top : -30, width: "full"}}>
        <Divider bold = "true" />
        </View> */}

        <View style = {isTablet? {top: 45}:{top : -40}}>
        <ConnectionContactCard profileImage={Images.cyan} title = "Doctor Cyan" subtitle= "Professional" profileSize={60} icon = {Icons.report}/>
        <ConnectionContactCard profileImage={Images.dia} title = "Dia" subtitle= "Friend" profileSize={60} icon = {Icons.alarm}/>
        <ConnectionContactCard profileImage={Images.hunter} title = "Hunter" subtitle= "Relative" profileSize={60} icon = {Icons.alarm}/>
        {newUserAdded === true? 
          <DefaultConnectionContactCard title = {newUserName} subtitle= {newUserRelation} profileSize={60} icon = {Icons.alarm}/>
        :
          null}
        
        <View style = {{marginTop: 20}}>
        <Button theme={{ colors: { primary: '#263E20' } }} mode = "outlined" icon = {Icons.addUser} size = {38} onPress={()=>setNewUserModalVisible(true)}>
          Add new Connection
        </Button>

        {newUserAdded === true? 
          null
        :
        <AddNewModal newUserModalVisible = {newUserModalVisible} handleNewUserRelation = {handleNewUserRelation} handleNewUserName = {handleNewUserName}
        handleNewUserModalVisible = {handleNewUserModalVisible} 
        handleNewUserAdded = {handleNewUserAdded}/>}

        
          
        
        </View>

       
        </View>


      </View>
      </ScrollView>
    </LinearGradient>
  );
}
