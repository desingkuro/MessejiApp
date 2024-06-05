import { StyleSheet } from "react-native";

export const ViewMensajesStyle = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 380,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    height: 440,
    width: 380,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 380,
  },
  BtnFooter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 60,
    width: 280,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
    flexDirection:'row',
    gap:10
  },
  textBtn:{
    fontSize:22,
    fontWeight:'600'
  }
});
