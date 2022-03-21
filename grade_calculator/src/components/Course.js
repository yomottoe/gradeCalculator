import Assignment from "./Assignment";

function Course(props) {

    function deleteHandler() {
        console.log("DEBUG: " + props.name + " delete button was pressed.")
    }

    function minimizeHandler() {
        console.log("DEBUG: " + props.name + " minimize button was pressed.")
    }

    function addAssignment() {
        console.log("DEBUG: " + props.name + " attempted to add another assignment.")
    }

    return(
        <div class="course">
            <h2>{props.name}<button class="delete" onClick={deleteHandler}>x</button><button class="minimize" onClick={minimizeHandler}>-</button><span class="grade">XX.XX</span></h2>
            <div class="listBody"></div>
            <button class="add" onClick={addAssignment}>+</button>
        </div>
    );
}

export default Course;