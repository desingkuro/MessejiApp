import { View, Text } from 'react-native'
import React from 'react'
import { CajaMensajesStyle } from '../Styles/CajaMensajesStyle'
import { LinearGradient } from 'expo-linear-gradient'

const CajaMensaje = ({texto}) => {
  return (
    <View style={CajaMensajesStyle.contenedor}> 
        <View style={{...CajaMensajesStyle.partes,...CajaMensajesStyle.superior}}>
            <LinearGradient
                style={CajaMensajesStyle.parteLinear}
                colors={['#a6c0fe','#d57eeb']}
            >
                <Text style={CajaMensajesStyle.partesTexto}>Mensaje Anonimo</Text>
            </LinearGradient>
        </View>
        <View style={CajaMensajesStyle.partes}>
            <Text style={CajaMensajesStyle.textoMensaje}>{texto}</Text>
        </View>
    </View>
  )
}

export default CajaMensaje
