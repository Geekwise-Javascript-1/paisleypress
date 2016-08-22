
function getUserName(){
    var user = prompt('Please enter your user name.');
    //checkForSpaces(user);
    checkUsername(user);
}

function craftMsg(u){
    var msg = "Welcome ";
    msg += formatUserName(u);
    msg += " to my site";
    alertUser(msg);
}

function formatUserName(nameIn){
    console.log(nameIn);
    return nameIn.charAt(0).toUpperCase() + nameIn.substr(1, nameIn.lengthName).toLowerCase();
}

function alertUser(m){
    alert(m);
}

function checkUsername(user){
    var preParsed = user;
    user = parseInt(user);

    if ( !isNaN(user) || preParsed === null || preParsed === ""){
        alert("Please enter a valid user name");
        return;
    }

    preParsed = preParsed.trim();

    if (preParsed ===""){
        alert("Please enter a valid user name");
        return;
    }
    craftMsg(preParsed);
}



getUserName();
