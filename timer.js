//Excercise 1
const timer = delay => {
    console.log('Hello after '+ delay + ' seconds');
};
setTimeout(timer, 4*1000, 4);
setTimeout(timer, 8*1000, 8);
// --------------------------------------------------------------------
// setInterval(() => {
//     console.log("Hello World");
// }, 3000);
// --------------------------------------------------------------------

//Excercise 2
var counter = 0;
const intervalId = setInterval(() => {
    console.log("Hello World");
    counter++;
    if (counter == 5){
    console.log("Done");
    clearInterval(intervalId);
    }
}, 1000);