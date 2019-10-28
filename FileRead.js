// Day 4:File Read Operation Excercise 1 
const lineReader = require('line-reader');

lineReader.eachLine('C:/Users/anasagar/Documents/InternalTraining/RandomText.txt', function(err,data) {
    if (!err) {
    console.log(line);
    } else {
        console.log(err);
    }
    console.log('File read operation at the end');
});