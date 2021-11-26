let nums = new Array(1,2,3,4,5,6,7,8,9,0);

let item = nums.reduce(function(total, current) {
    return total + current
}, 0);

console.log(item);

let sentence = ['How', 'are', 'you?'];

let question = sentence.reduce(function(total, current, index){
    if (index == 0) {
        return current
    } else {
        return total + ' ' + current
    }
},'');

console.log(question);