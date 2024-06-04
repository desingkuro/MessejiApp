export const CajasStyles = StyleSheet.create({
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