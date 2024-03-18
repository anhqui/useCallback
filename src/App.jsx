import { useCallback, useState } from "react"
import List from "./List"

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback((incrementor) => {
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'

  }
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default App
