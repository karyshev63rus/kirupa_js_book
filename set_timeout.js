function hi() {
    alert('Hi');
}

let timeoutID = setTimeout(hi, 1000);
// timeoutID();
clearTimeout(timeoutID);