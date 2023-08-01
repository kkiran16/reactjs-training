// factory function
function sumFunctionFactory() {
  return (a, b) => a + b;
}

const function1 = sumFunctionFactory();
const function2 = sumFunctionFactory();

function1(2, 3);
// expected output: 5
function2(2, 3);
// expected output: 5

console.log(function1 === function2);
//false
