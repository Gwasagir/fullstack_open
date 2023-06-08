import { useState } from 'react'
import GetNumbers from './components/GetNumbers'
import CheckEquality from './components/DeepEquals'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let unique = true
    const PersonObject = {
      name: newName
    }
    // Checking if newName exists
    persons.map(person => {
      if (CheckEquality(newName, person.name)){
        raiseError()
        setNewName('')
        unique = false
      }}
    )
    // Shouldn't come here if raiseError occured before
    if (unique) {
    setPersons(persons.concat(PersonObject))
    setNewName('')
    }
  }

  const raiseError = () => alert(`${newName} is already added to phonebook`)

  const handleAddName = (event) => setNewName(event.target.value)

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