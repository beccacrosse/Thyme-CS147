import React from "react";
import { StyleSheet, Text, View, Pressable, } from "react-native";
import { Avatar, Card, IconButton, Button, MD3Colors} from "react-native-paper";
import Profile from "../shared/Profile"


// Back Button
const ConnectionContactCard = ({title,subtitle,profileImage, profileSize}) => {
  //const LeftContent = props => <Profile {...props} profileImage={profileImage} profileSize={profileSize} />;
 
  return (
    <View style = {{marginBottom: 10}}>
      
        <Card >
          <View style = {{ width : 160, display : "flex", flexDirection : "row" ,justifyContent : 'space-between', alignItems : "center"}}>
        <Card.Content>
            <Profile profileImage = {profileImage} profileSize = {profileSize}/>
        </Card.Content>
          <Card.Title
            title = {title}
            subtitle = {subtitle}
           
          />
          
          <Card.Actions  >
            <IconButton theme={{ colors: { primary: '#263E20' } }} size = {34} iconColor = "#263E20" mode = "outlined" icon={require('../../assets/icons/report.png')}>
            </IconButton>
          </Card.Actions>
          </View>
        </Card>
        
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectionContactCard;
