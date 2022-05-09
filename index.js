/**
 * The array that contains the codes of numbers and letters of the keyboard
 * @type {number[]} // UTF-16
 */
let keyCodes = [
    96,49,50,51,52,53,54,55,56,57,48,45,61,8,9,113,119,101,114,116,121,117,105,111,112,91,93,97,115,
    100,102,103,104,106,108,59,39,92,122,120,99,118,98,110,
    109,44,46,47,];
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
        if (i === 14 || i === 27) {
            markup += '<div class="clearfix"></div>';
        }
        if (keyCodes[i] === 9) {textContent = 'Tab';}
        else if (keyCodes[i] === 8) {textContent = 'Backspace';}
        else {textContent = String.fromCharCode(keyCodes[i]);}
        markup += `<div class="k-key" data-code=${keyCodes[i]}>${textContent}</div>`;
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

