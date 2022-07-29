let $ = document;
let body = $.querySelector('body');

let darkBtn = $.querySelector('#dark-mode');

let index = $.querySelector('#btn-index');
let key = $.querySelector('#event-key');
let keyLocation = $.querySelector('#event-location');
let which = $.querySelector('#event-which');
let code = $.querySelector('#event-code');

let alert = $.querySelector('.alert');
let row11 = $.querySelector('.row-11');
let row12 = $.querySelector('.row-12');


body.addEventListener('keydown', keydownfunc);
darkBtn.addEventListener('click', darkMode)

function keydownfunc(event) {
    //alert('slm');
    event.preventDefault();

    index.innerHTML = event.keyCode;
    key.innerHTML = event.key;
    keyLocation.innerHTML = event.location;
    which.innerHTML = event.which;
    code.innerHTML = event.code;
    alert.style.display = 'none';
    row11.style.display = 'flex';
    row12.style.display = 'flex';

}

function darkMode() {
    body.classList.toggle("dark-mode");
}