import { useState } from "react";

function AddCourseModal(props) {
    return(
        <div className="backdrop">
            <div className="modal">
                <h2>Add Course<button className="delete" onClick={props.onClick}>x</button></h2>

                <label HTMLfor="name">Course Name</label>
                <input type="text" required id="name"></input>

                <button>Add Course</button>
            </div>
        </div>
    );
}

export default AddCourseModal;