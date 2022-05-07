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

    let deletedPerson = persons.find(person => person.id === id)

    if (window.confirm(`Do you really want to delete ${deletedPerson.name} ${deletedPerson.id}?`)) {
      personService
        .remove(id)
        .then(() => {
          personService
            .getAll()
            .then(allContacts => {
              setPersons(allContacts)
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
      number: newNumber
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
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setSuccess(`${personObject.name} was successfully added to the phonebook`)
          setTimeout(() => {
            setSuccess(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log(error.response.data)
          setError(`Failed to add person. Name must be more than 3 digits and number must be in correct format.`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
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
        <Search newFilter={newFilter} handleNewFilter={handleNewFilter} />
      </div>
      <h2>Add a new</h2>
        <AddForm addPerson={addPerson} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber} />    
      <h2>Numbers</h2>
      <div>
        {(persons.map(person =>
          <Person key={person.name} person={person} removePersonid={() => removePersonOf(person.id)} />))}
      </div>
    </div>
  )
}

export default App