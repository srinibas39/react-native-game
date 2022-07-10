import { Text, View, StyleSheet } from "react-native"
import { colors } from "../constants/colors"

export const Title = ({ children }) => {
    return <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    titleContainer: {
        padding:32,
        borderWidth:4,
        marginTop:16,
        borderColor:colors.primary,
        backgroundColor:colors.secondary,
        borderRadius:10
    },
    title:{
        fontWeight:"bold",
        fontSize:32,
        textAlign:"center", 
        color:colors.primary
    }
        
})