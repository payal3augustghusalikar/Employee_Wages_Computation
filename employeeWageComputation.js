const isPresentFullTime = 1;
const isPresentPartTime = 2;
let wagePerHour = 20;
let fullDayHour = 8;
let dailyEmpWage = 0;

getWelcomeMessage();

function getWelcomeMessage() {
    console.log(`\n ******* Welcome to employee wage computation ******* \n`);
    console.log(`----------------------------------------------------`);
}
var randomCheck = Math.floor(Math.random() * 3);

if(randomCheck == 1) {
    console.log(`Employee is Present full time `);
    employeeHour = 8; 
}
else if(randomCheck == 2) {
    console.log(`Employee is Present part time `);
    employeeHour = 4;
}
else {
    console.log(`Employee is absent`);
    employeeHour = 0;
}
dailyEmpWage = wagePerHour * employeeHour;
console.log(`Daily employee wage is : ${dailyEmpWage} \n`); 