export default function setFromArray(array) {
    if(Array.isArray(array)) {
        return new Set(array);
    } else {
        throw new Error('You must use an array');
    }
}