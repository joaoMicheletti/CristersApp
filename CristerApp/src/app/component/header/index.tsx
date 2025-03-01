import React from "react";
import {Animated, Image, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

// Definição correta do tipo do componente
const HeaderComponente: React.FC<{ scrollY: Animated.Value }> = ({ scrollY }) => {

    return (
        <Animated.View style={styles.container}>
            <Image style={styles.logoTxt} 
                source={require('../../../../assets/images/logoTxt.png')}
                resizeMode="contain"
            />
            <Ionicons style={styles.notification} name="notifications" size={30} color="white" />
            <Image style={styles.profileImage}
                source={require('../../../../assets/images/profileimage.png')}
                resizeMode="contain"
            />
        </Animated.View>
    );
};

// Exportação correta
export default HeaderComponente;

const styles = StyleSheet.create({
    container: {
        position: "absolute", // Fixa o header no topo
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#5e5e7449", // Cor inicial transparente
        height: 55,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    logoTxt: {
        width: 50,
    },
    notification: {
        padding: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
    },
});
