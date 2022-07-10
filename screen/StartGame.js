import { View, TextInput, StyleSheet } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

export const StartGame = () => {
  return <View style={styles.inputContainer}>
    <TextInput style={styles.input} maxLength={2} keyboardType="number-pad"/>
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>
  </View>
}

const styles = StyleSheet.create({
  inputContainer: {
    padding:16,
    marginVertical:16,
    borderRadius:5,
    backgroundColor:"#f1f5f9",
    // shadow for android
    elevation:4,
    // shadow for ios
    shadowColor:"black",
    shadowRadius:5,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.25 
  },
  input: {
    width:100,
    fontSize:32,
    fontWeight:"bold",
    borderWidth:2,
    padding:8,
    margin:8,
    borderColor:"#dc2626",
    color:"#dc2626",
    textAlign:"center"
  }
})