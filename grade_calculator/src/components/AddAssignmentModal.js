import { useState } from "react";

function AddAssignmentModal(props) {
    return(
        <div className="modal">
            <h2>Add Assignment</h2><button className="delete" onClick={props.onClick}>x</button>

            <button>Add Assignment</button>
        </div>
    );
}

export default AddAssignmentModal;