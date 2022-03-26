import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as data from "../data/data.js";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
    };

    this._isMounted = false;
  }

  async componentDidMount() {
    this._isMounted = true;

    try {
      const value = await AsyncStorage.getItem("@formSubmitted");
      if (value !== null && value) {
        this._isMounted && this.setState({ formSubmitted: true });
      }
    } catch (e) {
      console.log("error reading email", e);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ImageBackground
          source={data.backgroundImage}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "flex-start" }}
        >
          {this.state.formSubmitted ? (
            <View
              style={{
                alignItems: "center",
                height: "40%",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("FormScreen", { type: "edit" })
                }
                style={{
                  width: "60%",
                  height: "60%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: "#003d50",
                  borderRadius: 20,
                  backgroundColor: "#007da5",
                }}
              >
                <View
                  style={{
                    width: "25%",
                    aspectRatio: 1,
                    marginBottom: "10%",
                  }}
                >
                  <Image
                    source={data.editIcon}
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "contain",
                      tintColor: "white",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: Dimensions.get("window").width / 23,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Edit the Form
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View
            style={{
              alignItems: "center",
              height: "40%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("FormScreen", { type: "new" })
              }
              style={{
                width: "60%",
                height: "60%",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#003d50",
                borderRadius: 20,
                backgroundColor: "#007da5",
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
                  source={data.formIcon}
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "contain",
                    tintColor: "white",
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: Dimensions.get("window").width / 23,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Fill the Form
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
