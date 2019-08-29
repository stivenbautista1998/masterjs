var inputUser, inputPass, btnSend, btnCancel, divPopup, spanMessage, MessageIdTimeout,
menuButton, menuMovile, closeBtn, wrapperMenuMovile;

function userValidate(e) {
    e.preventDefault();
    clearInterval(MessageIdTimeout);
    var valueUser = inputUser.value;
    var valuePass = inputPass.value;
    var mymessage = "";
    var vandera = true;

    if(valueUser == "") {
        mymessage = "The user is a required field";
        inputUser.focus();
    } else if(valuePass == "") {
        mymessage = "The password is a required field";
        inputPass.focus();
    } else if(valueUser != "admin" || valuePass != "1234") {
        mymessage = "Incorrect user or password";
    } else {
        location.href = "home.html";
        console.log("Logging Successful!!");
        vandera = false;
    }

    if(vandera) {
        spanMessage.innerText = mymessage;
        divPopup.classList.add("visible");

        MessageIdTimeout = setTimeout(() => {
            divPopup.classList.remove("visible");
            spanMessage.innerText = ".";
        }, 5000);
    }
}

function clickCancel(e) {
    e.preventDefault();
    location.href = "../index.html";
}

var handleClickMenuButton = () => {
    menuMovile.classList.add("show-menu");
    wrapperMenuMovile.classList.add("show-menu");
    document.body.classList.add("static");
};

var handleClickColseButton = () => {
    menuMovile.classList.remove("show-menu");
    wrapperMenuMovile.classList.remove("show-menu");
    document.body.classList.remove("static");
};

var runMovileMenu = () => {
    menuButton = document.getElementById("js-menu-btn");
    menuMovile = document.getElementById("js-menu-movile");
    wrapperMenuMovile = document.getElementById("js-wrapper-menu-movile");
    // closeBtn = document.getElementById("js-menu-close-btn");

    menuButton.addEventListener('click', handleClickMenuButton);
    wrapperMenuMovile.addEventListener("click", handleClickColseButton);
    // closeBtn.addEventListener('click', handleClickColseButton);
};

var runLogin = () => {
    inputUser = document.getElementById("js-user");
    inputPass = document.getElementById("js-password");
    divPopup = document.getElementById("js-popup-content");
    spanMessage = document.getElementById("js-popup-message");

    btnSend = document.getElementById("js-btn-send");
    btnCancel = document.getElementById("js-btn-cancel");
    inputUser.focus();
    btnSend.addEventListener('click', userValidate);
    btnCancel.addEventListener('click', clickCancel);
};

window.onload = function() {
    if(location.href.includes("index.html")) {
        runMovileMenu();
        console.log(wrapperMenuMovile);
    } else if(location.href.includes("login.html")) {
        runLogin();
    } else if(location.href.includes("home.html")) {
        runMovileMenu();
    }
}