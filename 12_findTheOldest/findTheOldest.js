const findTheOldest = function(arr) {
    /*
    step1: if death_date is undefined, then populate with current year
    step2: add age field to each element
    step3: sort by age and return first element
    */

    let populateDeathYear = function(arr){
        for (let i in arr){
            if (arr[i].yearOfDeath === undefined){
                arr[i].yearOfDeath = 2023; 
            }
        }
        return arr;
    }

    let calculateAge = function(arr){
        for (let i in arr){
            arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
        return arr;
    }

    let sortByAge = function(a,b){
        return b.age-a.age;
    }

    arr = populateDeathYear(arr);
    arr = calculateAge(arr);

    

    arr = arr.sort(sortByAge);

    return arr[0];

};

// Do not edit below this line
module.exports = findTheOldest;
