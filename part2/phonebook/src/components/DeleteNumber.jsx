import dbService from "../services/phonebook"

const DeleteNumber = (id, name, setPersons) => {
    console.log("Calling DeleteNumber on ID:",id, name);
    if (window.confirm(`delete ${name} ?`)){
        dbService
            .removePerson(id)
            .then(response => dbService.updatePersons(setPersons))
    }}

export default DeleteNumber