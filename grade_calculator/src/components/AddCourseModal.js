import { useState } from "react";
import { useRef } from "react";

function AddCourseModal(props) {
    const courseNameRef = useRef();

    function submitForm(event) {
        event.preventDefault();
        console.log("DEBUG: Submitting form....");
    }

    return(
        <div className="backdrop">
            <div className="modal">
                <h2>Add Course<button className="delete" onClick={props.onClick}>x</button></h2>

                <form onSubmit={submitForm}>
                    <div>
                        <label HTMLfor="name">Course Name</label>
                        <input type="text" required id="name"></input>
                    </div>
                    <button>Add Course</button>
                </form>

            </div>
        </div>
    );
}

export default AddCourseModal;