const readDatabase = require('/utils.js')

class StudentsController{

  static getAllStudents(request, response) {
    try {
      const data = readDatabase();
      response.send('This is the list of our students');
      for (const field in Object.keys(data)) {
        response.send(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      }
      return response.status(200);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const parseUrl = url.parse(request.url);
      const pathnameUrl = parseUrl.pathname;
      const tabpathname = pathnameUrl.split('/');
      if (tabpathname[tabpathname.length - 1] !== 'CS' && tabpathname[tabpathname.length - 1] !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        const students = await readDatabase(process.argv[2]);
        const result = `List: ${students[tabpathname[tabpathname.length - 1]]}`;
        response.status(200).send(result);
      }
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

};
