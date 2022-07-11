
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGame } from './screen/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Game } from './screen/Game';
import { EndGame } from './screen/EndGame';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';




export default function App() {



  const [confirmNo, setConfirmNo] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  const confirmNoPick = (no) => {
    setConfirmNo(no);
    setIsGameOver(false);
  }

  const gameOver = () => {
    setIsGameOver(true)
  }

  let screen = <StartGame confirmNoPick={confirmNoPick} />

  if (confirmNo) {
    screen = <Game enteredNo={confirmNo} gameOver={gameOver} />
  }

  if (confirmNo && isGameOver) {
    screen = <EndGame />
  }

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <LinearGradient colors={["#f1f5f9", "#dc2626"]} style={styles.appContainer} >
      <SafeAreaView style={styles.screen}><EndGame/></SafeAreaView>
         
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
  },
  screen:{
    height:"100%"
  }
})


