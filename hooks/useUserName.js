
import React, { useEffect, useRef, useState } from 'react'

function useUserName(){
    const [query,setQuery] = useState('')
    const [error,setError] = useState(null)
    const [btonActivo,setBtonActivo] = useState(true)
    const primerUserName = useRef(true)
    useEffect(()=>{
        if (primerUserName.current) {
            primerUserName.current = query === ''
            return 
        }
        if(query === ''){
            setError('No se puede tener un nombre de usuario vacio')
            return
        }

        if(query === ' '){
            setError('No se puede tener un nombre de usuario vacio')
            return
        }
        if(query.length < 3){
            setError('Debe tener mas de 3 caracteres')
            return
        }
        setBtonActivo(false)
        setError(null)
    },[query])
  
    return ({query,error,setQuery,btonActivo})
}

export default useUserName