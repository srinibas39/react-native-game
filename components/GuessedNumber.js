import { View, Text, StyleSheet } from "react-native"
import { colors } from "../constants/colors"

export const GuessedNumber = ({ children }) => {
  return <View style={styles.guessBox}>
    <View style={styles.guessedContainer}>
      <Text style={styles.guessedNumber}>{children}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  guessBox:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  guessedContainer: {
    padding: 16,
    margin: 16,
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
    borderRadius: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"


  },
  guessedNumber: {
    color: colors.secondary2,
    fontSize: 60,
    fontWeight: "bold",


  }

})