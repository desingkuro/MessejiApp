import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Stack from '../navigation/Stack'
import { Contexto } from '../context/ContextoGeneral'
import Inicio from './Inicio'
import Tab from '../navigation/Tab'

const Moderador = () => {
    const {
        loginactivo
    }=useContext(Contexto)
    if(!loginactivo) return <Stack/>
  return (
    <Tab/>
  )
}

export default Moderador