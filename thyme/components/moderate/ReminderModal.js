import React from 'react'
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { Overlay} from "react-native-elements";


const ReminderModal = ({visible, content,visibilityFunction}) => {

  return (
    <View>
    <Overlay 
        isVisible = {visible} 
        onBackdropPress = {visibilityFunction}  
      
    >
      <Text style={styles.textPrimary}>{content}</Text>
      
      {/* <Button
        icon={
          <Icon
            name="wrench"
            type="font-awesome"
            color="white"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        title="Start Building"
        onPress={toggleOverlay}
      /> */}
    </Overlay>
  </View>
);
  
}

const styles = StyleSheet.create({
    button: {
      margin: 10,
    },
    textPrimary: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 20,
    },
    textSecondary: {
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 17,
    },
    });

export default ReminderModal;
