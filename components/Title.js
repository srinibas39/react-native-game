import { Text, View, StyleSheet } from "react-native"

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
        borderColor:"#dc2626",
        backgroundColor:"#fee2e2"
    },
    title:{
        fontWeight:"bold",
        fontSize:32,
        textAlign:"center", 
        color:"#dc2626" 
    }
        
})