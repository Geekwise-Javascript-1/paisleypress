/* String Object
var str = "      nichelle      ";
console.log(str);
console.log(str.charAt(0));
var newStr = str.trim();
console.log(newStr);
*/

/* Math Object
var randNum = Math.floor( Math.random() * 10 ) + 1;
console.log(randNum);
*/

/* Date Object
var toDay = new Date;
console.log(toDay.getFullYear());
var thisYear = (toDay.getFullYear());
console.log(thisYear)
var thisMonth = (toDay.getMonth());
console.log(thisMonth)
var thisDay = (toDay.getDate());
console.log(thisDay)
var displayDate = ("Today is " + thisMonth + " " + thisDay + " ," + thisYear);
console.log(displayDate)

var objDate = new Date,
    locale = "en-us",
    month = objDate.toLocaleString(locale, { month: "long" });
console.log(month)
*/


// var firstName = "Michelle";
//
// function newFunction(){
//     var lastName = "Barba";
//     alert(firstName);
//     alert(lastName);
// }
//
// newFunction();


// var color = prompt('Please enter a color:');
// var firstName = prompt('Please enter first name:');
// var lastName = prompt('Please enter last name:');
// var locale = "en-us";
//
// function setBirthday(color, firstName, lastName){
//     var d = new Date();
//     d.setFullYear(2000);
//     d.setMonth(10);
//     d.setDate(22);
//     var fullMon = d.toLocaleString(locale, { month: "long"});
//     alert(firstName);
//     alert(lastName);
//     console.log(
//         firstName + " " +
//         lastName + " " +
//         fullMon + " " +
//         d.getDate() +
//         ", " +
//         d.getFullYear() +
//         ". And my color is " +
//         color);
// }
//
// setBirthday(color, firstName, lastName);


var firstName = prompt('Please enter first name');
var lastName = prompt('Please enter last name');
var birthDay = prompt('Please enter your birthday');
var color = prompt('Please enter a color');

var locale = "en-us";

function setBday(uF, uL, uB, uC){
    var bDayArr = uB.split(" ");
    console.log(bDayArr);
    // console.log(
    //      uF +
    //      " " +
    //      uL +
    //      " " +
    //      uB +
    //      ". " +
    //      "Your color is " +
    //      uC
     return uF + " " + uL + " " + bDayArr[0] + " " + bDayArr[1] + " " + bDayArr[2] ". " + "Your color is " + uC;
}

console.log( setBday(firstName, lastName, birthDay, color) );





// function displayInfo(){
//     var d = new Date();
//         console.log(d);
//         d.setFullYear(2000);
//         d.setMonth(10);
//         d.setDate(22);
//     alert(firstName);
//     alert(lastName);
//     console.log(d);
// }
//
// displayInfo();
