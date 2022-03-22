function AddAssignmentModal() {
    const [isModalOpen, setModalOpen ] = userState(false);

    function closeHandler () {
        console.log("DEBUG: modal closed.");
        // also consider clearing input fields in the modal when this button is clicked
        setModalOpen(false);
    }

    return(
        <div className="modal">
            <h2>Add Assignment</h2><button className="delete" onClick={closeHandler}>x</button>

            <button>Create Assignment</button>
        </div>
    );
}