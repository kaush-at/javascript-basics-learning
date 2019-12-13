var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
console.log(array.shift());
console.log(array);

// 2. Sort the array in order.
console.log(array.sort());

// 3. Put "Kiwi" at the end of the array.
array.push("kiwi");
console.log(array);

// 4. Remove "Apples" from the array.
array.splice(0,1); // this will remove romoved items
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);