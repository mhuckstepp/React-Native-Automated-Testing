import * as React from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showExtra, setShowExtra] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text accessibilityLabel="titleTwo" style={styles.title}>
        Sign In
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.inputView}>
        <TextInput
          placeholder="EEEmail..."
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          accessibilityLabel="tabTwoEmail"
          testID={"emailInput"}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          accessibilityLabel="password"
          testID={"passwordInput"}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        onPress={() => setShowExtra(!showExtra)}
        title="Login"
        color="#841584"
        accessibilityLabel="Login"
        testID={"LoginButton"}
      />
      <Button
        onPress={() => setShowExtra(!showExtra)}
        title="Signup"
        color="#841584"
        accessibilityLabel="Signup"
        testID={"SignupButton"}
      />
      {showExtra && (
        <Text accessibilityLabel="titleTwo" style={styles.title}>
          Display
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#cdd1dc",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#3CB371",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
});
