import React from 'react'


const Person = ({ person }) => <p>{person.name}, {person.number}</p>

const Persons = ({ persons }) => {
  
    if (persons.length !== 0){
        console.log('lots of people', persons)
            return (persons.map(person =>
            <Person key={person.name} person={person} />))
    }
    else
    {
        console.log('no people')
    }
    
}
   

export default Persons;

