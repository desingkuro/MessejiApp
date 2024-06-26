import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { creacionUsuarioScreen } from '../Styles/creacionDeUsuarioStyle'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { Contexto } from '../context/ContextoGeneral';
import * as imagePicker from 'expo-image-picker'
import useUserName from '../hooks/useUserName';
import ScreenLoad from '../components/ScreenLoad';


function CreacionDeUsuario({navigation}) {
    const {
        imgUsuario,setImgUsuario,imgSelecionada,setImgUsuarioSelecionada,iconoUsuario,
        setUsuario,setLoginActivo,nombreUsuario,obtenerUsuarios,setInformacionUsuario,
        guardarNuevo
    } = useContext(Contexto);
    const {query,error,setQuery,btonActivo} = useUserName(nombreUsuario)
    const [load,setLoad] = useState(false)

    //seleciona la imagen
    const pickImage = async () => {
        try{
            await imagePicker.requestMediaLibraryPermissionsAsync();
            const resultado = await imagePicker.launchImageLibraryAsync({
                mediaTypes: imagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
                aspect:[1,1]
            });
            if(!resultado.canceled){
                await guardarIMagen(resultado.assets[0].uri)
            }
        }catch(error){
            console.log(error)
        }
    };
    async function guardarIMagen(imagen){
        try{
            setImgUsuarioSelecionada(true)
            setImgUsuario(imagen)
        }catch(error){
            console.log(error)
        }
    }
    
    function obtenerNombreUsuario(nombre){
        setQuery(nombre)
    }
    async function login(){
        const objetoUser = {
            id:query,
            nombre:query,
            mensajes:[]
        }
        setLoad(true)
        const {user,encontrado} = await  obtenerUsuarios(objetoUser.id)
        if(encontrado){
            console.log(user)
            setUsuario(user.usuario)
            setInformacionUsuario(user)
        }else{
            setUsuario(objetoUser.usuario)
            guardarNuevo(objetoUser)
            setInformacionUsuario(objetoUser)
        }
        setLoad(false)
        setLoginActivo(true)
    }
  return (
    <LinearGradient 
        style={creacionUsuarioScreen.view}
        colors={['#00d4ff','#090979','#130a80']}
    >
        <Text style={creacionUsuarioScreen.textLogo}>
                    Messeji
        </Text>
        <View style={creacionUsuarioScreen.viewImagen}>
            {
                imgSelecionada ? <Image style={creacionUsuarioScreen.imagen} source ={{uri:imgUsuario}}/>
                : iconoUsuario
            }
            <TouchableOpacity style={creacionUsuarioScreen.btnImagen} onPress={pickImage}>
                <AntDesign name="pluscircleo" size={27} color="gray" />
            </TouchableOpacity>
        </View>
        <View style={creacionUsuarioScreen.viewInput}>
            <Text style={creacionUsuarioScreen.textLabelInput}>
                Escribe un nombre de usuario
            </Text>
            <TextInput style={creacionUsuarioScreen.input}
                placeholder='@newUsuario'
                placeholderTextColor={'rgba(243, 243, 243, 0.7)'}
                onChangeText={text=>obtenerNombreUsuario(text)}
                value={query}
            />
            <Text style={creacionUsuarioScreen.textLabelInputError}>
                {error}
            </Text>
            <TouchableOpacity style={creacionUsuarioScreen.btn} onPress={login} disabled={btonActivo}>
                <Text style={creacionUsuarioScreen.textoBtn}>
                    Crear Usuario
                </Text>
            </TouchableOpacity>
        </View>
        <ScreenLoad load={load}/>
    </LinearGradient>
  )
}

export default CreacionDeUsuario