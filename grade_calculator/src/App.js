import Course from "./components/Course";

function App() {
  return (
    <div>
      <h1>This is one-page React JS web application.</h1>
      <p>[Insert here a brief description of the application and how to use it, maybe turn this into something that can be hidden on the page]</p>
      <div class="listBody">
        <Course name="Testing"/>
        <button class="add">+</button>
      </div>
    </div>
  );
}

export default App;
