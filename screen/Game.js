import { useEffect, useState } from "react"
import { Text, View, Alert } from "react-native"
import { GuessedNumber } from "../components/GuessedNumber"
import { PrimaryButton } from "../components/PrimaryButton"
import { Title } from "../components/Title"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';



export const Game = ({ enteredNo, gameOver }) => {




    let min = 1;
    let max = 100;

    const generateNo = (min, max, exclude) => {
        const randNo = Math.floor(Math.random() * (max - min)) + min;
        if (randNo === exclude) {
            return generateNo(min, max, exclude)
        }
        else {
            return randNo;
        }
       
    }

    const initalGuess = generateNo(min, max, enteredNo)
    const [guessedNo, setGuessedNo] = useState(initalGuess)

    useEffect(() => {
        if (guessedNo === enteredNo) {
            gameOver();
        }
    }, [guessedNo])



    const guessHighOrLower = (type) => {

        if (type === "lower" && guessedNo < enteredNo || type === "higher" && guessedNo > enteredNo) {
            Alert.alert(
                "Invalid option",
                "Please do appropriate operation",
                [{ text: "Ok", style: "destructive" }]
            )
        }
        if (type === "lower") {
            max = enteredNo;
        }
        else if (type === "higher") {
            min = enteredNo + 1;
        }

        const newRandomNo = generateNo(min, max, enteredNo);
        setGuessedNo(newRandomNo)
    }



    return <View>
        <Title>Your Guess!!!</Title>
        <GuessedNumber>{guessedNo}</GuessedNumber>
        <View>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                <PrimaryButton handlePress={() => guessHighOrLower("lower")}><Feather name="minus" size={24} color="white" /></PrimaryButton>
                <PrimaryButton handlePress={() => guessHighOrLower("higher")}><Ionicons name="add" size={24} color="white" /></PrimaryButton>
            </View>

        </View>
    </View>
}