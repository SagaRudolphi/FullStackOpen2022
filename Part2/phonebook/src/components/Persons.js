import React from 'react'


const Person = ({person}) => <p>{person.name}, {person.number}</p>

const Persons = ({ persons }) => {
    console.log({ persons })
        return (persons.map(person =>
            <Person key={person.name} person={person} />))
}

export default Persons;

