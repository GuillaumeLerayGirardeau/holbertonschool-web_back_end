export default class HolbertonClass {
    constructor(size, location) {
        this.size = size;
        this.location = location;
    }

    set location(location) {
        if(typeof location === 'string') {
            this._location = location;
        } else {
            throw new TypeError("location must be a string");
        }
    }

    get location () {
        return this._location;
    }

    set size(size) {
        if(typeof size === 'number') {
            this._size = size;
        } else {
            throw new TypeError("size must be a number");
        }
    }

    get size () {
        return this._size;
    }

    valueOf() {
        return this._size;
    }

    toString() {
        return this._location;
    }
}
