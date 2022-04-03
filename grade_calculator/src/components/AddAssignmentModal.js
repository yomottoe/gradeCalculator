import { useState } from "react";
import { useRef } from "react";

function AddAssignmentModal(props) {
    const assignmentNameRef = useRef();
    // The method of choosing a grade for an assignment has not been determined. The prompt in the form is just a placeholder.
    const assignmentGradeRef = useRef();

    function submitForm(event) {
        event.preventDefault();
        console.log("DEBUG: Submitting form...");

        
    }

    return(
        <div className="backdrop">
            <div className="modal">
                <h2>Add Assignment<button className="delete" onClick={props.onClick}>x</button></h2>

                <form onSubmit={submitForm}>
                    <div>
                        <label HTMLfor="name">Assignment Name</label>
                        <input type="text" required id="name"></input>
                    </div>
                    <div>
                        <label HTMLfor="grade">Grade</label>
                        <input type="text" required id="grade"></input>
                    </div>
                    <button>Add Assignment</button>
                </form>

            </div>
        </div>
    );
}

export default AddAssignmentModal;