import { View, Text, Pressable, StyleSheet } from "react-native"

export const PrimaryButton = ({ children }) => {
    return <View style={styles.BtnContainer}>
        <Pressable style={({ pressed }) => pressed ? [styles.BtnPressableContainer, styles.isRipple] : styles.BtnPressableContainer} android_ripple={{ color: "#f87171" }}>
            <Text style={styles.BtnText}>{children}</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    BtnContainer: {
        height: 48,
        backgroundColor: "#dc2626",
        marginVertical: 16,
        borderRadius: 30,
        overflow: "hidden"
    },
    BtnPressableContainer: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    BtnText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    isRipple: {
        backgroundColor: "#f87171"
    }
})