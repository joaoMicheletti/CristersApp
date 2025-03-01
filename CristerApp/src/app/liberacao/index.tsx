import React from "react";
import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
import HeaderBackComponente from "../component/headerBack";

export default function AnaliseLiberacao(){
    return(
        <View style={Styles.container} >
            <HeaderBackComponente/>
            <Text style={{color: "white", textAlign: 'center', fontSize:80}}>data- formato - tema - arte - legenda: funcionalidade: editar evrythings </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#18181afd"
    }
})