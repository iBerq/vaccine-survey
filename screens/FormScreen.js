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
import DatePicker from "@react-native-community/datetimepicker";
import * as data from "../data/data.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      birthdate: null,
      showDatePicker: false,
      maxDate: new Date(Date.now()),
      gender: "",
      city: "",
      vaccineType: "",
      sideEffects: "",
      positiveAndSymptoms: "",
      showPickerModal: false,
      pickerType: "",
      pickerData: [],
      submitEnabled: false,
    };

    this._isMounted = false;
  }

  async componentDidMount() {
    this._isMounted = true;
    if (this.props.route.params.type == "edit") {
      await this.getData();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggleDatePickerDisplayed = () => {
    this._isMounted &&
      this.setState({ showDatePicker: !this.state.showDatePicker });
  };

  togglePickerModal = () => {
    if (!this.state.showPickerModal) {
      switch (this.state.pickerType) {
        case "gender":
          this._isMounted && this.setState({ pickerData: data.genders });
          break;
        case "city":
          this._isMounted && this.setState({ pickerData: data.cities });
          break;
        case "vaccineType":
          this._isMounted && this.setState({ pickerData: data.vaccineTypes });
          break;
        case "sideEffects":
          this._isMounted && this.setState({ pickerData: data.sideEffects });
          break;
        case "positiveAndSymptoms":
          this._isMounted &&
            this.setState({ pickerData: data.positiveAndSymptoms });
          break;

        default:
          break;
      }
    }
    this._isMounted &&
      this.setState({ showPickerModal: !this.state.showPickerModal });
  };

  setPickerValue = (value) => {
    switch (this.state.pickerType) {
      case "gender":
        this._isMounted && this.setState({ gender: value }, this.checkInputs);
        break;
      case "city":
        this._isMounted && this.setState({ city: value }, this.checkInputs);
        break;
      case "vaccineType":
        this._isMounted &&
          this.setState({ vaccineType: value }, this.checkInputs);
        break;
      case "sideEffects":
        this._isMounted &&
          this.setState({ sideEffects: value }, this.checkInputs);
        break;
      case "positiveAndSymptoms":
        this._isMounted &&
          this.setState({ positiveAndSymptoms: value }, this.checkInputs);
        break;

      default:
        break;
    }
  };

  checkInputs = () => {
    if (
      this.state.name &&
      this.state.surname &&
      this.state.birthdate &&
      this.state.city &&
      this.state.gender &&
      this.state.vaccineType &&
      this.state.sideEffects &&
      this.state.positiveAndSymptoms
    )
      this._isMounted && this.setState({ submitEnabled: true });
    else this._isMounted && this.setState({ submitEnabled: false });
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem("@formSubmitted", "1");
      await AsyncStorage.setItem("@name", this.state.name);
      await AsyncStorage.setItem("@surname", this.state.surname);
      await AsyncStorage.setItem("@birthdate", this.state.birthdate.toString());
      await AsyncStorage.setItem("@gender", this.state.gender);
      await AsyncStorage.setItem("@city", this.state.city);
      await AsyncStorage.setItem("@vaccineType", this.state.vaccineType);
      await AsyncStorage.setItem("@sideEffects", this.state.sideEffects);
      await AsyncStorage.setItem(
        "@positiveAndSymptoms",
        this.state.positiveAndSymptoms
      );
    } catch (e) {
      console.log("error storing infos", e);
    }
  };

  getData = async () => {
    try {
      let name = await AsyncStorage.getItem("@name");
      let surname = await AsyncStorage.getItem("@surname");
      let birthdate = await AsyncStorage.getItem("@birthdate");
      let gender = await AsyncStorage.getItem("@gender");
      let city = await AsyncStorage.getItem("@city");
      let vaccineType = await AsyncStorage.getItem("@vaccineType");
      let sideEffects = await AsyncStorage.getItem("@sideEffects");
      let positiveAndSymptoms = await AsyncStorage.getItem(
        "@positiveAndSymptoms"
      );
      this._isMounted &&
        this.setState(
          {
            name: name,
            surname: surname,
            birthdate: new Date(birthdate),
            gender: gender,
            city: city,
            vaccineType: vaccineType,
            sideEffects: sideEffects,
            positiveAndSymptoms: positiveAndSymptoms,
          },
          this.checkInputs
        );
    } catch (e) {
      console.log("error storing infos", e);
    }
  };

  submit = async () => {
    await this.storeData();
    this.props.navigation.reset({
      index: 0,
      routes: [
        {
          name: "SuccessfulSubmitScreen",
        },
      ],
    });
  };

  render() {
    let chosenDate = null;
    return (
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
        }}
        activeOpacity={5}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={data.backgroundImage}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "flex-start" }}
        >
          <View
            style={{
              height: "90%",
              width: "80%",
              marginTop: "7%",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TextInput
              style={{
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 30,
                paddingLeft: 15,
                backgroundColor: "white",
                width: "90%",
                height: Dimensions.get("window").height / 20,
              }}
              placeholder="Name"
              textContentType="name"
              accessibilityLabel={"NameField"}
              value={this.state.name}
              onChangeText={(value) =>
                this._isMounted &&
                this.setState({ name: value }, this.checkInputs)
              }
            />
            <TextInput
              style={{
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 30,
                paddingLeft: 15,
                backgroundColor: "white",
                width: "90%",
                height: Dimensions.get("window").height / 20,
              }}
              placeholder="Surname"
              textContentType="name"
              accessibilityLabel={"SurnameField"}
              value={this.state.surname}
              onChangeText={(value) =>
                this._isMounted &&
                this.setState({ surname: value }, this.checkInputs)
              }
            />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={this.toggleDatePickerDisplayed}
            >
              <TextInput
                style={{
                  textAlignVertical: "bottom",
                  color: "black",
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingLeft: 15,
                  backgroundColor: "white",
                  width: "90%",
                  height: Dimensions.get("window").height / 20,
                }}
                placeholder="Birth Date"
                accessibilityLabel={"BirthDateSelect"}
                editable={false}
                pointerEvents="none"
                value={
                  this.state.birthdate
                    ? this.state.birthdate.getDate() +
                      " " +
                      data.months[this.state.birthdate.getMonth()] +
                      " " +
                      this.state.birthdate.getFullYear()
                    : null
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => {
                this._isMounted &&
                  this.setState({ pickerType: "city" }, function () {
                    this.togglePickerModal();
                  });
              }}
            >
              <TextInput
                style={{
                  textAlignVertical: "bottom",
                  color: "black",
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingLeft: 15,
                  backgroundColor: "white",
                  width: "90%",
                  height: Dimensions.get("window").height / 20,
                }}
                placeholder="City"
                accessibilityLabel={"CitySelect"}
                editable={false}
                pointerEvents="none"
                value={this.state.city}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => {
                this._isMounted &&
                  this.setState({ pickerType: "gender" }, function () {
                    this.togglePickerModal();
                  });
              }}
            >
              <TextInput
                style={{
                  textAlignVertical: "bottom",
                  color: "black",
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingLeft: 15,
                  backgroundColor: "white",
                  width: "90%",
                  height: Dimensions.get("window").height / 20,
                }}
                placeholder="Gender"
                accessibilityLabel={"GenderSelect"}
                editable={false}
                pointerEvents="none"
                value={this.state.gender}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => {
                this._isMounted &&
                  this.setState({ pickerType: "vaccineType" }, function () {
                    this.togglePickerModal();
                  });
              }}
            >
              <TextInput
                style={{
                  textAlignVertical: "bottom",
                  color: "black",
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingLeft: 15,
                  backgroundColor: "white",
                  width: "90%",
                  height: Dimensions.get("window").height / 20,
                }}
                placeholder="Vaccine type you applied"
                accessibilityLabel={"VaccineSelect"}
                editable={false}
                pointerEvents="none"
                value={this.state.vaccineType}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => {
                this._isMounted &&
                  this.setState({ pickerType: "sideEffects" }, function () {
                    this.togglePickerModal();
                  });
              }}
            >
              <TextInput
                style={{
                  textAlignVertical: "bottom",
                  color: "black",
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingLeft: 15,
                  backgroundColor: "white",
                  width: "90%",
                  height: Dimensions.get("window").height / 20,
                }}
                placeholder="Any side effects after vaccination"
                editable={false}
                accessibilityLabel={"SideEffectSelect"}
                pointerEvents="none"
                value={this.state.sideEffects}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => {
                this._isMounted &&
                  this.setState(
                    { pickerType: "positiveAndSymptoms" },
                    function () {
                      this.togglePickerModal();
                    }
                  );
              }}
            >
              <TextInput
                style={{
                  textAlignVertical: "bottom",
                  color: "black",
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingLeft: 15,
                  backgroundColor: "white",
                  width: "90%",
                  height: Dimensions.get("window").height / 20,
                }}
                placeholder="Any PCR positive cases and Covid-19 symptoms after 3rd vaccination"
                editable={false}
                accessibilityLabel={"PCRPosSelect"}
                pointerEvents="none"
                value={this.state.positiveAndSymptoms}
              />
            </TouchableOpacity>
            {this.state.submitEnabled ? (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={this.submit}
              >
                <View
                  style={{
                    textAlignVertical: "bottom",
                    color: "black",
                    borderColor: "#003d50",
                    borderWidth: 2,
                    borderRadius: 30,
                    backgroundColor: "#007da5",
                    width: "90%",
                    height: Dimensions.get("window").height / 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  pointerEvents="none"
                >
                  <Text
                    style={{
                      fontSize: Dimensions.get("window").width / 23,
                      fontWeight: "bold",
                      color: "white",
                    }}
                    accessibilityLabel={"SubmitButton"}
                  >
                    Submit
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
          <Modal
            style={{ width: "100%", height: "100%" }}
            visible={this.state.showDatePicker}
            animationType="slide"
            transparent={true}
          >
            <SafeAreaView
              style={{
                padding: "5%",
                backgroundColor: "#007da5",
                left: "0%",
                right: "0%",
                bottom: "0%",
                alignItems: "center",
                position: "absolute",
              }}
            >
              <View
                style={{
                  paddingTop: "5%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingHorizontal: "20%",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.toggleDatePickerDisplayed();
                    this.checkInputs();
                  }}
                  style={{
                    width: "40%",
                    paddingBottom: "2%",
                    borderBottomWidth: 0.3,
                    borderBottomColor: "white",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: Dimensions.get("window").width / 20,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (chosenDate != null) {
                      this._isMounted &&
                        this.setState(
                          { birthdate: chosenDate },
                          this.checkInputs
                        );
                      this.toggleDatePickerDisplayed();
                    } else {
                      if (!this.state.birthdate)
                        this._isMounted &&
                          this.setState(
                            { birthdate: new Date() },
                            this.checkInputs
                          );
                      this.toggleDatePickerDisplayed();
                    }
                  }}
                  style={{
                    width: "40%",
                    paddingBottom: "2%",
                    borderBottomWidth: 0.3,
                    borderBottomColor: "white",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: Dimensions.get("window").width / 20,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Select
                  </Text>
                </TouchableOpacity>
              </View>
              <DatePicker
                display="spinner"
                textColor="white"
                style={{ width: "100%" }}
                value={this.state.birthdate ? this.state.birthdate : new Date()}
                mode="date"
                locale="en-GB"
                maximumDate={this.state.maxDate}
                onChange={(event, date) => {
                  chosenDate = date;
                }}
              />
            </SafeAreaView>
          </Modal>
          <Modal
            style={{ width: "100%" }}
            visible={this.state.showPickerModal}
            animationType="slide"
            transparent={true}
          >
            <FlatList
              style={{
                width: Dimensions.get("window").width,
                backgroundColor: "#007da5",
                left: "0%",
                right: "0%",
                top:
                  this.state.pickerType == "city" ||
                  this.state.pickerType == "vaccineType" ||
                  this.state.pickerType == "sideEffects"
                    ? "65%"
                    : undefined,
                bottom: "0%",
                position: "absolute",
              }}
              data={this.state.pickerData}
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "5%",
                width: "100%",
              }}
              keyExtractor={(item, key) => key.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => {
                    this.setPickerValue(item, this.state.pickerType);
                    this.togglePickerModal();
                  }}
                  style={{
                    paddingVertical: "3%",
                    width: Dimensions.get("window").width,
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      borderBottomColor: "rgba(255,255,255,0.2)",
                      borderBottomWidth: 0.5,
                      width: "100%",
                      fontSize: Dimensions.get("window").width / 20,
                      color: "white",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Modal>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default FormScreen;
