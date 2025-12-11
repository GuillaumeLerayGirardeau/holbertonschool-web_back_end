export default function createReportObject(employeesList) {
    const allEmployees = employeesList;

    const getNumberOfDepartments = () => {
        let count = 0
        for (const _ in allEmployees) {
            count += 1;
        }
        return count;
    }

    return {allEmployees, getNumberOfDepartments};
}
