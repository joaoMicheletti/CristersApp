import { View, Image, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native"

export default function HeaderBackComponente(){
    const router = useRouter();
    function back(){
        router.replace('./home');
    };
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={back}>
            <AntDesign  style={{padding: 10}} name="left" size={30} color="white" />
            </TouchableOpacity>
            
            <Ionicons style={styles.notification} name="notifications" size={30} color="white" />
            <Image style={styles.profileImage}
                source={require('../../../../assets/images/profileimage.png')}
                resizeMode="contain"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#5e5e7449",
        height:55,
    },
    logoTxt:{
        padding:10,
        width: 50,
    },
    notification: {
        padding: 10,
    },
    profileImage: {
        marginTop: 5,
        marginRight: 10,
        width: 40,
        height: 40
    },
})