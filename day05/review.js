//
// function getUser(){;
//     var user = prompt("what is your username?");
//     // checkUser(user);
//     splitWords(user);
// }
//
// function splitWords(string){
//     string = string.split(' ');
//     userArr = [];
//     for(var i = 0; i < string.length; i ++){
//         userArr.push(checkUser string[i] );
//     }
//     // console.log(string);
// }
//
// function checkUser(){
//     var canParse = parseInt(user)
//     console.log(canParse);
//     if(isNaN(canParse)) && user !== null && user.trim(){
//         // console.log( formUser(user.trim)
//         return formatUser( user.trim());
//         // outputUser( formatUser( user.trim()));
//     }
//
// }
//
// function formatUse(string){
//     return.string.charAt(0).toUpperCase() +
//     string.toLowerCase().substr(1,string.length);
// }
//
// function outputUser() {
//     var msg = "";
//     msg = "Welcome ";
//     for (var i = 0; i< user.length; i ++)
//     msg += user;
//     msg += "to my new site!";
//     alert(msg);
// }
//
// getUser()

// function getUser(){;
//     var user = prompt("what is your username?");
//     // checkUser(user);
//     inputAlphabet(user);
// }

function inputAlphabet(inputtext, alertMsg){
    var alphaExp = /^[a-zA-Z]+$/;
    if(inputtext.value.match(alphaExp)){
        return true;
    }
    else{
        document.getElementById('p1').innerText = alertMsg;
        inputtext.focus();
        return false;
        }
}

inputAlphabet();
