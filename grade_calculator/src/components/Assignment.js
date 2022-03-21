function Assignment(props) {

    function deleteHandler() {
        console.log("DEBUG: " + props.name + " delete button was pressed.")
    }

    function minimizeHandler() {
        console.log("DEBUG: " + props.name + " minimize button was pressed.")
    }

    return(
        <div class="assignment">
            <h3>{props.name}<button class="delete" onClick={deleteHandler}>x</button><button class="minimize" onClick={minimizeHandler}>-</button><span class="grade">XX/XX</span></h3>
            <p></p>
        </div>
    );
}

export default Assignment;