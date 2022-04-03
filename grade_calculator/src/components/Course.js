import { useState } from "react"; 
import AddAssignmentModal from "./AddAssignmentModal";

function Course(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    /**
     * Adds an assignment under the current course. Is called when the app detects user input in the "Add Assignment" modal
     */
    function addAssignment(data) {
        // somehow find a way to create a new assignment under the parent course
    }

    /**
     * Deletes the current course from the list of courses. Prompts a modal to confirm the user wants to delete.
     */
    function deleteHandler() {
        console.log("DEBUG: " + props.name + " delete button was pressed.");
    }

    /**
     * Minimizes the current course in the list of courses.
     */
    function minimizeHandler() {
        console.log("DEBUG: " + props.name + " minimize button was pressed.");
    }

    /**
     * Opens the modal to add an assignment, prompts the user for information about the new assignment.
     */
    function openModal() {
        console.log("DEBUG: " + props.name + " attempted to add another assignment.");
        setModalIsOpen(true);
    }

    /**
     * Closes the modal to add an assignment. Occurs when the exit button is pressed.
     */
    function closeModal() {
        console.log("DEBUG: " + props.name + " is closing the add assignment modal.");
        setModalIsOpen(false);
    }

    return(
        <div className="course">
            <h2>{props.name}<button className="delete" onClick={deleteHandler}>x</button><button className="minimize" onClick={minimizeHandler}>-</button><span className="grade">XX.XX</span></h2>
            <div className="listBody"></div>
            <button className="add" onClick={openModal}>+</button>
            {modalIsOpen && <AddAssignmentModal onClick={closeModal} onAdd={addAssignment}/>}
        </div>
    );
}

export default Course;