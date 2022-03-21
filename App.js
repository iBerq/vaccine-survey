import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import SuccessfulSubmitScreen from "./screens/SuccessfulSubmitScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerTitle: "Covid-19 Vaccine Survey App",
          headerTitleStyle: {
            fontSize: Dimensions.get("window").width / 20,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: { backgroundColor: "#00befa" },
          headerTitleAlign: "center",
          headerBackButtonMenuEnabled: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen
          name="SuccessfulSubmitScreen"
          component={SuccessfulSubmitScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
