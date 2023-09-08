const removeFromArray = function(arr, ...removal_array) {
    let index=0;
    new_array = arr;
    for (let i = 0; i < removal_array.length; i++) {
        index=0;
        index = new_array.indexOf(removal_array[i]);

        while(index > -1){
            console.log(index);
            new_array.splice(index,1);
            index = new_array.indexOf(removal_array[i]);
        }
      }
      
    return new_array;
};



// Do not edit below this line
module.exports = removeFromArray;


// Read full array and removal numbers into 2nd array
// create for loop with length of 2nd array to remove each elemnt from array