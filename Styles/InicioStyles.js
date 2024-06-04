export const InicioStyle = StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:30
    },
    tarjeta:{
      //backgroundColor:'#FEBBCC',
      height:220,
      width:300,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        overflow:'hidden'
    },
    imagenBackground:{
      height:'100%',
      width:'100%',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
    },
    tarjetaText:{
      width:'100%',
      textAlign:'center',
      fontSize:25,
      fontWeight:'900',
      color:'white'
    },
    viewImagen:{
      height:120,
      width:120,
      backgroundColor:'white',
      borderRadius:200,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:4,
      borderColor:'gray'
    },
    cajasContainer:{
      marginTop:30,
      gap:10,
      width:400,
      alignItems:'center',
      justifyContent:'center',
    },
    imagen:{
      height:'100%',
      width:'100%',
      borderRadius:50
    }
})