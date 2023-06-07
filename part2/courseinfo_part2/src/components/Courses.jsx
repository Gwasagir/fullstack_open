const Part = (props) => {
    return(
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )}
  
const Content = (props) => {
    return(props.parts.map(part => <Part key={part.name} part={part}/>)
    )}
  
const Total = (props) => {
    let calcTotal = props.parts.reduce((sum, order) => {
      return sum + order.exercises
    }, 0)
    return(
      <b>
        total of {calcTotal} exercises
      </b>
      )}

const Header = ({name}) => <h2>{name}</h2>

const Courses = (props) => {
    return(props.courses.map(courses =>
      <>
        <div> <Header key={courses.name} name={courses.name} /> </div>
        <div> <Content key={"course"+courses.id} parts={courses.parts} /> </div>
        <div> <Total key={"totalkey"+courses.id} parts={courses.parts} /> </div>
      </> 
      ))
  }


export default Courses