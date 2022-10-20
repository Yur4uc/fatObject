





/* DATA FUNCTION */
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function date_time()
{
    let current_datetime = new Date();

    let hours = zero_first_format(current_datetime.getHours());
    let minutes = zero_first_format(current_datetime.getMinutes());

    return hours+":"+minutes;
}

setInterval(function () {
    document.getElementById('data-time').innerHTML = date_time();
}, 1000);


// Progress LINE :(
//
// let progressBar = document.querySelector('.page-progress-frame')
//
// document.onscroll = function () {
//     let progressLine = window.scrollX / (document.body.clientHeight - window.innerHeight) * 100;
//
//     progressBar.style.width = progressLine + '%';
// }
//


/*validation*/

const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');

let error = email;
while ((error = error.nextSibling).nodeType != 1);


const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addEvent(element, event, callback) {
    let previousEventCallBack = element["on"+event];
    element["on"+event] = function (e) {
        let output = callback(e);

        if (output === false) return false;

        if (typeof previousEventCallBack === 'function') {
            output = previousEventCallBack(e);
            if(output === false) return false;
        }
    };
}

addEvent(window, "load", function () {
    const test = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = test ? "valid" : "invalid";
});

addEvent(email, "input", function () {
    const test = email.value.length === 0 || emailRegExp.test(email.value);
    if (test) {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    } else {
        email.className = "invalid";
    }
});

addEvent(form, "submit", function () {
    const test = email.value.length === 0 || emailRegExp.test(email.value);
    if (!test) {
        email.className = "invalid";
        error.textContent = "invalid email";
        error.className = "error active";
        return false;
    } else {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
});


/*MENU*/

const nav = document.querySelector('#nav');
      navBtn = document.querySelector('#nav-btn');
      navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/close.png";
    } else {
        navBtnImg.src = "./img/free-icon-menu-2976215.png";
    }
}



