import { useState, useCallback } from "react"

/**
 * useToggle hook
 * @param {any} initialValue Valor inicial
 * @param {any} alternateValue Valor alternativo (opcional)
 * @returns [value, toggle, setValue]
 */
const useToggle = (initialValue = false, alternateValue) => {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    if (alternateValue !== undefined) {
      setValue((prev) => (prev === initialValue ? alternateValue : initialValue))
    } else {
      setValue((prev) => !prev)
    }
  }, [initialValue, alternateValue])

  return [value, toggle, setValue]
}

export default useToggle