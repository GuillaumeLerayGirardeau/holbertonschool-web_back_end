export default class Car {
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    set brand(brand) {
        if(typeof brand === 'string') {
            this._brand = brand;
        } else {
            throw new TypeError("brand must be a string");
        }
    }

    get brand () {
        return this._brand;
    }

    set motor(motor) {
        if (typeof motor === 'string') {
            this._motor = motor;
        } else {
            throw new TypeError("motor must be a string");
        }
    }

    get motor() {
        return this._motor;
    }

    set color(color) {
        if (typeof color === 'string') {
            this._color = color;
        } else {
            throw new TypeError("color must be a string");
        }
    }

    get color() {
        return this._color;
    }

    cloneCar () {
        return new this.constructor(this.brand, this.motor, this.color);
    }
}
