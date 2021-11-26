let nums = [1,2,3,4,5,6,7,8,9,0];

let even_nums = nums.filter(function(item) {
    return (item % 2 == 0);
});

let odd_nums = nums.filter((item) => (item % 2 != 0));

console.log(even_nums);
console.log(odd_nums);