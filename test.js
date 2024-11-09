const Employee = require("./employee");

const emp = new Employee("John Wick", "Dog Lover");

const unboundEmp = emp.sayName;

const boundEmp = unboundEmp.bind(emp);

global.setTimeout(boundEmp, 2000);

/***********************************************************/
const unboundEmpOcc = emp.sayOccupation;

const boundEmpOcc = unboundEmpOcc.bind(emp);

global.setTimeout(boundEmpOcc, 3000);

