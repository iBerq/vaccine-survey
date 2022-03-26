import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  Button,
  Keyboard,
  ImageBackground,
  TextInput,
  Dimensions,
  Modal,
  FlatList,
} from "react-native";
import * as data from "../data/data.js";

class SuccessfulSubmitScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ImageBackground
          source={data.backgroundImage}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "flex-start" }}
        >
          <View
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "30%",
                aspectRatio: 1,
                marginBottom: "10%",
              }}
            >
              <Image
                source={data.successfulIcon}
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain",
                  tintColor: "#007da5",
                }}
              />
            </View>
            <Text
              style={{
                fontSize: Dimensions.get("window").width / 23,
                fontWeight: "bold",
                color: "#007da5",
              }}
            >
              Form successfully submited.
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("HomeScreen")}
              style={{
                marginTop: "5%",
                width: "60%",
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#003d50",
                borderRadius: 20,
                backgroundColor: "#007da5",
              }}
            >
              <Text
                style={{
                  fontSize: Dimensions.get("window").width / 23,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Go to main page.
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SuccessfulSubmitScreen;
