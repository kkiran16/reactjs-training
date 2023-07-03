import * as React from "react";

// 01 Store in Localstorage as user updates + Retrieve data from local storage when application loads
/* function Greeting({ initialValue }) {
  //   const [name, setName] = React.useState(initialValue);
  const [name, setName] = React.useState(
    window.localStorage.getItem("name") || initialValue
  );

  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  });

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="username">User Name : </label>
      <input type="text" value={name} id="username" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
} 

function App() {
  return <Greeting initialValue="JPMC" />;
}*/

// 02 Store into localStorage only when the storing data is modified but not on every renderinf of the component.
/* function Greeting({ initialValue }) {
  const [name, setName] = React.useState(
    window.localStorage.getItem("name") || initialValue
  );

  console.log("In Gretting -> Rendering");

  //   React.useEffect(() => {
  //     console.log("In Gretting -> useEffect");
  //     window.localStorage.setItem("name", name);
  //   });
  React.useEffect(() => {
    console.log("In Gretting -> useEffect");
    window.localStorage.setItem("name", name);
  }, [name]); //Object.is

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="username">User Name : </label>
      <input type="text" value={name} id="username" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <div>Increment Count : {count}</div>
      <Greeting initialValue="JPMC" />;
    </>
  );
} */

//03 Custom Hook - Without custom hook and redundant stateful logic
/* function FirstName({ initialValue }) {
  const [name, setName] = React.useState(
    window.localStorage.getItem("firstname") || initialValue
  );

  React.useEffect(() => {
    window.localStorage.setItem("firstname", name);
  }, [name]); //Object.is

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="firstname">User Name : </label>
      <input type="text" value={name} id="firstname" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
}

function LastName({ initialValue }) {
  const [name, setName] = React.useState(
    window.localStorage.getItem("lastname") || initialValue
  );

  React.useEffect(() => {
    window.localStorage.setItem("lastname", name);
  }, [name]); //Object.is

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="lastname">User Name : </label>
      <input type="text" value={name} id="lastname" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <div>Increment Count : {count}</div>
      <FirstName initialValue="Sachin" />
      <LastName initialValue="Tendulkar" />
    </>
  );
} */

//04 Custom Hook - With custom hook for stateful logic
function useSyncLocalStorage(key, defaultValue) {
  const [state, setState] = React.useState(
    window.localStorage.getItem(key) || defaultValue
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]); //Object.is

  return [state, setState];
}

function FirstName({ initialValue }) {
  const [name, setName] = useSyncLocalStorage("firstname", initialValue);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="firstname">User Name : </label>
      <input type="text" value={name} id="firstname" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
}

function LastName({ initialValue }) {
  const [name, setName] = useSyncLocalStorage("lastname", initialValue);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="lastname">User Name : </label>
      <input type="text" value={name} id="lastname" onChange={handleChange} />
      <h4>Hello {name}</h4>
    </div>
  );
}

function App() {
  return (
    <>
      <FirstName initialValue="Sachin" />
      <LastName initialValue="Tendulkar" />
    </>
  );
}

export default App;
