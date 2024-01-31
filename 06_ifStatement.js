var a=20;  
if(a>10){  
console.log("value of a is greater than 10");  
}  
let array =[23,2,232,323,2345,433,24,454,34,32215,5,6,7,78];
// if(true){
//     for (let i = 0; i <5; i++) {
//         const element = i*"*"
//        // console.log(array.indexOf(element));
//        console.log(element);
//     }
// }
// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { 
//   for(let j = 0; j < n; j++) { 
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

let n = 5;
let string = "";

for(let i = 0; i <=n; i++) { 
  for(let j = 0; j <=n; j++) {
    if(i === 0 || i === n || i==j ||i+j==n) {
      string += "*";
    }
    else {
      if(j === 0 || j === n) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  
  string += "\n";
}
console.log(string);
