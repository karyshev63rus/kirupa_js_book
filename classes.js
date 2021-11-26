class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.message = message;
    };

    set greeting(value) {
        this.message = value;
    };

    get greeting() {
        return this.message;
    };

    get_city_name(city) {
        let city_name = city;
        return console.log(city_name);
    }
}

let mick = new Human('Mick', 45);

mick.greeting = 'Hello';

console.log(mick.name, mick.age, mick.greeting);

mick.get_city_name('Samara');