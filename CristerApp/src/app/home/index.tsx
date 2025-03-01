import React, { useRef } from "react";
import { SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, Animated } from "react-native";
import { styles } from "./style";
import HeaderComponente from "../component/header/index";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();
    const scrollY = useRef(new Animated.Value(0)).current; // Estado animado para Scroll

    function Redirect(rota: string) {
        router.replace(`./${rota}`); // Removendo `./`
    }

    return (
        <ImageBackground
            source={require("../../../assets/images/bgLogin.webp")}
            style={styles.safeArea} resizeMode="cover"
        >
            <SafeAreaView>
                {/* Header recebe a prop scrollY para ficar transparente */}
                <HeaderComponente scrollY={scrollY} /> 

                <Animated.ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                >
                    {/* Mapeamento dos TouchableOpacity para evitar repetição */}
                    {[...Array(5)].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => Redirect('liberacao')}>
                            <ImageBackground
                                style={styles.card}
                                source={require('../../../assets/images/fundoCardAnalise.png')}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                    ))}
                </Animated.ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};
