const Part = (props) => {
    return(
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )}
  
const Content = (props) => {
    return(props.parts.map(part => <Part key={part.id} part={part}/>)
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
    <div key={courses.id}>
      <Header course={courses.name} />
      <Content parts={courses.parts} />
      <Total key={courses.id} parts={courses.parts} />
    </div>
      ))
  }

export default Courses