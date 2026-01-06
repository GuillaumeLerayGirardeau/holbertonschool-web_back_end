const fs = require('node:fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        /* 
        split: split the data every new line
        slice: remove the first element (here, the first line) 
        */
        const all_student = data.split('\n').slice(1);
        console.log(`Number of students: ${all_student.length}`)

        const allSeparatedDatas = [];
        for(const student of all_student) {
            const column = student.split(',');
            allSeparatedDatas.push(column);
        }
        const fields = {};
        for(const element of allSeparatedDatas) {
            const firstname = element[0];
            const field = element[3];

            if (!fields[field]) fields[field] = [];

            fields[field].push(firstname);
        }
        for(const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field]}`)
        }
    } catch(error) {
        throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;