/* String Object */

var name = prompt('Please enter you first name:');

nameFirstLtr = name.charAt(0);
nameFirstLtr = nameFirstLtr.toUpperCase();
lengthName = name.length;
newName = nameFirstLtr + name.substring(1,lengthName);
console.log(newName);
