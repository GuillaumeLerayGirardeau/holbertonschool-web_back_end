export default function hasValuesFromArray(set, array) {

    if(Array.isArray(array)) {
        for (const value of array) {
            if (!set.has(value)) {
                return false;
            }
        }
        return true;
    } else {
        throw new Error("You must enter an array");
    }
}