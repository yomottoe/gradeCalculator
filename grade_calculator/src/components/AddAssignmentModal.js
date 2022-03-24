import { useState } from "react";

function AddAssignmentModal(props) {
    return(
        <div className="backdrop">
            <div className="modal">
                <h2>Add Assignment<button className="delete" onClick={props.onClick}>x</button></h2>

                <button>Add Assignment</button>
            </div>
        </div>
    );
}

export default AddAssignmentModal;