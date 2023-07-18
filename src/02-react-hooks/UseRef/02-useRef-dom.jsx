import * as React from "react";

function App() {
  const ref = React.useRef(null);

  //   console.log({
  //     height: ref.current?.offsetHeight,
  //     width: ref.current?.offsetWidth,
  //   });
  //   console.log(ref);

  React.useEffect(() => {
    console.log({
      height: ref.current.offsetHeight,
      width: ref.current.offsetWidth,
    });
  }, []);

  return (
    <>
      <div ref={ref} style={{ width: "100px", height: "100px" }}>
        Hell World
      </div>
    </>
  );
}

export default App;

// https://codesandbox.io/s/m73n0u?file=/App.js&utm_medium=sandpack
// https://codesandbox.io/s/32xjhx?file=/App.js&utm_medium=sandpack
