import {useState} from 'react'


const Button = (props ) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button> )
}


const Statistics = ({good, neutral, bad}) => {

  const totalVotes = good + neutral + bad
  const avarageVotes = (good - bad) / totalVotes
  const positiveVotes = (good / totalVotes) * 100

  if (totalVotes === 0){
    return (
      <div> 
          No feedback given
      </div>
    )
  }
    return (

      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All:</td>
            <td>{totalVotes}</td>
          </tr>
          <tr>
            <td>Avarage:</td>
            <td>{avarageVotes}</td>
          </tr>
          <tr>
            <td>Positive:</td>
            <td>{positiveVotes} %</td>
          </tr>
        </tbody>
      </table>
    )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
 

  const handleGoodClicks = () => {
    setGood(good + 1)
   
  }
  
  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
 
  }

  const handleBadClicks = () => {
    setBad(bad + 1)
 
  }


  return (
    console.log('Good: ', good, ' Neutral: ', neutral, ' Bad: ', bad),
    <div>
      <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => handleGoodClicks()} text="Good"/>
      <Button handleClick={() => handleNeutralClicks()} text="Neutral"/>
      <Button handleClick={() => handleBadClicks()} text="Bad"/>
    </div>
    <h1>Statistics</h1>
    <Statistics bad = {bad} good = {good} neutral = {neutral}/>
    </div>
    
  );
}

export default App;
