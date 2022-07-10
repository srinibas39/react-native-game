
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { StartGame } from './screen/StartGame';

export default function App() {
  return (
    <View style={styles.appContainer} >
      <StatusBar />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column"
  }
})


