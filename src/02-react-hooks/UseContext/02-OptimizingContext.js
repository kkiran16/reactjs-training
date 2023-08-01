import * as React from "react";

import "./styles.css";

// 01.Problem Statement : Rendered unnecessary
const AppContext = React.createContext();

// function Child() {
//   const { name, login } = React.useContext(AppContext);
//   console.log("I am rendered");
//   return (
//     <div className="box">
//       <div>Hello, I am child</div>
//       <div>Hello, {name}</div>
//     </div>
//   );
// }

const Child = React.memo(() => {
  const { name, login } = React.useContext(AppContext);
  console.log("I am rendered");
  return (
    <div className="box">
      <div>Hello, I am child</div>
      <div>Hello, {name}</div>
    </div>
  );
});

function App() {
  const [counter, setCounter] = React.useState(0);
  const [name, setName] = React.useState("John");

  //   function login() {
  //     console.log("I will Login");
  //   }

  //   const value = { name, login };

  const login = React.useCallback(() => {
    console.log("I will login");
  }, []);

  const value = React.useMemo(() => ({ name, login }), [name, login]);

  return (
    <div className="box">
      <div>Hello, I am Parent..!!</div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        {counter}
      </button>
      <AppContext.Provider value={value}>
        <Child />
      </AppContext.Provider>
    </div>
  );
}

export default App;
