import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  ]
  const [points, setPoints] = useState(new Uint8Array(7))
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState('')
  const [mostVotesAmount, setMostVotesAmount] = useState(0)

  const nextAnecdote = () => {
    const newNumber = Math.floor(Math.random() * 7)
    setSelected(newNumber)
  }
  const vote = () => {
    const newTable = [...points]
    newTable[selected] += 1
    setPoints(newTable)

    const largest = Math.max.apply(null, newTable)
    const index = newTable.indexOf(largest)
    setMostVotes(anecdotes[index])
    setMostVotesAmount(largest)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <MostVotedAnecdote mostVotes={mostVotes} mostVotesAmount={mostVotesAmount} />
    </div>
  )
}

const MostVotedAnecdote = ({ mostVotes, mostVotesAmount }) => {
  if (mostVotesAmount !== 0) {
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <div>{mostVotes}</div>
        <div>has {mostVotesAmount} votes</div>
      </div>
    )
  }
  return <div></div>
}

export default App
