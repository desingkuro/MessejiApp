import { StyleSheet } from "react-native";

export const creacionUsuarioScreen = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    gap:20
  },
  btn: {
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 20,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    height: 60,

    shadowColor: "white",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity:  0.21,
    shadowRadius: 6.65,
    elevation: 9
  },
  textoBtn: {
    fontWeight: "700",
    fontSize: 25,
  },
  viewImagen: {
    height: 180,
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    position:'relative',
    backgroundColor:'white',
    borderRadius:100
  },
  imagen:{
    width:'100%',
    height:'100%',
    alignSelf:'center',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  btnImagen:{
    borderRadius:100,
    height:28,
    width:28,
    backgroundColor:'white',
    position:'absolute',
    left:'70%',
    top:'80%',
    alignItems:'center',
    justifyContent:'center'
  },
  textLogo: {
    fontFamily: "IceCream",
    fontSize: 100,
    color: "white",
    padding:10
  },
  viewInput: {
    height: 200,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    gap:10
  },
  input: {
    height: 50,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    fontSize:20,
    paddingLeft:10,
    borderBottomWidth:2,
    borderColor:'white',
    backgroundColor:'rgba(222, 222, 222, 0.4)',
    color:'white',
    fontWeight:'400'
  },
  textLabelInput:{
    fontSize:16,
    color:'white',
    textAlign:'left',
    width:280
  },
  textLabelInputError:{
    fontSize:14,
    color:'#EF9595',
    textAlign:'left',
    width:280,
    marginBottom:20,
  }
});
