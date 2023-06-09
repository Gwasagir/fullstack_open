// props.persons = list of persons from db
// deletedId={deletedId} setDeletedId={setDeletedId}
// props.filter = filtervalue state in filter field
const GetNumbers = (props) => {
    const returnNumbers = (true)
    ? props.persons.filter(person => person.name == props.filter)
    : props.persons

    if (returnNumbers.length > 0) {
        return(
        <div key={returnNumbers[0].id}> 
            {returnNumbers[0].name} {returnNumbers[0].number}                 
                <button onClick={() => {
                    props.setDeletedId(entry.id);
                    props.handleDelete(entry.id);}
                    }>delete</button>
        </div>
        )}
    return(
        props.persons.map(entry => 
            <div key={entry.name}> 
                {entry.name} {entry.number} 
                <button onClick={() => {
                    props.setDeletedId(entry.id);
                    props.handleDelete(entry.id, entry.name);}
                    }>delete</button>
            </div>)
        // <div>
        //     {props.persons.filter(entry => entry.id !== props.DeletedId).map(filteredName => (
        //         <div key={filteredName.id}>
        //             {filteredName.name} {filteredName.number}
        //                 <button onClick={() => {
        //                 props.setDeletedId(filteredName.id);
        //                 props.handleDelete(filteredName.id, filteredName.name);}
        //                 }>delete</button>
        //         </div>
        //     ))}
        // </div>
    )
}

export default GetNumbers       