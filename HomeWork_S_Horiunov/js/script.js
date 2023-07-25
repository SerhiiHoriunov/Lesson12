//////////////////////// -1- //////////////////////////////////
//////////////// By setInterval ///////////////////
// function printNumbers(from, to) {
  
//   let timeMeter = setInterval(()=> {
//     alert(from);
//     if (from == to) {
//       clearInterval(timeMeter);
//     }
//     from++;
//   }, 1000);
// }

// printNumbers(2, 7);

////////////////// By nested setTimeout /////////////////////////////

// function printNumbers(from, to) {
//     let numeric = from;

//  setTimeout(function run() {
//     alert(numeric);
//     if (numeric < to) {
//         setTimeout(run, 1000);
//     }
//     numeric++;
//   }, 1000);
// }

// printNumbers(1, 5);

//////////////////////////////////// -2- /////////////////////////////////////////

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert("Виконалось через 3 секунди"));
