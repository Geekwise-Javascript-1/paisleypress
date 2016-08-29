// // var fruitColors = []
// // var apple = ["apple", "red"]
// // var banana = ["banana", "yellow"]
// // var mango = ["mango", "orange"]
// //
// // fruitColors.push(apple); // add elements to array
// // fruitColors.push(banana);
// // fruitColors.push(mango);
// //
// // // fruitColors.pop();
// //
// // var lastFruit = fruitColors.pop(); //remove elements from the end of array
// // var firstFruit = fruitColors.shift(); //remove elements from the beginning of the array
// //
// //
// // console.log(lastFruit);
// // console.log(firstFruit);
// // console.log(fruitColors);
//
//
// // console.log(fruitColors[0][1]);
// // console.log(fruitColors[1][1]);
// // console.log(fruitColors[2][1]);
//
// // var fruits = ["apple","orange","banana","strawberry"];
// //  fruitArr.push("mango");
// //  console.log(fruitArr);
// //
// // var fruits = ['apple', 'banana', 'cherry', 'strawberry', 'pineapple']
// //
// // var selectFruit = fruits.slice(1, 3);
// // console.log (fruits);
// // console.log(selectFruit);
// //
// //
// //
// // fruits.splice(1,2,'grape');
// // console.log(fruits)0
//
// // TEST THIS!!!!! ==============================================
// // var fruitName = prompt("Please enter a fruit:");
// //     checkFruit(fruitName);
// //
// // function checkFruit(fruitName)
// //     if (fruitName > ""){
// //         var fruitArr[] = fruitArr.push(fruitName);
// //         var newFruit = confirm("Would you like to enter another fruit?")
// //             if newFruit.true(fruitArr[] = fruitArr.push(fruitName));
// //         }
// //     else {
// //         re
// //     }
//
// //Teacher code
// //
// // var fruits = [];
// //
// // function getFruit(){
// //     var fruit = prompt("Please enter a fruit:");
// //     fruits.push(fruit);
// //     moreFruit();
// //     if (fruits.length > '0'){
// //         removeFruit(fruits);
// //         console.log('array was greater than 0');
// //     }else {
// //         console.log("fruit array is empty");
// //     }
// // }
// //
// // function moreFruit(){
// //     var addMore = confirm('Add more fruit?');
// //     if (addMore ){
// //         getFruit();
// //     }else {
// //         console.log(fruits);
// //     }
// // }
// //
// function removeFruit(){
//     var fruitNumber = prompt('What fruit number would you like to remove?');
//     fruits.pop(fruitNumber);
//     console.log(fruits);
// }
//
// function outputFruits(){
//     //for loop
//     for (var i = 0;i < array.length; i++)
//     {console.log(array[i]);
//     }
//     var i = 0;
//     while(i < array.length){
//         console.log(array[i]);
//         i++;
//     }
//
//     var i = 0;
//     do {
//         console.log(array[i]);
//         i++;
//     } while { false};
// }
//
// getFruit();

// for (var i = 1;i <= 10; i++)
//         {if (i === 5 || i === 7)
//             {continue;
//         }
//         console.log(i);
//     }
//
// for (var i = 1;i <= 10; i++){
//         if (i === 6){
//             break;
//         }
//     console.log(i);
// }

var input1 = document.getElementById('input1');
var inputs = document.getElementsByClassName('input');
var button = document.getElementById("btn");
var inputsTag = document.getElelementByTagname("input");
var btnEl = document.querySelector('button[type="button"]');
var btn = document.getElementById('btn');
var btnEls = document.querySelectorAll('label input');

console.log(input1);
console.log(inputs);

function getInputs(){
    for (i=0; i< inputs.length; i++){
        console.log(inputs[i].value);
    }
}

btn.onclick = getInputs;
