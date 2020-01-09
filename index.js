function sumItems(array) {
  //Sum all the numbers in the array
  //loop through array
  //if we find an array we recur
  //if we find a value we add
  //return sum
let sum = 0;

  array.forEach(element => {
    if(Array.isArray(element)) {
      sum += sumItems(element);
    } else {
      sum += element;
    }
  });
  return sum;
}

module.exports = sumItems;