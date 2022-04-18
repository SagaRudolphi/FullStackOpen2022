import React from "react";


const searchInputStyle ={
    margin: '20px'
  }
  
const Search = (props) => <p style={searchInputStyle}> Search: <input className='inputSearchFilter' value={props.newFilter} onChange={props.handleNewFilter}/> </p>

export default Search; 