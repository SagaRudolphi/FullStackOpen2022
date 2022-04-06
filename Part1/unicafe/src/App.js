import {useState} from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p> 
      <p>Avarage: {(props.good - props.bad)/props.all}</p> 
      <p>Percentage: {(props.good / props.all) * 100} % </p>
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
 

  const handleGoodClicks = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  
  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClicks = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    console.log('Good: ', good, ' Neutral: ', neutral, ' Bad: ', bad, ' All: ', all),
    <div>
      <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClicks}>Good</button>
      <button onClick={handleNeutralClicks}>Neutral</button>
      <button onClick={handleBadClicks}>Bad</button>
    </div>
    <Statistics bad = {bad} good = {good} neutral = {neutral} all = {all} />
    </div>
    
  );
}

export default App;
