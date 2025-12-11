export default class HolbertonCourse {
    constructor(name, length, student) {
        this.name = name;
        this.length = length;
        this.student = student; 
    }

    set name(name) {
        if (typeof name === "string"){
            this._name = name;
        } else {
            throw new TypeError("name must be a string");
        }
    }

    get name () {
        return this._name;
    }

    set length(length) {
        if (typeof length === "number"){
            this._length = length;
        } else {
            throw new TypeError("length must be a number");
        }
    }

    get length () {
        return this._length;
    }

    set student(student) {
        if (Array.isArray(student)) {
            this._student = student;
        } else {
            throw new TypeError("student must be an array of string");
        }
    }

    get student () {
        return this._student;
    }
}
