import { useState } from "react";

function AddCourseModal(props) {
    return(
        <div className="backdrop">
            <div className="modal">
                <h2>Add Course<button className="delete" onClick={props.onClick}>x</button></h2>

                <button>Add Course</button>
            </div>
        </div>
    );
}

export default AddCourseModal;