import React from "react";
import { StyleSheet, Text, View, Pressable, } from "react-native";
import { Avatar, Card, IconButton, Button } from "react-native-paper";
import Profile from "../shared/Profile"


// Back Button
const ConnectionContactCard = ({title,subtitle,profileImage, profileSize}) => {
  //const LeftContent = props => <Profile {...props} profileImage={profileImage} profileSize={profileSize} />;
 
  return (
    <View>
      
        <Card >
          <View style = {{ width : 140, display : "flex", flexDirection : "row" ,justifyContent : 'space-between', alignItems : "center"}}>
        <Card.Content>
            <Profile profileImage = {profileImage} profileSize = {profileSize}/>
        </Card.Content>
          <Card.Title
            title = {title}
            subtitle = {subtitle}
           
          />
          
          <Card.Actions  >
            <Button theme={{ colors: { primary: '#263E20' } }} >Report</Button>
          </Card.Actions>
          </View>
        </Card>
        
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectionContactCard;
