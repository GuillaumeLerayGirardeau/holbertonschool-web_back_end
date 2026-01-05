console.log("Welcome to Holberton School, what is your name?");
process.stdin.on('data', data => {
    data = data.toString();
    process.stdout.write(`Your name is: ${data}`)
});
console.log('This important software is now closing');
