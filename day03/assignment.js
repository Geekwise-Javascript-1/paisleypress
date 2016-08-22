/* String Object */

var name = prompt('Please enter you first name:');

nameFirstLtr = name.charAt(0);
nameFirstLtr = nameFirstLtr.toUpperCase();
lengthName = name.length;
newName = nameFirstLtr + name.substring(1,lengthName);
console.log(newName);


name = capitalize(n)

function capitalize(n){
    return n.charAt(0).toUpperCase + n.substr(1, n.length);
}

console.log(name);
