
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGame } from './screen/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Game } from './screen/Game';

export default function App() {

  const [confirmNo, setConfirmNo] = useState();

  const confirmNoPick = (no) => {
    setConfirmNo(no)
  }

  let screen = <StartGame confirmNoPick={confirmNoPick} />

  if (confirmNo) {
    screen = <Game enteredNo={confirmNo} />
  }


  return (
    <LinearGradient colors={["#f1f5f9", "#dc2626"]} style={styles.appContainer} >
      <SafeAreaView>{screen}</SafeAreaView>
      <ImageBackground source={require("./assets/images/dice2.jpg")} resizeMode="cover" style={styles.ImageBackground}></ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    paddingTop: 32
  },
  ImageBackground: {
    flex: 1,
    opacity: 0.15
  }
})


