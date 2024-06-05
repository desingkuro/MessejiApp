import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { Contexto } from '../context/ContextoGeneral';
import { MensajesStyle } from '../Styles/MensajesStyle';


const Mensaje = ({texto,estado,fecha,indice,funcion}) => {
  const {actualizarEstado,setIndiceMensaje} = useContext(Contexto);
  
  function accionBtn(){
    actualizarEstado(indice)
    setIndiceMensaje(indice)
    funcion()
  }

  return (
    <TouchableOpacity style={MensajesStyle.container} onPress={accionBtn}>
        <View style={MensajesStyle.iconomensaje}>
            <View style={MensajesStyle.iconoActivo}>
              <AntDesign name={estado ? "checkcircle" :"checkcircleo"} size={16} color = {estado ? '#5ccb5f' : 'rgba(0,0,0,0.1)'} />
            </View>
            <MaterialCommunityIcons name="message-processing" size={44} color={estado ? '#5ccb5f' :"rgba(0,0,0,0.1)"} />
        </View>
      <View style={MensajesStyle.containerTexto}>
        <Text style={MensajesStyle.texto}>{texto}</Text>
        <Text style={MensajesStyle.fecha}>{fecha.seconds}</Text>
      </View>
      <View style={MensajesStyle.iconoFlecha}>
        <MaterialIcons name="arrow-forward-ios" size={44} color="rgba(0,0,0,0.5)" />
      </View>
    </TouchableOpacity>
  )
}

export default Mensaje

