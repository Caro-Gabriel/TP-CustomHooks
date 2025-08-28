import React from "react"
import useToggle from "../hooks/useToggle"

const ToggleDemo = () => {
  const [isOn, toggleIsOn] = useToggle(false)
  const [theme, toggleTheme] = useToggle("light", "dark")
  const [status, toggleStatus, setStatus] = useToggle("active", "inactive")

  return (
    <div style={{ padding: 24 }}>
      <h2>Demo: useToggle Hook</h2>
      <div>
        <strong>Boolean toggle:</strong>
        <button onClick={toggleIsOn} style={{ marginLeft: 8 }}>
          {isOn ? "ON" : "OFF"}
        </button>
      </div>
      <div>
        <strong>Theme toggle:</strong>
        <button onClick={toggleTheme} style={{ marginLeft: 8 }}>
          {theme}
        </button>
      </div>
      <div>
        <strong>Status toggle:</strong>
        <button onClick={toggleStatus} style={{ marginLeft: 8 }}>
          {status}
        </button>
        <button onClick={() => setStatus("active")} style={{ marginLeft: 8 }}>
          Set Active
        </button>
        <button onClick={() => setStatus("inactive")} style={{ marginLeft: 8 }}>
          Set Inactive
        </button>
      </div>
    </div>
  )
}

export default ToggleDemo
