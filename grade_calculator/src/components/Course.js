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
        <div className="course">
            <h2>{props.name}<button className="delete" onClick={deleteHandler}>x</button><button className="minimize" onClick={minimizeHandler}>-</button><span className="grade">XX.XX</span></h2>
            <div className="listBody"></div>
            <button className="add" onClick={addAssignment}>+</button>
        </div>
    );
}

export default Course;