import { useState, useEffect } from "react"

// 📝 Implementa tu hook useLocalStorage aquí
// 
// Este archivo es donde debes crear tu custom hook.
// El hook debe:
// - Recibir una key y un valor inicial
// - Retornar el valor actual y una función para actualizarlo
// - Persistir los cambios en localStorage

// Ejemplo de estructura:
/*
import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  // Tu implementación aquí
}

export default useLocalStorage
*/

// ¡No veas la solución hasta intentarlo por ti mismo!
console.log('🎯 Archivo para tu hook useLocalStorage - ¡Empieza a programar!')

const useLocalStorage = (key, initialValue) => {
  // Recupera el valor guardado o usa el inicial
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored !== null ? JSON.parse(stored) : initialValue
  })

  // Guarda en localStorage cuando cambia el valor o la key
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
