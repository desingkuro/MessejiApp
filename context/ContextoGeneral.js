import { createContext, useEffect, useState } from "react"
import { FontAwesome5 } from '@expo/vector-icons';
import { appFireBase } from "../Data/CredencialesFB";
import { getFirestore, collection, addDoc,doc, getDocs ,setDoc,getDoc} from "firebase/firestore";
import { ToastAndroid } from "react-native";
export const Contexto = createContext();

function ContextoGeneral({children}) {
    const db = getFirestore(appFireBase);
    const iconoUsuario = <FontAwesome5 name="user" size={84} color="black"/>

    const [imgUsuario,setImgUsuario] = useState(null);
    const [imgSelecionada,setImgUsuarioSelecionada] = useState(false);
    const [nombreUsuario,setUsuario] = useState('');
    const [loginactivo,setLoginActivo] = useState(false);
    const [informacionUsuario,setInformacionUsuario] = useState(null)
    const [indiceMensaje,setIndiceMensaje] = useState(null)

    async function guardarNuevo(data){
      try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          usuario:data.nombre,
          mensajes:data.mensajes,
          id:data.id
        });
        //console.log("Documento escrito con el ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    async function obtenerUsuarios(id) {
      let encontrado = false;
      try {
          const querySnapshot = await getDocs(collection(db, "usuarios"));
          const usuarios = querySnapshot.docs.map((doc) => doc.data());
          console.log("Usuarios encontrados:", usuarios);
          
          const user = usuarios.find((user) => user.id === id);
          if (user) {
              encontrado = true;
              return { user, encontrado };
          } else {
              return { user: null, encontrado };
          }
      } catch (error) {
          console.error("Error al obtener los usuarios:", error);
          return null;
      }
    }
    
    function obtenerMensaje(indice){
      const mensaje = informacionUsuario.mensajes[indice]
      return mensaje
    }

    function actualizarEstado(indice){
      informacionUsuario.mensajes[indice].estado = false
      setInformacionUsuario(informacionUsuario)
    }

    function mostrarToast(mensaje){
      ToastAndroid.show(`¡${mensaje}!`, ToastAndroid.SHORT)
    }
    
    function actualizarDatos(data){
      // Actualiza el documento con nuevos datos (sin sobrescribir los campos existentes)
      db.collection("Usuarios").doc(data.id).set(
        {
          usuario: data.usuario,
          mensajes: data.mensaje,
        },
        { merge: true }
      )
        .then(() => {
          console.log("Documento actualizado correctamente");
        })
        .catch((error) => {
          console.error("Error al actualizar el documento:", error);
        });
    }

  return (
    <Contexto.Provider value={{
        imgUsuario,setImgUsuario,imgSelecionada,setImgUsuarioSelecionada,iconoUsuario,
        nombreUsuario,setUsuario,loginactivo,setLoginActivo,obtenerUsuarios,
        informacionUsuario,setInformacionUsuario,guardarNuevo,mostrarToast,
        actualizarEstado,obtenerMensaje,indiceMensaje,setIndiceMensaje
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default ContextoGeneral