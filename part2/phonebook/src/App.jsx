import { useState } from 'react'
import GetNumbers from './components/GetNumbers'
import CheckEquality from './components/DeepEquals'
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
 
  const raiseError = () => alert(`${newName} is already added to phonebook`)

  const addPerson = (event) => {
    event.preventDefault()
    let unique = true
    const PersonObject = {
      name: newName,
      number: newNumber
    }
    // Checking if newName exists
    persons.map(person => {
      if (CheckEquality(PersonObject.name, person.name)){
        raiseError(`${PersonObject.name} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
        unique = false
      }}
    )
    // Shouldn't come here if raiseError occured before
    if (unique) {
    setPersons(persons.concat(PersonObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    return(AddPerson(this.newName, this.newNumber, this.persons))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterValue={filterValue} handler={handleFilter} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleAddName}/></div>
        <div> number: <input value={newNumber} onChange={handleAddNum} /> </div>
        <div> <button type="submit">add</button> </div>
      </form>

      <h2>Numbers</h2>
        <GetNumbers persons={persons} filter={filterValue} />
    </div>
  )
}

export default App