function letsDoWhile(num) {
    let i = 1
    do {
        alert('do step ' + i + ' while i < ' + num);
        i++;
    }
    while(i < num);
}

letsDoWhile(5);