import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const LocalStorageDemo = () => {
  const [nombre, setNombre] = useLocalStorage("usuario", "Juan")
  const [edad, setEdad] = useLocalStorage("edad", "25")

  return (
    <div style={{ padding: 24 }}>
      <h2>Demo: useLocalStorage Hook</h2>
      <div>
        <label>
          Nombre:{" "}
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            style={{ marginRight: 8 }}
          />
        </label>
        <span>(Guardado: {nombre})</span>
      </div>
      <div>
        <label>
          Edad:{" "}
          <input
            value={edad}
            onChange={e => setEdad(e.target.value)}
            style={{ marginRight: 8 }}
          />
        </label>
        <span>(Guardado: {edad})</span>
      </div>
    </div>
  )
}

export default LocalStorageDemo