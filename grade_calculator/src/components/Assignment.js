function Assignment(props) {

    /**
     * Deletes an assignment from a course. Prompts a modal to confirm that the user wants to delete the assignment.
     */
    function deleteHandler() {
        console.log("DEBUG: " + props.name + " delete button was pressed.")
    }

    /**
     * Minimizes an assignment.
     */
    function minimizeHandler() {
        console.log("DEBUG: " + props.name + " minimize button was pressed.")
    }

    return(
        <div className="assignment">
            <h3>{props.name}<button className="delete" onClick={deleteHandler}>x</button><button className="minimize" onClick={minimizeHandler}>-</button><span className="grade">XX/XX</span></h3>
            <p></p>
        </div>
    );
}

export default Assignment;