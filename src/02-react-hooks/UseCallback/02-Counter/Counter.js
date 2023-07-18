import * as React from "react";
// 1. Explain child renders everytime a state, props or parent component renders.
// 2. Explain without React.memo how the child renders
// 3. Explain with Memo how it stops unnecessary rendering.
// 4. Now, pass a addTodo method and show  the child is rendering even wrapping it around React.memo
// 5. Now, include useCallback and show how it optimizes
const Child = React.memo(({ todos = [], addTodo }) => {
  console.log("I am rendering");

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
  //   return <>{todos?.map((todo) => todo.name)}</>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([
    { id: 1, name: "reading books" },
    { id: 2, name: "playing games" },
    { id: 3, name: "watching TV" },
  ]);

  /* const addTodo = () => {
    setTodos((todos) => [
      ...todos,
      { id: Math.floor(Math.random() * 1000), name: "New Todo" },
    ]);
  }; */
  const addTodo = React.useCallback(() => {
    setTodos((todos) => [
      ...todos,
      { id: Math.floor(Math.random() * 1000), name: "New Todo" },
    ]);
  }, []);

  function handleCounter() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <button type="button" onClick={handleCounter}>
        {count}
      </button>

      <Child todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
