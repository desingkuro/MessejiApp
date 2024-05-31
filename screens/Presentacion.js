import React, { useCallback, useEffect } from 'react'
import { Button, Text, TouchableOpacity, View , StyleSheet} from 'react-native'
import { presentacionScreen } from '../Styles/PresentacionStyle'
import { LinearGradient } from 'expo-linear-gradient'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'


function Presentacion({navigation}) {
    const [fuenteCargada] = useFonts({
        IceCream : require('../assets/Fonts/IceCream.otf')
    })

    //mantiene activo el splash mientras que cargan las fuentes
    useEffect(()=>{
        async function activarSplash(){
            await SplashScreen.preventAutoHideAsync();
        }
        activarSplash();
    },[])

    //quitar el splash ya teniendo cargadas las fuentes y el layout
    const cargadoDeLayout = useCallback(async()=>{
        if(fuenteCargada){
            await SplashScreen.hideAsync();
        }
    },[fuenteCargada])

    if(!fuenteCargada) return null

    function siguentePantalla(){
        navigation.navigate('crear Usuario')
    }

    return (
        <LinearGradient onLayout={cargadoDeLayout}
            style={presentacionScreen.view}
            colors={['#00d4ff','#090979','#130a80']}
        >
            <View style={presentacionScreen.viewLogo}>
                <Text style={presentacionScreen.textLogo}>
                    Messeji
                </Text>
            </View>
            <TouchableOpacity style={presentacionScreen.btn} onPress={siguentePantalla}>
                <Text style={presentacionScreen.textoBtn}>
                    Iniciar
                </Text>
            </TouchableOpacity>
            <View style={presentacionScreen.politicas}>
                <Text style={presentacionScreen.textPoliticas}>
                    Al continuar, acepta nuestras condiciones de uso
                </Text>
                <Text style={presentacionScreen.textPoliticas}>
                    y que hs leido nuestras politicas de privacidad
                </Text>
            </View>
        </LinearGradient>
    )
}

export default Presentacion

