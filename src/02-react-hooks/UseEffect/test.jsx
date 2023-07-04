import React, { useEffect, useState } from "react";
import { fetchBio } from "./api";

function Page() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState();

  useEffect(() => {
    setBio(null);
    fetchBio(person).then((response) => setBio(response));
  }, [person]);

  return (
    <>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option>Alice</option>
        <option>Bob</option>
        <option>John</option>
      </select>
      <hr></hr>
      <div> {bio ?? "Loading ...!"}</div>
    </>
  );
}

function App() {
  return <Page />;
}

export default App;
