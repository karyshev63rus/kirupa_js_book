let btn = document.querySelector('#btn')
btn.addEventListener('click', doSomething, false);

function doSomething(e) {
    console.log('It is working! ' + ' ' + e.target.id + ' ' + 
                                        + Math.round(Math.random()*100));
    console.warn('It is warining!');
    console.error('It is error!');
}