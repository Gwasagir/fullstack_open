import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const newPerson = newObject => {
    const request = axios.post(baseUrl, newObject) 
    return request.then(response => response.data)
}

const removePerson = id => {
    const request = axios.delete('http://localhost:3001/persons/'+id)
    return request.then(response => response)
}

const updateNum = () => {}

const updatePersons = (setPersons) => {  
    const request = axios.get(baseUrl);
    request.then(response => {
      const persons = response.data;
      setPersons(persons)
    })}


export default { getAll, newPerson, removePerson, updateNum, updatePersons }