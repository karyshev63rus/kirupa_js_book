nums = new Array(1, 2, 3, 4, 5, 3, 1);

nums.map(item => console.log('item: ', item));

names = ['mick', 'nick','dick'];

function capitalizedItUp(item, index) {
    let capitalizedItem = item.charAt(0).toUpperCase();
    return capitalizedItem + item.slice(1) + ' index: ' + index
}

// names.map(item => console.log(capitalizedItUp(item)));

let capitalizedNames = names.map(capitalizedItUp);
console.log(capitalizedNames);