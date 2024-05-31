import { StyleSheet } from "react-native";

export const presentacionScreen = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  btn: {
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 20,
    width: 260,
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
  politicas: {
    height: 100,
    width: 310,
    alignItems: "center",
    justifyContent: "center",
  },
  textPoliticas: {
    textAlign: "center",
    color: "#ffff",
  },
  textLogo: {
    fontFamily: "IceCream",
    fontSize: 100,
    color: "white",
  },
  viewLogo: {
    height: 500,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
