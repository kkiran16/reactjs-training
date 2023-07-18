import * as React from "react";

function Form() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(30);

  function handleNameChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function handleAgeChange(e) {
    console.log(e.target.value);
    setAge(age + 1);
  }
  return (
    <>
      <label htmlFor="username">First Name :</label>{" "}
      <input type="text" id="username" onChange={handleNameChange} />
      <div>
        <button type="button" onClick={handleAgeChange}>
          Increment Age
        </button>
      </div>
      <div>
        Hello {name}. your age is {age}
      </div>
    </>
  );
}

function App() {
  return <Form />;
}

export default App;

// Explain a simple login form having different actions
// 1. User Name change
// 2. Password change
// 3. Error Message-User Name or Password incorrect
// 4. Loading

// https://codesandbox.io/s/t7jwxq?file=/App.js&utm_medium=sandpack
