
import { StyleSheet, ImageBackground } from 'react-native';
import { StartGame } from './screen/StartGame';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={["#f1f5f9", "#dc2626"]} style={styles.appContainer} >
      <StartGame />
      <ImageBackground source={require("./assets/images/dice2.jpg")} resizeMode="cover" style={styles.ImageBackground}>
      </ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
  },
  ImageBackground: {
    flex: 1,
    opacity: 0.15
  }
})


