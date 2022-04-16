import React from "react";

const AddForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                Name: <input value={props.newName} onChange={props.handleNewPerson} />
            </div>
            <div>
                Number: <input value={props.newNumber} onChange={props.handleNewNumber} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>

    )
}

export default AddForm;