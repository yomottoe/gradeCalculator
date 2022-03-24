import { useState } from "react";

function AddAssignmentModal(props) {
    return(
        <div className="modal">
            <h2>Add Assignment<button className="delete" onClick={props.onClick}>x</button></h2>

            <button>Add Assignment</button>
        </div>
    );
}

export default AddAssignmentModal;