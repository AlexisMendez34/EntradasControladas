import { useState } from 'react'

function App() {
  const [miTexto, setMiTexto] = useState("")

  const handleText = (event) => {
    setMiTexto(event.target.value)
  }

  return (
    <>
       <div>
            Capture su texto
          </div>
          <input value={miTexto} onChange={handleText}/>
          <h3>Su Texto</h3>
          <p>
            {miTexto}
          </p>
    </>
  )
}

export default App
