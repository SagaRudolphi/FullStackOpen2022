
import { useState } from 'react'

const HighestVotes = (props) => {

  //Create an array of the object
  const votes = Object.values(props.allVotes)
  console.log('values', votes)

  //Get the highest number in the array
  const mostVotes = Math.max(...votes)
  console.log('max', mostVotes)

  //Get the index of the highest number in the array
  const mostVotesIndex = votes.indexOf(mostVotes)
  console.log('index of: ', mostVotesIndex)

  //Get the anecdote with the most votes based on the index of highest number in the votes array
  const bestAnecdote = props.anecdotes[mostVotesIndex]

  //Display that no anecdotes has any votes if that's the case, otherwise the anectode and number of votes it has is displayed. 
  if (mostVotes === 0) {
    return (
      <div>
        <h1>Anecdote with most votes:</h1>
        <p>No votes yet!</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote with most votes:</h1>
      <p>{bestAnecdote}</p>
      <p>has {mostVotes} votes</p>
    </div>
  )
}

const RandomButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Next anecdote</button>
  )
}

const VoteBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Vote for this anecdote</button>
  )
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

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))

  const randomAnecdote = () => {

    //Math.random() reutrns a float between 0-1. We're mutlipling this with 7, so 6 will be a possible outcome (index in anecdote array are between 0-6). This because Math.floor() rounds a float down to an integer. (0.99... * 7 = 6.99... => 6)
    const randomnumber = Math.floor(Math.random() * 7)
    console.log('random number: ', randomnumber)

    setSelected(randomnumber)
  }

  const voteAnecdote = () => {
    const allVotes = { ...votes }
    allVotes[selected] += 1
    setVotes(allVotes)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day:</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <div>
          <VoteBtn handleClick={() => voteAnecdote()} />
          <RandomButton handleClick={() => randomAnecdote()} />
        </div>
      </div>
      <HighestVotes allVotes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App