let zorb = {
    message: 'Hi there!',

    get greeting() {
        return this.message;
    },

    set greeting(value) {
        this.message = value; 
    }
};

console.log('Before: ', zorb.greeting);

zorb.greeting = 'Hello!';

console.log('After: ', zorb.greeting);