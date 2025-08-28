// 📰 Implementa tu hook useNews aquí
// 
// Este archivo es donde debes crear tu custom hook.
// El hook debe:
// - Obtener noticias desde la API (http://localhost:3001/noticias)
// - Permitir filtrar por categoría
// - Manejar estados de carga y error

// Ejemplo de estructura:
/*
import { useState, useEffect } from 'react'

const useNews = () => {
  // Tu implementación aquí
}

export default useNews
*/

// ¡No veas la solución hasta intentarlo por ti mismo!
console.log('🎯 Archivo para tu hook useNews - ¡Empieza a programar!')

import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:3001/noticias'

const useNews = () => {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Cargar todas las noticias
  const cargarNoticias = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error('Error al cargar noticias')
      const data = await res.json()
      setNoticias(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Filtrar por categoría
  const filtrarPorCategoria = async (categoria) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_URL}?categoria=${encodeURIComponent(categoria)}`)
      if (!res.ok) throw new Error('Error al filtrar noticias')
      const data = await res.json()
      setNoticias(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Cargar noticias al inicio
  useEffect(() => {
    cargarNoticias()
  }, [])

  return { noticias, loading, error, cargarNoticias, filtrarPorCategoria }
}

export default useNews
