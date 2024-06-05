import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const ScreenLoad = ({load}) => {
    if(load){
        return (
            <View style={LoadStyle.View}>
                <ActivityIndicator size={'large'} color={'blue'} style={LoadStyle.indicador}>

                </ActivityIndicator>
            </View>
        )
    }
}

export default ScreenLoad
const LoadStyle = StyleSheet.create({
    View:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        zIndex:100,
        backgroundColor:'rgba(255,255,255,0.3)',
        height:'100%',
        width:'100%'
    },
    indicador:{
        width:300,
        height:300
    }
})