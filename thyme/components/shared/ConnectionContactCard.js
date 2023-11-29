import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Avatar, Card, IconButton, Button } from "react-native-paper";


// Back Button
const ConnectionContactCard = (props) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  
  return (
    <View>
      
        <Card >
          <View style = {{ width : 240, display : "flex", flexDirection : "row" ,justifyContent : 'space-between', alignItems : "center"}}>
          <Card.Title
            title="Doctor Who"
            subtitle="Professional"
            left={LeftContent}
            
          />
          
          <Card.Actions  >
            <Button theme={{ colors: { primary: '#263E20' } }} >Ok</Button>
          </Card.Actions>
          </View>
        </Card>
        
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectionContactCard;
