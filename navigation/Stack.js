import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Presentacion from '../screens/Presentacion';
import CreacionDeUsuario from '../screens/CreacionDeUsuario';

const StackBienvenida = createStackNavigator();

function Stack() {
  return (
    <StackBienvenida.Navigator>
        <StackBienvenida.Screen name='Iniciar' component={Presentacion} options={{
            headerShown:false
        }}/>
        <StackBienvenida.Screen name='crear Usuario' component={CreacionDeUsuario} options={{
            headerShown:false
        }}/>
    </StackBienvenida.Navigator>
  )
}

export default Stack