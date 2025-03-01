import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#5e5e7449",
        height:55,
    },
    card: {
        backgroundColor: "#5e5e74",
        margin: 50,
        height:300,
        borderRadius: 20, // Bordas arredondadas
        overflow: 'hidden' // faz o border radios funcionar no IMGBG
    },
    titleCard: {
        marginTop: 250,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 30,
    }
});