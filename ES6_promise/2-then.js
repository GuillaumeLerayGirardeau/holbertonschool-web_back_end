export default function handleResponseFromAPI(promise) {

    try {
        promise.then(
            result => {return {'status': 200, 'body': 'success'}}
        );
    } catch {
        throw new Error();
    } finally {
        console.log('Got a response from the API');
    }
}
