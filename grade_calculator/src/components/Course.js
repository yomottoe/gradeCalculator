import { useState } from "react"; 
import AddAssignmentModal from "./AddAssignmentModal";

function Course(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
     * Adds an assignment to the course. Prompts a modal for the user to enter information about the assignment.
     */
    function addAssignment() {
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
            <button className="add" onClick={addAssignment}>+</button>
            {modalIsOpen && <AddAssignmentModal onClick={closeModal}/>}
        </div>
    );
}

export default Course;