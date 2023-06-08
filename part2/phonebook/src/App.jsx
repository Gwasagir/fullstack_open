import { useState } from 'react'
import GetNumbers from './components/GetNumbers'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'

const App = () => {
  // Hooks
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  
  // Event handlers
  const handleAddName = (event) => setNewName(event.target.value)
  const handleAddNum = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setFilterValue(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handler={handleFilter} />
      <h3>add a new</h3>
        <AddPerson persons={persons} setPersons={setPersons} newName={newName} 
        newNumber={newNumber} handleName={handleAddName} handleNum={handleAddNum}
        setNewName={setNewName} setNewNumber={setNewNumber} />
      <h3>Numbers</h3>
        <GetNumbers persons={persons} filter={filterValue} />
    </div>
  )
}

export default App