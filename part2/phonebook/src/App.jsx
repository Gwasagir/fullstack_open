import { useState, useEffect } from 'react'
import GetNumbers from './components/GetNumbers'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  // Hooks
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  
  // Event handlers
  const handleAddName = (event) => setNewName(event.target.value)
  const handleAddNum = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setFilterValue(event.target.value)

  // Effect Hook for fetching data
  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

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