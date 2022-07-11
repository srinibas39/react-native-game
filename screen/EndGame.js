import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
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

        <PrimaryButton>Start Again</PrimaryButton>
    </View>
}

const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    imageCon: {
        height: deviceWidth < 410 ? 200 : 300,
        width: deviceWidth < 410 ? 200 : 300,
        borderRadius: deviceWidth < 410 ? 100 : 150,
        margin: 16,
        overflow: "hidden"
    },
    endGameImage: {
        height: "100%",
        width: "100%",
    },
    text: {
        fontFamily: "open-sans",
        color: colors.secondary2,
        fontSize: 32,
    },
    boldText: {
        fontFamily: "open-sans-bold",
        color: "#7f1d1d",

    }


})