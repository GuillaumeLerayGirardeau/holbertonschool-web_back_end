const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    /*
    split: split the data every new line
    slice: remove the first element (here, the first line)
    */
    const allStudent = data.split('\n').slice(1).filter((student) => student.length > 0);
    console.log(`Number of students: ${allStudent.length}`);

    const allSeparatedDatas = [];
    for (const student of allStudent) {
      const column = student.split(',');
      allSeparatedDatas.push(column);
    }
    const fields = {};
    for (const element of allSeparatedDatas) {
      const firstname = element[0];
      const field = element[3];

      if (!fields[field]) fields[field] = [];

      fields[field].push(firstname);
    }
    for (const field of Object.keys(fields)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
