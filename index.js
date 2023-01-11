// Write your solution in this file!
const employee = {
    name: 'Rick',
    streetAddress: '221B Baker Street'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee['streetAddress'] = "11 Broadway";
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee['streetAddress'] = "12 Broadway";
   return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee['name'];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee['name'];
    return employee;
}