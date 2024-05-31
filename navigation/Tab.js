import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Inicio from '../screens/Inicio'
import { Ionicons } from '@expo/vector-icons';


const TabNavigation = createBottomTabNavigator()
const Tab = () => {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen 
        name="Mystack" 
        component={Inicio} 
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=>{
            return <Ionicons name="home" size={size} color={color} />
        },
        tabBarLabelStyle:{
          display:'none'
        }
        }}
      />
    </TabNavigation.Navigator>
  )
}

export default Tab