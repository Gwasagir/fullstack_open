const GetNumbers = (numbers) => {
    return(
        numbers.persons.map(entry => 
            <div key={entry.name}>{entry.name}</div>)
    )
}

export default GetNumbers