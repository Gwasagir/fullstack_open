import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

// const StatisticLine = ({text, value, sign}) => <tr>{text} {value} {sign}</tr>
const StatisticLine = ({text, value, sign}) => {
  return(
    <>
      <td>{text}</td>
      <td>{value}</td>
      <td>{sign}</td>
    </>
    )
  }

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = 100 * good / all
  if (all === 0) {
    return (
      <div>No feedbabck given</div>
    )
  }
  return (
    <table>
      <tbody>
        <tr><StatisticLine text="good" value={good} /></tr>
        <tr><StatisticLine text="neutral" value={neutral} /></tr>
        <tr><StatisticLine text="bad" value={bad} /></tr>
        <tr><StatisticLine text="all" value={all} /></tr>
        <tr><StatisticLine text="average" value={average} /></tr>
        <tr><StatisticLine text="positive" value={positive} sign="%" /></tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
  }

  const clickNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }

  const clickBad = () => {
    const updateBad= bad + 1
    setBad(updateBad)
  }

  return (
    <>
    <div>
      <h1>give feedback</h1>
      <Button handleClick={clickGood} text='good'/>
      <Button handleClick={clickNeutral} text='neutral'/>
      <Button handleClick={clickBad} text='bad'/>

      <h1>statistics</h1>
    </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
    )
}

export default App