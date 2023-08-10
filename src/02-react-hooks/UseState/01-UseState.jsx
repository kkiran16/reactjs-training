import * as React from "react";

// 01 Without useState
/* function Greeting() {
  let name = "";

  function handleChange(event) {
    console.log(event.target.value);
    name = event.target.value;
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}*/

// 02 useState + retrieving returned values
/* function Greeting() {
  //   const state = React.useState("");
  //   console.log({ state });

  //   const name = state[0];
  //   const setName = state[1];

  const [name, setName] = React.useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="username">User Name : </label>
      <input type="text" id="username" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
} */

// 03 showing Array Destructering
/* function Greeting({ initialValue }) {
  const [name, setName] = React.useState(initialValue);

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="username">User Name : </label>
      <input type="text" value={name} id="username" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
} */

// 04 Initialization - with expensive method
/* function Greeting({ initialValue = "" }) {
  function expensiveCompute() {
    console.log("I am Expensive");
    return "Expensive Returned";
  }

  const [name, setName] = React.useState(expensiveCompute() || initialValue);

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="username">User Name : </label>
      <input type="text" value={name} id="username" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
} */

// 05 Lazy Initialization - passing a method
/* function Greeting({ initialValue = "" }) {
  function expensiveCompute() {
    console.log("I am Expensive");
    return "Expensive Returned";
  }

  const [name, setName] = React.useState(
    () => expensiveCompute() || initialValue
  );

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <label htmlFor="username">User Name : </label>
      <input type="text" value={name} id="username" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
} */

// 06 Counter Example - Simple Increment
/* function Counter() {
  const [counter, setCounter] = React.useState(0);
  
  function handleClick() {
    setCounter(counter + 1);
    console.log({ counter });
  }
  return (
    <>
      <button type="button" onClick={handleClick}>
        Increment Once
      </button>
      <div>Counter : {counter}</div>
    </>
  );
} */

// 07 Counter Example - Increment with an updater function
/* function Counter() {
  const [counter, setCounter] = React.useState(0);

  function handleClick() {
    //  setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    // console.log({ counter });
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Increment Thrice
      </button>
      <div>Counter : {counter}</div>
    </>
  );
} */

// 08 Resetting State - Using Key
/* function Reset() {
  const [version, setVersion] = React.useState(0);

  function handleReset() {
    setVersion((v) => v + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [userName, setUserName] = React.useState("");

  function handleChange(event) {
    setUserName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="username">UserName : </label>
      <input
        type="text"
        id="username"
        value={userName}
        onChange={handleChange}
      />
      <div>Hello {userName}</div>
    </div>
  );
} */

// 09 Mutating an Object - explain about Object.is
function Greeting({ initialValue }) {
  const [name, setName] = React.useState({ message: "JPMC" });

  function handleChange(event) {
    console.log("In handleChange");

    // name.message = event.target.value;
    // setName(name);
    // Object.is problem

    setName({ ...name, message: event.target.value });
  }
  return (
    <div>
      <label htmlFor="username">User Name : </label>
      <input
        type="text"
        value={name.message}
        id="username"
        onChange={handleChange}
      />
      <h4>Hello {name.message}</h4>
    </div>
  );
}

function App() {
  // return <Greeting />;
  return <Greeting initialValue="JPMC" />;
  // return <Counter />;
  // return <Reset />;
}

export default App;
