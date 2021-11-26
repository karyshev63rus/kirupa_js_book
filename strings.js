let string = 'mick';

console.log('letter from string: ', string[0]);

let word = string.charAt(0).toUpperCase() + string.slice(1);

console.log('word from string: ', word);

let initial_string = 'How are you?';

let short_sting = initial_string.substr(8, 3);

console.log('substr: ', short_sting);

let splited_string_array = initial_string.split(' ');

console.log('splited string array: ', splited_string_array);

let index_of_substr = initial_string.indexOf('?');

console.log('index of substr: ', index_of_substr);

let index_of_last_substr = initial_string.lastIndexOf('o');

console.log('index of last substr: ', index_of_last_substr);

let phrase = 'There are 3 little pigs';

let regexp1 = /[0-9]/;

let num = phrase.match(regexp1);

console.log('Found num is ', num[0]);

let regexp2 = /[a-zA-Z]+/;

let words = phrase.match(regexp2);

console.log('Found words are ', words[0]);