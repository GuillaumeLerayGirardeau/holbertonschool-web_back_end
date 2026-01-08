const readDatabase = require('/utils.js')

class StudentsController{

  static getAllStudents(request, response) {
    try {
      const data = readDatabase();
      response.status(200).send('This is the list of our students');
      for (const field in Object.keys(data)) {
        response.send(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {

  }

};
