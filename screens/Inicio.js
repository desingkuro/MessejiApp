import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import {Cajas} from '../components/Cajas'
import { Contexto } from '../context/ContextoGeneral';
import { LinearGradient } from 'expo-linear-gradient';
import { InicioStyle } from '../Styles/InicioStyles';

const Inicio = () => {
    const {
        imgUsuario,nombreUsuario,iconoUsuario
    } = useContext(Contexto);
  return (
    <View style={InicioStyle.view}>
      <LinearGradient style={InicioStyle.tarjeta} colors={['#E1306C', '#F77737']}>
        <ImageBackground
          source={{ uri: imgUsuario }} // Aquí debes proporcionar la URL de la imagen
          style={InicioStyle.imagenBackground}
          blurRadius={10} // Ajusta el valor para controlar la intensidad del efecto de desenfoque
        >
          <View style={InicioStyle.viewImagen}>
            {
              imgUsuario ? <Image style={InicioStyle.imagen} source={{uri:imgUsuario}}/>
              : iconoUsuario
            }
          </View>
          <Text style={InicioStyle.tarjetaText}>! Envía mensajes anónimos</Text>
        </ImageBackground>
      </LinearGradient>
      <View style={InicioStyle.cajasContainer}>
        <Cajas nombreUsuario={nombreUsuario} />
      </View>
    </View>
  )
}

export default Inicio

