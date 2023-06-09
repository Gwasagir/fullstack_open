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

const removePerson = () => {

}

const updateNum = () => {}

export default { getAll, newPerson, removePerson, updateNum }