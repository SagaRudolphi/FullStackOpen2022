import {useState} from 'react'


const Button = (props ) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button> )
}


const Statistics = (props) => {

  if (props.allVotes === 0){
    return (
      <div> 
          No feedback given
      </div>
    )
  }
    return (

        <table>
          <tr>
          <td>Good:</td>
          <td>{props.good}</td>
          </tr>
          <tr>
          <td>Neutral:</td>
          <td>{props.neutral}</td>
          </tr>
          <tr>
          <td>Bad:</td>
          <td>{props.bad}</td>
          </tr>
          <tr>
          <td>All:</td>
          <td>{props.allVotes}</td>
          </tr>
          <tr>
          <td>Avarage:</td>
          <td>{(props.good - props.bad)/props.allVotes}</td>
          </tr>
          <tr>
          <td>Avarage:</td>
          <td>{(props.good / props.allVotes) * 100} %</td>
          </tr>
          </table>
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
      <Button handleClick={() => handleGoodClicks()} text="Good"/>
      <Button handleClick={() => handleNeutralClicks()} text="Neutral"/>
      <Button handleClick={() => handleBadClicks()} text="Bad"/>
    </div>
    <h1>Statistics</h1>
    <Statistics bad = {bad} good = {good} neutral = {neutral} allVotes = {allVotes} />
    </div>
    
  );
}

export default App;
