const repeatString = function(input, reps) {
    let finalString = '';
    if (reps<0){
        return 'ERROR';
    }
    for (let i = 0; i < reps; i++) {
        finalString=finalString+input;
    }
    return finalString;

};

// Do not edit below this line
module.exports = repeatString;
