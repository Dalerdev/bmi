// function greeting(name, age) {
//   console.log(`hello ${name}, you are ${age}years old`);
// }
// greeting("daler", 20);
// greeting("daler", 30);
// greeting("daler", 40);
// greeting("daler", 50);

// function bmi(mass, height) {
//   let bmi = mass / height ** 2;
//   if (bmi < 18.5) {
//     console.log("underweight");
//   } else if (bmi >= 18.5 && bmi < 25) {
//     console.log("healthy");
//   } else if (bmi >= 25.0 && bmi < 30) {
//     console.log("overweight");
//   } else if (bmi >= 30) {
//     console.log("obese");
//   }
// }

// bmi(60, 1.6);

// function add(a, b) {
//   console.log(a + b);
//   console.log("before return");
//   return "add";
// }

// add(12, 50);







// let abc = "hello";
// console.log(abc);
// console.log(add(3, 80));

// function isOdd(number) {
//   let remained = number % 2;
//   if (remained === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isOdd(4));

// function isEven(number) {
//     let remained = number % 2;
//     if (remained === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// function isOddOrEven() {
//   let inputValue = document.getElementById("numbertype").value;
//   console.log(inputValue);
//   if (inputValue !== "") {
//     if (isEven(inputValue)) {
//       document.getElementById("result").innerHTML = "it is Even";
//     } else {
//       document.getElementById("result").innerHTML = "it is Odd";
//     }
//   }
// }

function BMI(){
    var w=document.getElementById('w').value;
    var h=document.getElementById('h').value;
    var bmi=w/(h/100*h/100);
    document.getElementById("result").innerHTML=""+bmi ;
    }