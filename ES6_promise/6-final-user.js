import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        const value = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
        return [{'status': value[0].status, 'value': value[0].value}, {'status': value[1].status, 'value': value[1].value}];
    } catch(error) {
        throw new Error(error);
    }
}