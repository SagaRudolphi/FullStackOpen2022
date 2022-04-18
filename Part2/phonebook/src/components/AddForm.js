import React from "react";


const formStyle = {
    
    margin: '20px',
    textAlign: 'left' 
}

const inputStyle = {
    width: '20%',
    marginBottom: '5px',
    display: 'inline-block',

}

const addBtnStyle = {
    backgroundColor: 'green'
}


const AddForm = (props) => {
    return (
    <div >
        <form style={formStyle} className="addForm" onSubmit={props.addPerson}>
            <p>
                Name: <input style={inputStyle} value={props.newName} onChange={props.handleNewPerson} />
            </p>
            <p>
                Number: <input style={inputStyle} value={props.newNumber} onChange={props.handleNewNumber} />
            </p>
            <p>
                <button style={addBtnStyle} type="submit"> Add </button>
            </p>
        </form>
    </div>
    )
}

export default AddForm;