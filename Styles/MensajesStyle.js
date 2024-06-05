import { StyleSheet } from "react-native";

export const MensajesStyle = StyleSheet.create({
    container:{
        width:370,
        height:100,
        borderRadius:20,
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        backgroundColor:'white',
        marginBottom:10
    },
    iconomensaje:{
        height:'100%',
        width:'20%',
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    containerTexto:{
        height:'100%',
        width:'68%',
        alignItems:'center',
        justifyContent:'center'
    },
    texto:{
      fontSize:18,
      fontWeight:'700',
      width:'100%',
      height:20,
    },
    fecha:{
      fontSize:12,
      fontWeight:'700',
      width:'100%',
      height:20,
      color:'rgba(0,0,0,.5)',
      marginTop:5
    },
    iconoFlecha:{
        height:'100%',
        width:'10%',
        alignItems:'center',
        justifyContent:'center',
    },
    iconoActivo:{
      position:'absolute',
      zIndex:100,
      right:10,
      backgroundColor:'white',
      borderRadius:50,
      padding:2,
      top:20,
      height:25,
      width:25,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:.1,
      borderColor:'grey'
    }
})