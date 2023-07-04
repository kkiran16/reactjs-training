import { useState, useEffect } from "react";
import { fetchBio } from "./api.js";

function Page() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    // let flag = false;
    setBio(null);
    fetchBio(person).then((result) => {
      /* if (!flag) {
        setBio(result);
    } */
      setBio(result);
    });

    /* return () => {
      flag = true;
    }; */
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}

function App() {
  return <Page />;
}

export default App;
