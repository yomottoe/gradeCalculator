import Course from "./components/Course";
import { useState } from "react";
import AddCourseModal from "./components/AddCourseModal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function addCourse() {
    console.log("DEBUG: adding course...")
    setModalIsOpen(true);
  }

  function closeHandler() {
    console.log("DEBUG: closing course add window");
    setModalIsOpen(false);
  }

  return (
    <div>
      <h1>This is one-page React JS web application.</h1>
      <p>[Insert here a brief description of the application and how to use it, maybe turn this into something that can be hidden on the page]</p>
      <div className="listBody">
        <Course name="Testing"/>
        <button className="add" onClick={addCourse}>+</button>
        {modalIsOpen && <AddCourseModal onClick={closeHandler}/>}
      </div>
    </div>
  );
}

export default App;
