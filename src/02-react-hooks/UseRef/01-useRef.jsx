import * as React from "react";

//01 - Basic Usage and also try to render ref value.

/* function App() {
  const ref = React.useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert("Clicked " + ref.current + " times..!!");
  }
  return (
    <>
      <button type="button" onClick={handleClick}>
        Click Me..!!
      </button>
    </>
  );
}

export default App; */

//02 - Timer Example - Without Ref
// First on Browser snippet
/* function Timer() {
  const [time, setTime] = React.useState("");
  React.useEffect(() => {
    setInterval(() => {
      const now = Date.now();

      setTime(new Date(now).toString());
    }, 1000);
  }, []);

  return <>Time : {time}</>;
}

function App() {
  return (
    <>
      <Timer />
    </>
  );
} */

//03 - Timer Example - with Ref
function Timer() {
  const [time, setTime] = React.useState("");
  const timerRef = React.useRef();

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      const now = Date.now();

      setTime(new Date(now).toString());
    }, 1000);

    setTimeout(() => {
      clearInterval(timerRef.current);
    }, 10000);
  }, []);

  return <>Time : {time}</>;
}

function App() {
  return (
    <>
      <Timer />
    </>
  );
}

export default App;
