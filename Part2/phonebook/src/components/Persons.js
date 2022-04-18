import React from 'react'

const nameStyle ={
  margin: '5px',
  fontWeight: 'bold'
}

const phoneStyle ={
  margin: '5px'
}

const divStyle = {
  margin: '20px'
}

const buttonStyle = {
  marginTop: '10px'
}


const Person = ({ person, removePersonid}) =>
  <div style = {divStyle}>
    <p style={nameStyle}>{person.name} </p> <p style = {phoneStyle}> {person.number} <br/> <button style={buttonStyle} className='deleteBtn' onClick={removePersonid}>Delete</button> </p>
  </div>
  
export default Person;

