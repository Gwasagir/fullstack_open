
const Header = (props) => {
  return(
    <h1>
      {props.course.name}
    </h1>
  )
} 

const Part = (props) => {
  return(
    <p>
    {props.part.name} {props.part.exercises}
    </p>
  )
}

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
    )
  }
    
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App