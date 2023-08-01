import * as React from "react";

import "./styles.css";
/* 
// 01. Lifting State
// function Child1() {
//   const [name, setName] = React.useState("John");
//   return (
//     <>
//       <div>I am Child 1</div>
//       <div>Hello {name}</div>
//     </>
//   );
// }
function Child1({ name }) {
  return (
    <>
      <div>I am Child 1</div>
      <div>Hello {name}</div>
    </>
  );
}
function Child2({ name }) {
  return (
    <>
      <div>I am Child 2</div>
      <div>Hello {name}</div>
    </>
  );
}
function App() {
  const [name, setName] = React.useState("John");
  return (
    <>
      <Child1 name={name} />
      <Child2 name={name} />
    </>
  );
}

export default App;
 */

/* // 02. Problem Statement - Prop Drilling
// First Explain without context and by passing props
function Child1({ name }) {
  return (
    <div className="box">
      <div>Hello, I am child 1 - You can Pass Data to me</div>
      <Child2 name={name} />
    </div>
  );
}
function Child2({ name }) {
  return (
    <div className="box">
      <div>Hello, I am child 2 - You can Pass Data to me</div>
      <Child3 name={name} />
    </div>
  );
}
function Child3({ name }) {
  return (
    <div className="box">
      <div>Hello, I am child 3 - You can Pass Data to me</div>
      <Child4 name={name} />
    </div>
  );
}
function Child4({ name }) {
  return (
    <div className="box">
      <div>Hello, I am child 4</div>
      <div>Hello, {name}</div>
    </div>
  );
}
function App() {
  const [name, setName] = React.useState("John");
  return (
    <div className="box" style={{ width: "50vw" }}>
      Hello I am parent - I have data to share
      <Child1 name={name} />
    </div>
  );
}

export default App; */
