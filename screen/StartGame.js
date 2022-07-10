import { View, TextInput, StyleSheet } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

export const StartGame = () => {
  return <View style={styles.inputContainer}>
    <TextInput style={styles.input} />
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>
  </View>
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor:"blue",
    borderRadius:5,
    // shadow for android
    elevation:5,
    // shadow for ios
    shadowColor:"black",
    shadowRadius:5,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.25
    
  },
  input: {
    borderWidth: 1,
    borderColor: "#e11d48",

  }
})