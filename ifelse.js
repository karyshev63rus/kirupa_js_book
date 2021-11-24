function speedLimit(speed) {
    if (speed < 60) {
        alert('Скорость не превышает допустимого значения');
    } else if (speed == 60) {
        alert('Скорость на грани области разрешенных значений');
    } else {
        alert('Скорость выше допустимого значения');
    }
}

speedLimit(55);
speedLimit(60);
speedLimit(75);