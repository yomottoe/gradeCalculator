import Assignment from "./Assignment";

function Course(props) {

    function deleteHandler() {
        console.log("DEBUG: " + props.name + " delete button was pressed.")
    }

    function minimizeHandler() {
        console.log("DEBUG: " + props.name + " minimize button was pressed.")
    }

    return(
        <div class="course">
            <h2>{props.name}<button class="delete" onClick={deleteHandler}>x</button><button class="minimize" onClick={minimizeHandler}>-</button><span class="grade">XX.XX</span></h2>
            <div class="listBody">
                <Assignment name="Another Test" />
            </div>
            <button class="add">+</button>
        </div>
    );
}

export default Course;