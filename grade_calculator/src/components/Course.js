import { useState } from "react"; 
import AddAssignmentModal from "./AddAssignmentModal";

function Course(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        console.log("DEBUG: " + props.name + " delete button was pressed.");
    }

    function minimizeHandler() {
        console.log("DEBUG: " + props.name + " minimize button was pressed.");
    }

    function addAssignment() {
        console.log("DEBUG: " + props.name + " attempted to add another assignment.");
        setModalIsOpen(true);
    }

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