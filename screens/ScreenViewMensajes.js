import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ScreenMensajesStyle } from '../Styles/ScreenMensajesStyle'
import NoMensaje from '../components/NoMensaje'
import Mensaje from '../components/Mensaje'
import { Contexto } from '../context/ContextoGeneral'

const ScreenViewMensajes = ({navigation}) => {
  const {informacionUsuario,setInformacionUsuario} = useContext(Contexto);
  
  function siguentePantalla(){
    navigation.navigate('Mensaje')
  }

  useEffect(()=>{
    renderizarMensajes()
  },[informacionUsuario])

  function renderizarMensajes() {
    return informacionUsuario.mensajes.map((mensaje, i) => (
      <Mensaje estado={mensaje.estado} key={i} indice={i} texto={mensaje.texto} fecha={mensaje.fecha} funcion={siguentePantalla} />
    ));
  }
  return (
    <ScrollView style={ScreenMensajesStyle.scrollView}>
      <View style={ScreenMensajesStyle.viewContainer}>
        {
          informacionUsuario.mensajes.length > 0 
          ?renderizarMensajes()
          :<NoMensaje />
        }
      </View>
    </ScrollView>
  )
}

export default ScreenViewMensajes