// var submitBtn = document.getElementsByClassName('submit');
// alert(submitBtn);
var form = document.getElementsByTagName('form')[0];

submit.onclick = getVals;

function getVals(e){
    e.preventDefault();
    var valArr = [];
    for(var i=0; i < form.elements.length-1; i++){
        valArr.push(form.elements[i].value);
    }
    console.log(valArr);
    // valArr.pop();
    // console.log(valArr);
}

// var listIn = document.getElementsByTagName('li');
// for (var i=0; i < listIn.length; i++){
//     listIn[i].addEventListener('click', function(e){
//         console.log(e.textContent);
//         console.log(e.currentTarget.textContent);
//         console.log(this.textContent);
//
//         // console.log(listIn[i].textContent)
//     });
// }

// function logName(name){
//     console.log(name);
// }

// foo('michelle');


//on "click to add more" button                   <======    Do this for homework!!!
// append new instance of inputEl to form
//
//add submit button back into form
//ensure that each instance is appended BEFORE submit
//modify evey dynamic input to be text
//on submit, output to console new array of values

// Star COPY here =<==================
// var foo = function(name){
//     console.log(name);
//     console.log(arguments);
// }('michelle', 5, ['blue', 'red', 3]);
//
var inputEl = document.createElement('input');
    inputEl.id="newId";
    inputEl.name="new";
    inputEl.type="email";
    inputEl.placeholder="example@email.com";
// document.body.appendChild(inputEl);
form.appendChild(inputEl);


console.log(inputEl);
