import { useState } from "react";

function AddAssignmentModal(props) {
    return(
        <div className="backdrop">
            <div className="modal">
                <h2>Add Assignment<button className="delete" onClick={props.onClick}>x</button></h2>

                <label HTMLfor="name">Assignment Name</label>
                <input type="text" required id="name"></input>

                <label HTMLfor="grade">Grade</label>
                <input type="text" required id="grade"></input>

                <button>Add Assignment</button>
            </div>
        </div>
    );
}

export default AddAssignmentModal;