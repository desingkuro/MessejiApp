// NoMessagesBox.js

import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NoMensaje = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',height:'100%'}}>
      <MaterialCommunityIcons name="message-alert" size={68} color="rgba(0,0,0,0.4)" />
      <Text style={{ fontSize: 19, color: 'gray', marginTop: 10 }}>
        No se encuentran mensajes
      </Text>
    </View>
  );
};

export default NoMensaje;
