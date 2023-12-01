import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Card } from "react-native-paper";
import { Styles,Images } from "../../assets/themes";

const Logs = (props) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const size = 60;
  return (
    <ScrollView  style = {{backgroundColor : Styles.contentBackground}}>
      <View style={styles.sectionContainer}>
        <Text style={styles.subheaderText}>November 30, 2023</Text>
        <Card style={{ backgroundColor: "white" }}>
          {/* <Card.Title
            title="Ativan"
            subtitle="Taken at 8:00am"
            left={LeftContent}
          /> */}
           <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.avitan} />
          </Card.Content>
          <Card.Title title="Ativan"
            subtitle="Taken at 8:00am"/>
        </View>

        </Card>
        <Card
          style={{ backgroundColor: "white", marginTop: 10 }}
        >
          {/* <Card.Title
            title="Vitamin D3"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          /> */}
          <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.d3} />
          </Card.Content>
          <Card.Title title="Vitamin D3"
            subtitle="Taken at 12:00pm"/>
        </View>

        </Card>
        <Card
          style={{
            backgroundColor: "white",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          {/* <Card.Title
            title="Aspirin"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          /> */}
           <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.asprin} />
          </Card.Content>
          <Card.Title  title="Aspirin"
            subtitle="Taken at 12:00pm"/>
        </View>
          
        </Card>
        <Text style={styles.subheaderText}>November 29, 2023</Text>
        <Card style={{ backgroundColor: "white"}}>
          {/* <Card.Title
            title="Ativan"
            subtitle="Taken at 8:00am"
            left={LeftContent}
          /> */}
          <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.avitan} />
          </Card.Content>
          <Card.Title  title="Ativan"
            subtitle="Taken at 8:00am"/>
        </View>
        </Card>
        <Card
          style={{ backgroundColor: "white", marginTop: 10 }}
        >
          {/* <Card.Title
            title="Vitamin D3"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          /> */}
           <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.d3} />
          </Card.Content>
          <Card.Title  title="Vitamin D3"
            subtitle="Taken at 12:00pm"/>
        </View>
          
        </Card>
        <Card
          style={{ backgroundColor: "white", marginTop: 10 }}
        >
          {/* <Card.Title
            title="Aspirin"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          /> */}
          <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.asprin} />
          </Card.Content>
          <Card.Title   title="Aspirin"
            subtitle="Taken at 12:00pm"/>
        </View>
        </Card>
        <Card
          style={{
            backgroundColor: "white",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          
          {/* <Card.Title
            title="Adderall"
            subtitle="Taken at 8:00pm"
            left={LeftContent}
          /> */}
          <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.adderall} />
          </Card.Content>
          <Card.Title   title="Adderall"
            subtitle="Taken at 12:00pm"/>
        </View>
        </Card>
        <Text style={styles.subheaderText}>November 28, 2023</Text>
        <Card
          style={{ backgroundColor: "white", marginTop: 10 }}
        >
          {/* <Card.Title
            title="Vitamin D3"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          /> */}
          <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.d3} />
          </Card.Content>
          <Card.Title   title="Vitamin D3"
            subtitle="Taken at 12:00pm"/>
        </View>

        </Card>
        <Card
          style={{ backgroundColor: "white", marginTop: 10 }}
        >
          {/* <Card.Title
            title="Aspirin"
            subtitle="Taken at 12:00pm"
            left={LeftContent}
          /> */}
          <View
          style={{
            width: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Content>
            <Image style={[
            styles.icon,
            { width: size, height: size },
          ]} source={Images.asprin} />
          </Card.Content>
          <Card.Title   title="Aspirin"
            subtitle="Taken at 12:00pm"/>
        </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  subheaderText: {
    color: Styles.buttonOutlineColor,
    fontSize: "18px",
    marginBottom: 10,
  },
  tabs: {
    backgroundColor: Styles.buttonOutlineColor,
  },
});

export default Logs;
