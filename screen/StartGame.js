import { useState } from "react"
import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"
import { colors } from "../constants/colors";

export const StartGame = ({ confirmNoPick }) => {

  const { width, height } = useWindowDimensions();

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

  const marginDist = width < 420 ? 32 : 100

  return <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={[styles.inputContainer, { marginTop: marginDist }]}>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" value={enteredValue} onChangeText={handleText} />
        </View>
        <View>
          <PrimaryButton handlePress={handleReset}>Reset</PrimaryButton>
          <PrimaryButton handlePress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  </ScrollView>
}



const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  inputContainer: {
    padding: 16,
    marginVertical: 16,
    borderRadius: 5,
    backgroundColor: colors.secondary,
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
    borderColor: colors.primary,
    color: colors.primary,
    textAlign: "center"
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

})