
btn.onclick = createInput;

function createInput() {
    //=================== Insert a Line Break
    var br = document.createElement("br");
    document.body.appendChild(br);

    //===================  Format First Name Input
    var firstLabel = document.createElement("label");
    firstLabel.setAttribute("for", firstLabel);
    firstLabel.innerHTML = "First Name ";

    document.body.appendChild(firstLabel);

    var newFirst = document.createElement('input');
    newFirst.innerHTML = "First Name";
    newFirst.setAttribute('id', 'first');
    newFirst.setAttribute('type', 'text');
    newFirst.setAttribute('name', 'first');
    newFirst.setAttribute('value', '');

    document.body.appendChild(newFirst);
    console.log("new first = " + newFirst);


    //===================  Format Last Name Input
    var lastLabel = document.createElement("label");
    lastLabel.setAttribute("for", lastLabel);
    lastLabel.innerHTML = "Last Name ";

    document.body.appendChild(lastLabel);

    var newLast = document.createElement('input');
    newLast.setAttribute('id', 'last');
    newLast.setAttribute('type', 'text');
    newLast.setAttribute('name', 'last');
    newLast.setAttribute('value', ' ');
    document.body.appendChild(newLast); // Since the second argument is implicity null, this inserts the radio button at the end of this node's list of children ("this" node refers to the body element).
    console.log("new last = " + newLast);


    //===================  Format Email Input
    var emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", emailLabel);
    emailLabel.innerHTML = "Email ";

    document.body.appendChild(emailLabel);

    var newEmail = document.createElement('input');
    newEmail.setAttribute('id', 'email');
    newEmail.setAttribute('type', 'email');
    newEmail.setAttribute('name', 'email');
    newEmail.setAttribute('value', '');
    document.body.appendChild(newEmail); // Since the second argument is implicity null, this inserts the radio button at the end of this node's list of children ("this" node refers to the body element).
    console.log("new email = " + newEmail);

    //===================  Format Phone Input
    var phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", phoneLabel);
    phoneLabel.innerHTML = "Phone ";

    document.body.appendChild(phoneLabel);

    var newPhone = document.createElement('input');
    newPhone.setAttribute('id', 'phone');
    newPhone.setAttribute('type', 'tel');
    newPhone.setAttribute('name', 'phone');
    newPhone.setAttribute('value', '');
    document.body.appendChild(newPhone); // Since the second argument is implicity null, this inserts the radio button at the end of this node's list of children ("this" node refers to the body element).
    console.log("new phone = " + newPhone);

    //===================  Format Password Input
    var passLabel = document.createElement("label");
    passLabel.setAttribute("for", passLabel);
    passLabel.innerHTML = "Password ";

    document.body.appendChild(passLabel);

    var newPass = document.createElement('input');
    newPass.setAttribute('id', 'pass');
    newPass.setAttribute('type', 'password');
    newPass.setAttribute('name', 'pass');
    newPass.setAttribute('value', '');
    document.body.appendChild(newPass); // Since the second argument is implicity null, this inserts the radio button at the end of this node's list of children ("this" node refers to the body element).
    console.log("new pass = " + newPass);
}
