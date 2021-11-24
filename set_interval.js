function myltiHi() {
    alert('Hi from setInterval');
    // setInterval(myltiHi, 500);
}

// myltiHi();
let intervalID = setInterval(myltiHi, 500);
intervalID();
// clearInterval(intervalID);