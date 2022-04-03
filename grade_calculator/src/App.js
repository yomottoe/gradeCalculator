import Course from "./components/Course";
import { useState } from "react";
import AddCourseModal from "./components/AddCourseModal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /**
   * Adds a new course under the course listing in the app.
   */
  function addCourse(data) {
    
    // somehow find a way to add another course under the course list
  }

  /**
   * Opens the modal to prompt the user for information about a new course to be added.
   */
  function openModal() {
    console.log("DEBUG: adding course...")
    setModalIsOpen(true);
  }

  /**
   * Closes the modal that is used to prompt the user for a new course. Occurs when the exit button on the modal is pressed
   */
  function closeModal() {
    console.log("DEBUG: closing course add window");
    setModalIsOpen(false);
  }

  return (
    <div>
      <h1>This is one-page React JS web application.</h1>
      <p>[Insert here a brief description of the application and how to use it, maybe turn this into something that can be hidden on the page]</p>
      <div className="listBody">
        <button className="add" onClick={openModal}>+</button>
        {modalIsOpen && <AddCourseModal onClick={closeModal} onAdd={addCourse}/>}
      </div>
    </div>
  );
}

export default App;
