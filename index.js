/**
 * The array that contains the codes of symbols of the keyboard
 * @type {number[]} // UTF-16
 */
let keyCodes = [
    96,49,50,51,52,53,54,55,56,57,48,45,61,8,9,113,119,101,114,116,121,117,105,111,112,91,93,13,20,97,115,
    100,102,103,104,106,108,59,39,92,16,122,120,99,118,98,110,
    109,44,46,47,16,17,18,32,18,17];
/**
 * instance of textarea
 * @type {Element}
 */
const textarea = document.querySelector('#textarea');

/**
 * function for creating html of virtual keyboard
 */
function createMarkup(){
    let markup = '';
    for (let i = 0; i < keyCodes.length; i++){
        let textContent = '';
        let classes = '';
        if (i === 14 || i === 28 || i === 40 || i === 52) {
            markup += '<div class="clearfix"></div>';
        }
        if (keyCodes[i] === 9) {textContent = 'Tab';classes = 'wide';}
        else if (keyCodes[i] === 8) {textContent = 'Backspace'; classes = 'wide';}
        else if (keyCodes[i] === 13) {textContent = 'Enter';classes = 'wide';}
        else if (keyCodes[i] === 20) {textContent = 'Caps Lock'; classes = 'wide';}
        else if (keyCodes[i] === 16) {textContent = 'Shift';classes = 'wide';}
        else if (keyCodes[i] === 17) {textContent = 'Ctrl';}
        else if (keyCodes[i] === 18) {textContent = 'alt';}
        else if (keyCodes[i] === 32) {textContent = 'Space';classes = 'full';}
        else {textContent = String.fromCharCode(keyCodes[i]);}
        markup += `<div class="k-key ${classes}" data-code=${keyCodes[i]}>${textContent}</div>`;
    }
    document.querySelector('#keyboard').innerHTML = markup;
}
createMarkup();
/**
 * physic keyboard
 * listener for onkeypress events
 * @param event {KeyboardEvent}
 */
document.onkeypress = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
    console.dir(textarea);
    document.querySelectorAll('#keyboard .k-key').forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .k-key[data="'+event.keyCode+'"]').classList.add('active');
}
/**
 * virtual keyboard
 * listener for onclick events
 */
document.querySelectorAll('#keyboard .k-key').forEach(function(element){
    element.onclick = function (event){
        document.querySelectorAll('#keyboard .k-key').forEach(function(element){
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
        console.dir(textarea);
        textarea.value += String.fromCharCode(element.getAttribute('data-code'));
        console.log(element.getAttribute('data-code'))
    }
});

function hello(){
    let name = prompt('set your name') || 'noname';
    alert('hello '+ name);
}

