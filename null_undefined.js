let myvar1; // значение не определено

if (typeof(myvar1) === 'undefined') {
    console.log('myvar1 is undefined. Define it!');
};

let myvar2 = null; // значения нет, и, видимо, оно существовать не должно

if (myvar2 === null) {
    console.log('myvar2 is null.');
};

console.log('null == undefined: ', null == undefined);
console.log('null === undefined: ', null === undefined);