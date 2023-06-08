import { useState } from 'react'
import GetNumbers from './components/getNumbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const PersonObject = {
      name: newName
    }
    setPersons(persons.concat(PersonObject))
    setNewName('')
  }

  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handleAddName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
        <GetNumbers persons={persons} />
    </div>
  )
}

export default App