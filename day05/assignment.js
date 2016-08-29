// create js object for input1, input2, btn, div
// after user inputs values for input1 & input2
// user clicks go
// input1 value replaced with text "Hello JavaScript!"
// alert new value of input1
// replace div text with value of input2


function btnClick(){


    var btn = document.getElementById("btn").value;
        console.log(btn);
    var in1 = document.getElementById("box1").value;
        console.log(in1);
    var in2 = document.getElementById("box2").value;
        console.log(in2);
    var divIn = document.getElementById("textBox").innerHTML;
        console.log(divIn);

    inputAlphabet(in1,"Alert!")

    if (inputAlphabet() === false){
        alert("Please enter only alpha characters.");
    }

    if (in1 > ""){
            box1.value = "Hello JavaScript!";
            alert(box1.value)
    }else {
        alert("Please enter a value in input box 1.");
    }

    if (in2 > ""){
        textBox.innerHTML = in2;
        box2.value = "";
    }else {
        alert("Please enter a value in input box 2.");
    };
}

function inputAlphabet(inputtext,alertMsg){
    alert("in inputAlphabet function",inputtext);
    var alphaExp = /^[a-zA-Z]+$/;
    if(inputtext.match(alphaExp)){
        alert("yes alpha")
        return true;
    }
    else{
        alert("no alpha")
        // document.getElementById('p1').innerText = alertMsg;
        // inputtext.focus();
        return false;
        }
}

btn.onclick = btnClick;
