import { useState, useEffect } from 'react'
import axios from 'axios'
import AddForm from './components/AddForm'
import Search from './components/Search'
import Person from './components/Persons'
import personService from './services/Contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const removePersonOf = id => {
    console.log('you want to remove ', id)

    let deletedPerson = persons.find(p => p.id === id)

    if (window.confirm(`Do you really want to delete ${deletedPerson.name}?`)) {
      personService
        .remove(id)
        .then(response => {
          personService.getAll().then(allContacts => { setPersons(allContacts) })
        })
    }
  }

  const addPerson = (event) => {

    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    persons.some(person => person.name === newName)
      ? window.alert(`${newName} is already added to the phonebook`)
      : personService
        .create(personObject)
        .then(returnedPerson =>
          setPersons(persons.concat(returnedPerson)),
          setNewName(''),
          setNewFilter('')
        )
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
        {(persons.map(person =>
          <Person key={person.name} person={person} id={person.id} removePersonid={() => removePersonOf(person.id)} />))}
      </div>
    </div>
  )
}

export default App