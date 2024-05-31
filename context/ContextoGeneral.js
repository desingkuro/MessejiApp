import { createContext, useState } from "react"
import { FontAwesome5 } from '@expo/vector-icons';
import { creacionUsuarioScreen } from "../Styles/creacionDeUsuarioStyle";

export const Contexto = createContext()

function ContextoGeneral({children}) {
    const iconoUsuario = <FontAwesome5 name="user" size={84} color="black"/>

    const [imgUsuario,setImgUsuario] = useState(null);
    const [imgSelecionada,setImgUsuarioSelecionada] = useState(false);
    const [nombreUsuario,setUsuario] = useState('');
    const [loginactivo,setLoginActivo] = useState(false);

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