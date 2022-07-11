import { View, Text, Pressable, StyleSheet } from "react-native"
import { colors } from "../constants/colors"

export const PrimaryButton = ({ children,handlePress }) => {
    return <View style={styles.BtnContainer}>
        <Pressable style={({ pressed }) => pressed ? [styles.BtnPressableContainer, styles.isRipple] : styles.BtnPressableContainer} android_ripple={{ color: "#f87171" }} onPress={handlePress}>
            <Text style={styles.BtnText}>{children}</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    BtnContainer: {
        height: 48,
        backgroundColor: colors.primary,
        marginVertical: 16,
        borderRadius: 30,
        overflow: "hidden",
        borderWidth: 2,
        borderColor:colors.secondary2,
        padding:8
    },
    BtnPressableContainer: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    BtnText: {
        color:colors.secondary2 ,
        fontSize: 16,
        textAlign: "center",
    },
    isRipple: {
        backgroundColor: colors.RippleColor
    }
})