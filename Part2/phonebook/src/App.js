import {useState} from 'react'
import Persons from './components/Persons'
import AddForm from './components/AddForm'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    
    event.preventDefault()
    
    console.log('submit clicked: ', event.target)
    console.log('does exist: ', persons.some(person => person.name === newName))


    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.some(person => person.name === newName)
      ? window.alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
  }

  const handleNewPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const searchPersons = newFilter === ''
  ? persons 
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search: <Search newFilter={newFilter} handleNewFilter={handleNewFilter} />
      </div>
      <h2>Add a new</h2>
      <div>
        <AddForm addPerson={addPerson} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      </div>
      <h2>Numbers</h2>
      <div>
        <Persons persons={searchPersons}/>
      </div>
    </div>
  )
}

export default App