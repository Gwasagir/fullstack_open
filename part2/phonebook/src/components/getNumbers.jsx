const GetNumbers = (numbers) => {
    return(
        numbers.persons.map(entry => 
            <li key={entry.name}>{entry.name}</li>)
    )
}

export default GetNumbers