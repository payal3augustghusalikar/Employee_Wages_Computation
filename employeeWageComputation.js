const isPresentFullTime = 1;
const isPresentPartTime = 2;
let wagePerHour = 20;
let fullDayHour = 8;
//let dailyEmpWage = 0;

getWelcomeMessage();

function getWelcomeMessage() {
    console.log(`\n ******* Welcome to employee wage computation ******* \n`);
    console.log(`----------------------------------------------------`);
}

var randomCheck = Math.floor(Math.random() * 3);

switch(randomCheck) {
    case 1:
        console.log(`Employee is Present full time `);
        employeeHour = 8; 
        break;

    case 2:
        console.log(`Employee is Present part time `);
        employeeHour = 4;
        break;

    default:
        console.log(`Employee is absent`);
        employeeHour = 0;
        break;
}
dailyEmpWage = wagePerHour * employeeHour;
console.log(`Daily employee wage is : ${dailyEmpWage} \n`); 