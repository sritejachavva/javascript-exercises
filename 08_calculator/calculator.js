const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  reduced = function(total, curr){
      return  total+curr;

  }
	return arr.reduce(reduced,0);
};

const multiply = function(arr) {
  reduced_product = function(product, curr){
    return product * curr;
  }
  return arr.reduce(reduced_product,1);
};

const power = function(a,b) {
  let curr =1;
  for (let i in Array.from(Array(b).keys())
  ){
      curr = curr*a;
  }
  return curr;
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
