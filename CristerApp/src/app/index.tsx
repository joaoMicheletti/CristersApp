import React, { useState } from "react";
import { View, Image, Text, TextInput, 
    StyleSheet, ImageBackground, Alert, TouchableOpacity } from "react-native";
    import api from '../services/api/api'

export default function Index() {
    const [user, setUser] = useState("");  // Inicializa o estado como string vazia
    const [pass, setPass] = useState("");

    const handleLogin = () => {
        if (!user || !pass) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }
        Alert.alert("Login", `Usuário: ${user}\nSenha: ${pass}`);
    };

    return (
        <ImageBackground 
            source={require("../../assets/images/bgLogin.webp")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Image 
                    style={styles.img} 
                    resizeMode="stretch" 
                    source={require('../../assets/images/imgLogin.png')}
                />
                <Text style={styles.titleLogin}>Login</Text>

                <TextInput 
                    value={user}
                    onChangeText={setUser} 
                    placeholder="Usuário" 
                    style={styles.inputTxt}
                />

                <TextInput 
                    value={pass}
                    onChangeText={setPass} 
                    secureTextEntry={true} 
                    placeholder="Senha" 
                    style={styles.inputTxt}
                />

                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.btn} 
                    onPress={handleLogin}  // Adiciona a função de login
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity> 
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        alignItems: "center",
        padding: 20,
    },
    img: {
        width: 300,
        height: 180,
        marginBottom: 20,
    },
    titleLogin: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#FFF"
    },
    inputTxt: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    btn: {
        width: 250,
        height: 50,
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    btnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
