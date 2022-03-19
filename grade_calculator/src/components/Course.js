import Assignment from "./Assignment";

function Course() {
    return(
        <div>
            <h2>[Course Name Here]</h2><p class="grade">XX.XX</p>
            <div>
                <Assignment/>
            </div>
        </div>
    );
}

export default Course;