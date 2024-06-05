import { View, Text, TouchableOpacity, } from "react-native";
import React, { useContext } from "react";
import { Contexto } from "../context/ContextoGeneral";
import CajaMensaje from "../components/CajaMensaje";
import { ViewMensajesStyle } from "../Styles/ViewmesajesStyle";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewMensajes = () => {
  const { obtenerMensaje, indiceMensaje } = useContext(Contexto);
  const mensaje = obtenerMensaje(indiceMensaje);
  console.log(mensaje)
  if (mensaje != null) {
    return (
      <View style={ViewMensajesStyle.contenedor}>
        <View style={ViewMensajesStyle.header}>
        </View>
        <View style={ViewMensajesStyle.main}>
          <CajaMensaje texto={mensaje.texto} />
        </View>
        <View style={ViewMensajesStyle.footer}>
          <TouchableOpacity style={ViewMensajesStyle.BtnFooter}>
            <MaterialCommunityIcons name="instagram" size={34} color="black" />
            <Text style={ViewMensajesStyle.textBtn}>Responder</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }else{
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
};

export default ViewMensajes;
