const GetNumbers = (props) => {

    const returnNumbers = (true)
    ? props.persons.filter(person => person.name == props.filter)
    : props.persons

    if (returnNumbers.length > 0) {
        return(
        <div key={returnNumbers[0].id}> 
        {returnNumbers[0].name} {returnNumbers[0].number}
        </div>
        )}

    return(
        props.persons.map(entry => 
            <div key={entry.name}> {entry.name} {entry.number} </div>)
    )
}

export default GetNumbers