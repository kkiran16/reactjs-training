import * as React from "react";

import "./styles.css";

//01. Component that is deep inside needs data
/* const NameContext = React.createContext(null);

function Child1({ children }) {
  return (
    <div className="box">
      <div>I am Child 1- Please don't pass it to me</div>
      {children}
    </div>
  );
}

function Child2({ children }) {
  // return children;
  return (
    <div className="box">
      <div>I am Child 2 - Please don't pass it to me</div>
      {children}
    </div>
  );
}

function Child3({ children }) {
  // return children;
  return (
    <div className="box">
      <div>I am Child 3 - Please don't pass it to me</div>
      {children}
    </div>
  );
}

function Child4() {
  const name = React.useContext(NameContext);
  return (
    <div className="box">
      <div>I am Child 4 - Need Data from Parent</div>
      <div>Hello, {name}</div>
    </div>
  );
}

function App() {
  const [name, setName] = React.useState("John");
  return (
    <div className="box" style={{ width: "50vw" }}>
      <div>Hello, I am Parent - I have data to share</div>
      <NameContext.Provider value={name}>
        <Child1>
          <Child2>
            <Child3>
              <Child4></Child4>
            </Child3>
          </Child2>
        </Child1>
      </NameContext.Provider>
    </div>
  );
}

export default App; */

// 02. Component deep inside should update the data now.
const NameContext = React.createContext(null);

function Child1({ children }) {
  return (
    <div className="box">
      <div>I am Child 1- Please don't pass it to me</div>
      {children}
    </div>
  );
}

function Child2({ children }) {
  // return children;
  return (
    <div className="box">
      <div>I am Child 2 - Please don't pass it to me</div>
      {children}
    </div>
  );
}

function Child3({ children }) {
  // return children;
  return (
    <div className="box">
      <div>I am Child 3 - Please don't pass it to me</div>
      {children}
    </div>
  );
}

function Child4() {
  const { name, setName } = React.useContext(NameContext);

  function handleClick() {
    setName("Wick");
  }
  return (
    <div className="box">
      <div>I am Child 4 - Need Data from Parent</div>
      <div>Hello, {name}</div>
      <button onClick={handleClick}>Update Context</button>
    </div>
  );
}

function App() {
  const [name, setName] = React.useState("John");
  return (
    <div className="box" style={{ width: "50vw" }}>
      <div>Hello, I am Parent - I have data to share</div>
      <NameContext.Provider value={{ name, setName }}>
        <Child1>
          <Child2>
            <Child3>
              <Child4></Child4>
            </Child3>
          </Child2>
        </Child1>
      </NameContext.Provider>
    </div>
  );
}

export default App;
