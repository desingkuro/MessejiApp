import { StyleSheet, Text, View,TouchableOpacity, ToastAndroid, Share } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import  * as Clipboard  from 'expo-clipboard';


export function Cajas({nombreUsuario}){
    async function copiarYCompartir(){
        const link = "messaji.Link/"+ nombreUsuario
        await Clipboard.setStringAsync(link)
        mostrarToast()
        compartirEnInstagram(link)
    }
    const compartirEnInstagram = async (link) => {
        try {
          await Share.share({
            message: '¡Mira este enlace interesante! ' + link, // Aquí debes proporcionar el enlace que deseas compartir
          });
        } catch (error) {
          console.error('Error al compartir:', error.message);
        }
      };
    function mostrarToast() {
        ToastAndroid.show('¡Link copiado exitosamente!', ToastAndroid.SHORT);
    }
    return (
      <View style={CajasStyles.cajaContainer}>
        <Text style={CajasStyles.text}>Copia el enlace y comparte en tus redes sociales</Text>
        <Text style={CajasStyles.textUsuario}>messaji.Link/{nombreUsuario}</Text>
        <LinearGradient 
            style={CajasStyles.btn}
            colors={['#E1306C', '#F77737']}
        >
            <TouchableOpacity style={CajasStyles.btn} onPress={copiarYCompartir}>
                <Text style={CajasStyles.textBtn}>Copiar enlace y compartir</Text>
                <AntDesign name="instagram" size={24} color="white" />
            </TouchableOpacity>
        </LinearGradient>
      </View>
    )
}

const CajasStyles = StyleSheet.create({
    cajaContainer:{
        height:180,
        width:320,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F6F5F2',
        borderRadius:20,
        padding:10,
        gap:6,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    text:{
        textAlign:'center',
        fontSize:20,
        width:'90%',
        fontWeight:'600'
    },
    btn:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        width:'90%',
        flexDirection:'row',
        gap:10,
    },
    textBtn:{
        fontSize:16,
        color:'white',
        fontWeight:'800',
        height:24,
    },
    textUsuario:{
        textAlign:'center',
        fontSize:18,
        width:'90%',
        color:'gray',
        marginBottom:4
    }
})

