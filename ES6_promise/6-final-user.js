import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        const value = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
        return value.map(object => {
            let value;
            if(object.status == 'fulfilled') {
                value = object.value;
            } else {
                value = String(object.reason);
            }
            return {'status': object.status, 'value': value};
        })
    } catch(error) {
        throw new Error(error);
    }
}