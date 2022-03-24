import { useState } from "react";

function AddAssignmentModal(props) {
    function submitForm(event) {
        event.preventDefault();
        console.log("DEBUG: Submitting form...")

        
    }

    return(
        <div className="backdrop">
            <div className="modal">
                <h2>Add Assignment<button className="delete" onClick={props.onClick}>x</button></h2>

                <form onSubmit={submitForm}>
                    <label HTMLfor="name">Assignment Name</label>
                    <input type="text" required id="name"></input>

                    <label HTMLfor="grade">Grade</label>
                    <input type="text" required id="grade"></input>

                    <button>Add Assignment</button>
                </form>

            </div>
        </div>
    );
}

export default AddAssignmentModal;