import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Inicio from '../screens/Inicio'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenViewMensajes from '../screens/ScreenViewMensajes';
import StackMensajes from './StackMensajes';


const TabNavigation = createBottomTabNavigator()
const TabTop = createMaterialTopTabNavigator();

const Tab = () => {
  return (
    <TabTop.Navigator
        screenOptions={{

        }}
      >
        <TabTop.Screen
          name="Inicio"
          component={Inicio}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => null,
            tabBarLabelStyle:{
              fontSize: 16,
              fontWeight: '900',
              height: 20,
              width: '100%',
            }
          }}
        />
        <TabTop.Screen
          name="Mensajes"
          component={StackMensajes}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => null,
            tabBarLabelStyle:{
              fontSize: 16,
              fontWeight: '900',
              height: 20,
              width: '100%',
            }
          }}
        />
      </TabTop.Navigator>
    
  )
}

export default Tab

/*
<TabNavigation.Navigator screenOptions={{
      tabBarStyle:{
        height:90,
        top:0,
        position:'absolute',
        borderRadius:30
      }
    }}>
      <TabNavigation.Screen 
        name="Inicio" 
        component={Inicio} 
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=> null,
          tabBarLabelStyle:{
            display:'flex',
            fontSize:20,
            fontWeight:'700',
            height:45,
            width:'100%',
            alignItems:'center',
            justifyContent:'center'
          },
        }}
      />
      <TabNavigation.Screen 
        name="Mensajes" 
        component={ScreenViewMensajes} 
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=> null,
          tabBarLabelStyle:{
            display:'flex',
            fontSize:20,
            fontWeight:'700',
            height:45,
            width:'100%',
            alignItems:'center',
            justifyContent:'center'
          },
        }}
      />
    </TabNavigation.Navigator>*/