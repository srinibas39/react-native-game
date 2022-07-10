import { useState } from "react"
import { View, TextInput, StyleSheet, Alert } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

export const StartGame = ({ confirmNoPick }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const handleText = (text) => {
    setEnteredValue(text)
  }

  const handleReset = () => {
    setEnteredValue("");
  }


  const handleConfirm = () => {
    const no = parseInt(enteredValue)
    if (isNaN(no) || no < 0 || no >= 100) {
      //  show Alert
      Alert.alert(
        "Invalid no",
        "Enter a postive no",
        [{ text: "okay", style: "destructive", onPress: handleReset }]
      )
    }
    else {
      confirmNoPick(no);
    }
  }

  return <View style={styles.inputContainer}>
    <View style={styles.inputBox}>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" value={enteredValue} onChangeText={handleText} />
    </View>
    <View>
      <PrimaryButton handlePress={handleReset}>Reset</PrimaryButton>
      <PrimaryButton handlePress={handleConfirm}>Confirm</PrimaryButton>
    </View>
  </View>
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginVertical: 16,
    borderRadius: 5,
    backgroundColor: "#fee2e2",
    // shadow for android
    elevation: 4,
    // shadow for ios
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25
  },
  input: {
    width: 100,
    fontSize: 32,
    fontWeight: "bold",
    borderWidth: 4,
    padding: 8,
    margin: 8,
    borderColor: "#dc2626",
    color: "#dc2626",
    textAlign: "center"
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

})