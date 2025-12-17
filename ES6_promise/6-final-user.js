import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        const value = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
        return [{'status': signUpUser.status, 'value': signUpUser.value}, {'status': uploadPhoto.status, 'value': uploadPhoto.value}];
    } catch(error) {
        throw new Error(error);
    }
}