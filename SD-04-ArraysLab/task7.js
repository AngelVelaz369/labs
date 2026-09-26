const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!

arr[0].push(1992); // Agrego mi año de nacimiento al final sub-array 0

for(let i = 95; i >= 85 ; i--){
  arr.push(i);
} // Agrego los números del 95 al 85 al final del array principal

arr[1].splice(3,1); // Elimino el número 13 del sub-array 1

arr[2].reverse(); // Invierto el orden del sub-array 2

console.log(arr);
  // Type your code above this line!