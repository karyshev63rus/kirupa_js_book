document.addEventListener('click', changeColor, false);
// document.removeEventListener('click', changeColor);

function changeColor(e) {
    document.body.style.backgroundColor = 'orange';
    // e.stopPropagation();
    // e.preventDefault();
}
// события мыши: click, dblclick, mouseover, mouseout, mouseenter,
// mouseleave, mousedown, mouseup, mousemove, contextmenu, 
// mousewheel, DOMMouseScroll
// события клавиатуры: keydown, keypress, keyup
// свойства: KeyCode, CharCode, ctrlKey, altKey, shiftKey

window.addEventListener('keydown', moveSomething, false);

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // press left arroy:
            console.log('left')
            break;
        case 38:
            // press up arroy:
            console.log('up')
            break;
        case 39:
            // press right arroy:
            console.log('right')
            break;
            case 40:
            // press down arroy:
            console.log('down')
            break;
                }
}

window.addEventListener('keydown', keysPressed, false);
window.addEventListener('keyup', keysReleased, false);

let keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;
    // Ctrl + Shift + 5
    if (keys[17] && keys[16] && keys[53]) {
        console.log('Pressed Ctrl + Shift + 5');
        e.preventDefault(); 
    }
    // Ctrl + f
    if (keys[17] && keys[70]) {
        console.log('Pressed Ctrl + f');
        e.preventDefault(); 
    }
}

function keysReleased(e) {
    keys[e.keyCode] = false;
}

// document.addEventListener('DOMContentLoaded', theDomHasLoaded, false);
// window.addEventListener('load', pageFullyLoaded, false);

function theDomHasLoaded(e) {
    document.writeln('DOM has loaded');
}

function pageFullyLoaded(e) {
    document.writeln('Page has loaded');
}

// обработка событий для нескольких элементов
let theParent = document.querySelector('#list');
theParent.addEventListener('click', doSomething, false);

function doSomething(e) {
    if (e.target != e.currentTarget) { // игнорировать клики по родителю
        let clickedItem = e.target.id;
        console.log('Hello' + clickedItem);
    }
    e.stopPropagation();
}