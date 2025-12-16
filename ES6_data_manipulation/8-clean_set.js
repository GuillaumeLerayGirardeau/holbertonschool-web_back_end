export default function cleanSet(set, startString) {

    if(typeof startString === 'string' && startString !== '') {
        let finalString = "";
        for(const string of set) {
            if(string.includes(startString)) {
                if(finalString.length > 0) {
                    finalString += '-';
                }
                finalString += string.substring(startString.length);
            }
        }
        return finalString;
    } else {
        return '';
    }
}
