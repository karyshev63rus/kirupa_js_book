let headingElement = document.querySelector('#bigMessage');
headingElement.textContent = 'Oppa America-Europe!';

console.log(headingElement.getAttribute('id'));

console.log(headingElement.getAttribute('class'));
headingElement.setAttribute('class', 'bar foo');

console.log(headingElement.getAttribute('class'));
headingElement.setAttribute('src', 'docent63.ru');

console.log(headingElement.id);
headingElement.className = 'bar-bar';
console.log(headingElement.getAttribute('class'));

// этот пример просто ради примера и здесь не работает
let ulElement = document.querySelector('ul');
let xPos=125;
let yPos=250;
ulElement.style.transrform = `translate3d(${xPos}px ${yPos}px, 0)`;

let liElements = document.querySelectorAll('li');
for (i = 0; i < liElements.length; i++) {
    liElements[i].style.color = 'red';
    liElements[i].style.fontSize = '2.5rem';
}

headingElement.classList.add('smth');
console.log('add class \'smth\': ', headingElement.classList);
headingElement.classList.remove('smth');
console.log('remove class \'smth\': ', headingElement.classList);
headingElement.classList.toggle('smth');
console.log('add class by toggle \'smth\': ', headingElement.classList);
headingElement.classList.toggle('smth');
console.log('remove class by toggle \'smth\': ', headingElement.classList);

let bodyElement = document.querySelector('body');
bodyElement.style.background = 'orange';

headingElement.className = 'highlight summer';
if (headingElement.classList.contains('summer')) {
    console.log('headingElement has class named \'summer\'');
}