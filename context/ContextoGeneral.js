import { createContext, useEffect, useState } from "react"
import { FontAwesome5 } from '@expo/vector-icons';
import { creacionUsuarioScreen } from "../Styles/creacionDeUsuarioStyle";
import { appFireBase } from "../Data/CredencialesFB";
import * as firebase from 'firebase/firestore'
export const Contexto = createContext();

const db = firebase.getFirestore(appFireBase);
const docRef = firebase.doc(db, "Usuarios", "users");

function ContextoGeneral({children}) {
    const iconoUsuario = <FontAwesome5 name="user" size={84} color="black"/>

    const [imgUsuario,setImgUsuario] = useState(null);
    const [imgSelecionada,setImgUsuarioSelecionada] = useState(false);
    const [nombreUsuario,setUsuario] = useState('');
    const [loginactivo,setLoginActivo] = useState(false);

    useEffect(()=>{
      // Obtener el documento
      async function getDocument(){
        try {
          const docSnap = await firebase.getDoc(docRef);
          if (docSnap.exists()) {
            // El documento existe, puedes acceder a sus datos
            const data = docSnap.data();
            console.log("Datos del documento:", data);
          } else {
            console.log("El documento no existe.");
          }
        } catch (error) {
          console.error("Error al obtener el documento:", error);
        }
      }
      getDocument()
    },[])

  return (
    <Contexto.Provider value={{
        imgUsuario,setImgUsuario,imgSelecionada,setImgUsuarioSelecionada,iconoUsuario,
        nombreUsuario,setUsuario,loginactivo,setLoginActivo
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default ContextoGeneral