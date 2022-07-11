import { Text, View, Image, StyleSheet } from "react-native";
import { Title } from "../components/Title";
import { colors } from "../constants/colors";

export const EndGame = () => {
    return <View style={styles.container}>
        <Title>Game Over!!!!!!!!</Title>
        <View style={styles.imageCon}>
            <Image style={styles.endGameImage} source={require("../assets/images/success.jpg")} />
        </View>
        <View>
            <Text style={styles.text}>Your phone needed <Text style={styles.boldText}>X</Text> turns to predict <Text style={styles.boldText}>Y</Text></Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        flex:1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    imageCon: {
        height: 300,
        width: 300,
        borderRadius:300,
        margin: 16,
        overflow:"hidden"
    },
    endGameImage: {
        height: "100%",
        width: "100%",
    },
    text:{
      fontFamily:"open-sans",
      color:colors.secondary2,
      fontSize:32,
    },
    boldText:{
        fontFamily:"open-sans-bold",
        color:"#7f1d1d",

    }


})