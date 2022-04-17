import { useState, useEffect } from 'react'
import AddForm from './components/AddForm'
import Search from './components/Search'
import Person from './components/Persons'
import ErrorNotification from './components/ErrorNotification'
import NotificationSuccessful from './components/SuccessNotification'
import personService from './services/Contacts'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [successNotification, setSuccess] = useState(null)
  const [errorMessage, setError] = useState(null)

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
          personService.getAll().then(allContacts => { setPersons(allContacts)
            setSuccess(`${deletedPerson.name} was successfully deleted from the phonebook`)
            setTimeout(() => {
              setSuccess(null)
            }, 5000)
          })
        })
        .catch(error => {
          console.log('error!')
          setError(`Couldn't delete contact. ${deletedPerson.name} has already been deleted from the phonebook`)
          setTimeout(() => {
            setError(null)
          }, 5000)
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

    if (persons.some(person => person.name === newName)) {
      const oldPerson = persons.find(p => p.name === newName)

      if (window.confirm(`${newName} is already in the phonebook. Do you want to replace the old number with a new one?`)) {
        personService
          .update(oldPerson.id, personObject)
          .then(returnedPerson => {
            setSuccess(`${newName} was successfully updated`)
            setTimeout(() => {
              setSuccess(null)
            }, 5000)
            setPersons(persons.map(person => person.id !== oldPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          }
        )
        .catch(error => {
          console.log('error!')
          setError(`Failed to update contact. ${newName} has already been deleted from the phonebook`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })  
      }
    }
    else (
      personService
        .create(personObject)
        .then(returnedPerson =>
          setPersons(persons.concat(returnedPerson)),
          setSuccess(`${personObject.name} was successfully added to the phonebook`),
          setTimeout(() => {
            setSuccess(null)
          }, 5000),
          setNewName(''),
          setNewNumber('')
        )
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
      <NotificationSuccessful message={successNotification}/>
      <ErrorNotification message={errorMessage}/>
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