const fs = require('node:fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path);
    const lineData = data.split('\n').slice(1).filter(x => x != '');
    const studentData = [];
    for (const line in lineData) {
      const student = line.split(',');
      studentData.push(student);
    }

    const fields = {}
    for (const student in studentData) {
      const name = student[0];
      const field = student[3];

      if (!fields[field]) fields[field] = [];
      fields[field].push(name);
    }

    return fields;
    
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {readDatabase};
