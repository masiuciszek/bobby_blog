import { useState } from 'react'

export default (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState)

  const toggle = (): void => {
    setState(!state)
  }

  return [state, toggle]
}
