import { useState } from 'react'


const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>)

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad
  const average = all/3
  const positive = 100*good/all
  if (all === 0) {
    return(
      <div>No feedbabck given</div>
    )
  }
  return(
    <><div>good {good} </div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {all}</div>
    <div>average {average}</div>
    <div>positive {positive} %</div>
    </>
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
    <div>
      <h2>give feedback</h2>
      <Button handleClick={clickGood} text='good'/>
      <Button handleClick={clickNeutral} text='neutral'/>
      <Button handleClick={clickBad} text='bad'/>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App