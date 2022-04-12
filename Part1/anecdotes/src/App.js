
import { useState } from 'react'


const HighestVotes = (props) => {
  const votes = Object.values(props.allVotes)
  console.log('values', votes)
  
  const mostVotes = Math.max(...votes)
  console.log('max', mostVotes)

  const mostVotesIndex = votes.indexOf(mostVotes)
  console.log('index of: ', mostVotesIndex)

  const bestAnecdote = props.anecdotes[mostVotesIndex]

  if (mostVotes === 0){
    return (
      <div> No votes yet! </div>
    )
  }
  return (
    <div>
      <p>{bestAnecdote}</p>
      <p>has {mostVotes} votes</p>
    </div>

  )
}

const RandomButton = (props) => {
    return(
      <button onClick={props.handleClick}>Next anecdote</button>
    )
}

const VoteBtn = (props) => {
  return (
    <button onClick={props.handleClick}>Vote for this anecdote</button>
  )
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1) + min);
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const votes = new Uint8Array(7)

  const [selected, setSelected] = useState(0)
  const [votesArr, setVotes] = useState(votes)
 

  const randomAnecdote = () => {
      const randomnumber = getRandomInt(0, 6)
      setSelected(randomnumber)
  }

  const voteAnecdote = () => {
    const allVotes = {...votesArr} 
    allVotes[selected] += 1
    setVotes(allVotes)
    
  }

 

  console.log(votesArr)

  

  return (
    <div>
      <h1>
        Anecdote of the day:
      </h1>
      <p>   {anecdotes[selected]} </p>
        This anecdote has {votesArr[selected]} votes
      <div>
        <VoteBtn handleClick={() => voteAnecdote()} />
        <RandomButton handleClick={() => randomAnecdote()} />
      </div>
      <div>


        <h1>Anecdote with most votes:</h1>
        <HighestVotes allVotes={votesArr} anecdotes={anecdotes} />
      </div>
    </div>
  )
}

export default App