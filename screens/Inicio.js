import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import {Cajas} from '../components/Cajas'
import { Contexto } from '../context/ContextoGeneral';
import { LinearGradient } from 'expo-linear-gradient';

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

const InicioStyle = StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:30
    },
    tarjeta:{
      //backgroundColor:'#FEBBCC',
      height:220,
      width:300,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        overflow:'hidden'
    },
    imagenBackground:{
      height:'100%',
      width:'100%',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
    },
    tarjetaText:{
      width:'100%',
      textAlign:'center',
      fontSize:25,
      fontWeight:'900',
      color:'white'
    },
    viewImagen:{
      height:120,
      width:120,
      backgroundColor:'white',
      borderRadius:200,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:4,
      borderColor:'gray'
    },
    cajasContainer:{
      marginTop:30,
      gap:10,
      width:400,
      alignItems:'center',
      justifyContent:'center',
    },
    imagen:{
      height:'100%',
      width:'100%',
      borderRadius:50
    }
})