import {View, Text, StyleSheet, ImageBackground} from "react-native";
export default  function Index(){
    return(
        <ImageBackground 
            source={require("../../assets/images/bgLogin.webp")} // Caminho da imagem
            style={styles.background}>
                <View>
                    <Text>Hello Cristers</Text>
                </View>
            </ImageBackground>
        
    )
}
const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: "cover", // Ajusta a imagem ao fundo
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
      padding: 20,
      borderRadius: 10,
    },
})