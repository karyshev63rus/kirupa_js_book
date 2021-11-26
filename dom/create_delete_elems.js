let newElement = document.createElement('h3');

newElement.textContent = 'Text from created h3-area';

let bodyElement = document.querySelector('body');

bodyElement.appendChild(newElement);

// размещение перед конкретным элементом
let scriptElement = document.querySelector('script');

let h1Element = document.querySelector('h1');

bodyElement.insertBefore(newElement, h1Element, scriptElement);

function insertAfter(target, element) {
    target.parentNode.insertBefore(element, target.nextSibling);
}

insertAfter(bodyElement, newElement);

// bodyElement.removeChild(newElement); // с предыдущей ф-цией не работает

// newElement.parentNode.removeChild(newElement);

// newElement.remove();

let h4Element = document.createElement('h4');
h4Element.textContent = 'Hi there!';

setInterval(h4_hi_there, 5000);

function h4_hi_there() {
    let clonedH4Element = h4Element.cloneNode(true);
    bodyElement.appendChild(clonedH4Element);
}