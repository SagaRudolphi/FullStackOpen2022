import {useState} from 'react'
import Person from './components/Persons'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    
    event.preventDefault()
    
    console.log('submit clicked: ', event.target)
    console.log('does exist: ', persons.some(person => person.name === newName))
    
    const personObject = {
      name: newName
    }

    persons.some(person => person.name === newName)
      ? window.alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat(personObject))
        setNewName('')
  }


  const handleAddPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleAddPerson} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default App