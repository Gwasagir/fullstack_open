import CheckEquality from "./DeepEquals"
import dbService from "../services/phonebook"

// props.constants. persons, newName, newNumber
// props.setState. setPersons, setNewName, setNewNumber 
// props.handlers. handleName, handleNum

const AddPerson = (props) => {
    const raiseError = () => alert(`${props.newName} is already added to phonebook`)

    const addButton = (event) => {
        event.preventDefault()
        let unique = true
        const PersonObject = {
            name: props.newName,
            number: props.newNumber
        }
        // Checking if newName exists
        props.persons.map(person => {
            if (CheckEquality(PersonObject.name, person.name)){
            raiseError(`${PersonObject.name} is already added to phonebook`)
            props.setNewName('')
            props.setNewNumber('')
            unique = false
            }}
        )
        // Shouldn't come here if raiseError occured before
        if (unique) {
            props.setPersons(props.persons.concat(PersonObject))
            props.setNewName('')
            props.setNewNumber('')
        }
        if (unique) {dbService
            .newPerson(PersonObject)
            .then(returnedPersons => {
                props.setNewName('')
                props.setNewNumber('')
            })}
        }
    
    return(
    <div>
        <form onSubmit={addButton}>
            <div> name: <input value={props.newName} onChange={props.handleName}/></div>
            <div> number: <input value={props.newNumber} onChange={props.handleNum} /> </div>
            <div> <button type="submit">add</button> </div>
        </form>
    </div>
    )}

export default AddPerson