import {useState} from 'react'

const Statistics = (props) => {

  if (props.allVotes === 0){
    return (
      <div> 
          <p>No feedback given</p> 
      </div>
    )
  }
    return (
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.allVotes}</p> 
        <p>Avarage: {(props.good - props.bad)/props.allVotes}</p> 
        <p>Percentage: {(props.good / props.allVotes) * 100} % </p>
      </div>
    )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAll] = useState(0)
 

  const handleGoodClicks = () => {
    setGood(good + 1)
    setAll(allVotes + 1)
  }
  
  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
    setAll(allVotes + 1)
  }

  const handleBadClicks = () => {
    setBad(bad + 1)
    setAll(allVotes + 1)
  }


  return (
    console.log('Good: ', good, ' Neutral: ', neutral, ' Bad: ', bad, ' All: ', allVotes),
    <div>
      <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClicks}>Good</button>
      <button onClick={handleNeutralClicks}>Neutral</button>
      <button onClick={handleBadClicks}>Bad</button>
    </div>
    <h1>Statistics</h1>
    <Statistics bad = {bad} good = {good} neutral = {neutral} allVotes = {allVotes} />
    </div>
    
  );
}

export default App;
