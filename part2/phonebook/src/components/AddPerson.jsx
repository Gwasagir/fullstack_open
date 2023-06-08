const AddPerson = (newName, newNumber) => {
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

export default AddPerson