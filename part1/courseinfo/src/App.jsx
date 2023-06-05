
const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
} 

const Part = (props) => {
  return(
    <p>
    {props.parts[props.index]} {props.exercises[props.index]}
    </p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part parts={props.parts} exercises={props.exercises} index={0}/>
      <Part parts={props.parts} exercises={props.exercises} index={1}/>
      <Part parts={props.parts} exercises={props.exercises} index={2}/>
    </div>
  )
}

const Total = (props) => {
  const sum_exercises = props.exercises.reduce(function(a,b){return a+b})
  return(
    <p>
      Number of exercises {sum_exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App