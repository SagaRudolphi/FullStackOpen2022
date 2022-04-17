import React from 'react'

const Person = ({ person, id, removePersonid}) =>
  <p>{person.name}, {person.number}, {id} <button onClick={removePersonid}>Delete</button></p>
  
export default Person;

