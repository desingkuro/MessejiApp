import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ScreenViewMensajes from '../screens/ScreenViewMensajes';
import ViewMensajes from '../screens/ViewMensajes';

const StackM = createStackNavigator();

const StackMensajes = () => {
  return (
    <StackM.Navigator>
        <StackM.Screen name='Iniciar' component={ScreenViewMensajes} options={{
            headerShown:false
        }}/>
        <StackM.Screen name='Mensaje' component={ViewMensajes} options={{
            headerShown:false
        }}/>
    </StackM.Navigator>
  )
}

export default StackMensajes