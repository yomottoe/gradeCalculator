import { useState } from "react";

function AddCourseModal(props) {
    return(
        <div className="modal">
            <h2>Add Course</h2><button className="delete" onClick={props.onClick}>x</button>

            <button>Add Course</button>
        </div>
    );
}

export default AddCourseModal;