import React, { useState } from "react";

// 01 - Without Lifting State
/* function FirstName() {
  const [firstName, setFirstName] = useState("");
  return (
    <>
      <div>First Name Component</div>
      <br />
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <div>--------------------------------------------</div>
    </>
  );
}
function LastName() {
  const [lastName, setLastName] = useState("");
  return (
    <>
      <div>Last Name Component</div>
      <br />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
}

function DisplayMessage({ firstName, lastName }) {
  return (
    <>
      <br />
      <br />
      <div>
        Hello {firstName}, {lastName}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div>Lifting State</div>
      <hr></hr>
      <FirstName />
      <LastName />
      <DisplayMessage firstName={"John"} lastName={"George"} />
    </>
  );
} */

// 02 - By Lifting State
function FirstName({ firstName, setFirstName }) {
  return (
    <>
      <b>First Name Component</b>
      <br />
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <div>--------------------------------------------</div>
    </>
  );
}
function LastName({ lastName, setLastName }) {
  return (
    <>
      <b>Last Name Component</b>
      <br />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
}

function DisplayMessage({ firstName, lastName }) {
  return (
    <>
      <br />
      <br />
      <div>
        Hello {firstName}, {lastName}
      </div>
    </>
  );
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <div>Lifting State</div>
      <hr></hr>
      <FirstName firstName={firstName} setFirstName={setFirstName} />
      <LastName lastName={lastName} setLastName={setLastName} />
      <DisplayMessage firstName={firstName} lastName={lastName} />
    </>
  );
}

export default App;
