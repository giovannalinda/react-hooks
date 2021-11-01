import React, { useState } from 'react'

export default function App() {
  const [tech, setTech] = useState(['React'])
  const [newTech, setNewTech] = useState('')

  function handleAdd() {
    setTech([...tech, newTech])
    setNewTech('')
  }

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type='text'
        value={newTech}
        onChange={(event) => setNewTech(event.target.value)}
      />
      <button type='button' onClick={handleAdd}>
        Adicionar
      </button>
    </>
  )
}
