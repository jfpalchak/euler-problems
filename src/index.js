//import './css/styles.css';


export function solveMultiples(num) {
  // return num1 % num2;
  
  const three = 3;
  const five = 5;

  let num1Array = 0;
  for (let i = 1; i <= num; i++) {
    if (i % three === 0) {
      num1Array += i;
    } else if (i % five === 0) {
      num1Array += i;
    }
  }
  return num1Array;
}

