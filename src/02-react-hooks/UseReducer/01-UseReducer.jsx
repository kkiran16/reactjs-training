import * as React from "react";

// 01 - Simple Example for useReducer
/* function counterReducer(prevState, newState) {
  return newState;
}

function Counter({ initialCount = 0 }) {
  //   const [count, setCount] = React.useState(initialCount);
  const [count, setCount] = React.useReducer(counterReducer, initialCount);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        {count}
      </button>
    </>
  );
}

function App() {
  return <Counter />;
} */

// 02 Another Simple example for a text field
/* function nameReducer(previousName, newName) {
  return newName;
}

const initialNameValue = "Joe";

function NameInput() {
  const [name, setName] = React.useReducer(nameReducer, initialNameValue);

  const handleChange = (event) => setName(event.target.value);
  return (
    <>
      <label>
        Name: <input defaultValue={name} onChange={handleChange} />
      </label>
      <div>You typed: {name}</div>
    </>
  );
}

function App() {
  return <NameInput />;
} */

// 03 - Counter Example for useReducer with Object
/* function counterReducer(state, newState) {
  return { ...state, ...newState };
}

function Counter({ initialCount = 0 }) {
  const [state, setState] = React.useReducer(counterReducer, {
    count: initialCount,
  });

  function handleClick() {
    setState({ count: state.count + 1 });
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        {state.count}
      </button>
    </>
  );
}

function App() {
  return <Counter />;
} */

//04 - useReducer - passing function to the dispatcher
//Trying to replicate setState taking a function and an object.
/* function counterReducer(state, action) {
  //   return {
  //     ...state,
  //     ...action(state),
  //   };

  return {
    ...state,
    ...(typeof action === "function" ? action(state) : action),
  };
}

function Counter({ initialCount = 0 }) {
  const [state, setState] = React.useReducer(counterReducer, {
    count: initialCount,
  });

  function handleClick() {
    //   setState((currentState) => ({ count: currentState.count + 1 }));
    setState({ count: state.count + 1 });
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        {state.count}
      </button>
    </>
  );
}

function App() {
  return <Counter />;
} */

// 05 useReducer - with a dispatch style i.e. having Switch statements.
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      throw new Error(`Action Type not supported`);
  }
}

function Counter({ initialCount = 0 }) {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: initialCount,
  });

  function handleClick() {
    dispatch({ type: "INCREMENT" });
  }

  // Add decrement as wel and explain
  return (
    <>
      <button type="button" onClick={handleClick}>
        {state.count}
      </button>
    </>
  );
}

function App() {
  return <Counter />;
}

export default App;
