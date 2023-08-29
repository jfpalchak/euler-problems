//import './css/styles.css';


export function solveMultiples(num) {
  // return num1 % num2;
  
  const three = 3;
  const five = 5;

  const num1Array = [];
  for (let i = 1; i <= num; i++) {
    if (i % three === 0) {
      num1Array.push(i);
    } else if (i % five === 0) {
      num1Array.push(i);
    }
  }
  return num1Array;
}

