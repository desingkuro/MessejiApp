import { StyleSheet } from "react-native";

export const CajaMensajesStyle = StyleSheet.create({
  contenedor: {
    height: 200,
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  partes: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  partesTexto: {
    fontSize: 25,
    fontWeight: "900",
    fontFamily: "IceCream",
    color: "white",
  },
  textoMensaje: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  parteLinear: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  superior: {
    maxHeight: 100,
  },
  inferior: {
    minHeight: 100,
  },
});
