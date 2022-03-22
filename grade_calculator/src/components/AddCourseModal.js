function AddCourseModal() {
    const [isModalOpen, setModalOpen ] = userState(false);

    function closeHandler () {
        console.log("DEBUG: modal closed.");
        setModalOpen(false);
    }

    return(
        <div className="modal">
            <h2>Add Course</h2><button className="delete" onClick={closeHandler}>x</button>


        </div>
    );
}