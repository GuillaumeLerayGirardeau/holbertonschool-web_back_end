export default function handleResponseFromAPI(promise) {

    return promise
    .then(
        result => {return {'status': 200, 'body': 'success'}},
        error => {throw new Error()}
    )
    .catch (
        error => {throw new Error()}
    )
    .finally (
        () => console.log('Got a response from the API')
    )
}

/* Async / Await version :

export default async function handleResponseFromAPI(promise) {
    try {
        await promise;
        return { status: 200, body: 'success' };
    } catch (error) {
        throw new Error(error);
    } finally {
        console.log('Got a response from the API');
    }
}

*/