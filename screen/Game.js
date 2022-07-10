import { useState } from "react"
import { Text, View } from "react-native"
import { GuessedNumber } from "../components/GuessedNumber"
import { Title } from "../components/Title"



export const Game = ({enteredNo}) => {

    const generateNo=(min,max,exclude)=>{
         const randNo= Math.floor(Math.random()*(max-min))+min;
         if(randNo===exclude){
            return generateNo(min,max,exclude)
         }
         else{
            return randNo;
         }
    }
    const initalGuess=generateNo(1,100,enteredNo)
    const [guessedNo,setGuessedNo]=useState(initalGuess)

    return <View>
        <Title>Your Guess!!!</Title>
        <GuessedNumber>{guessedNo}</GuessedNumber>
    </View>
}