export default function createInt8TypedArray(length, position, value) {

    if (value > 255 || position > length) {
        throw new Error("Position outside range");
    }

    let buffer = new ArrayBuffer(length);
    let vue = new Int8Array(buffer);

    vue[position] = value;

    return new DataView(buffer);
}
