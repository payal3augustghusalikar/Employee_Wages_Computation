const isPresentFullTime = 1;
const isPresentPartTime = 2;
let wagePerHour = 20;
let fullDayHour = 8;
let dailyEmpWage = 0;
let totalEmpWage = 0;
const numOfWorkingDays = 20;
const maxHrsInMonth = 100;
let totalWorkingDays = 1;
let totalEmpHour = 0;
let employeeHour = 0;

getWelcomeMessage();

function getWelcomeMessage() {
    console.log(`\n ******* Welcome to employee wage computation ******* \n`);
    console.log(`----------------------------------------------------`);
}

while( employeeHour <= maxHrsInMonth && totalWorkingDays <= numOfWorkingDays) {
    var randomCheck = Math.floor(Math.random() * 3);

    switch(randomCheck) {
        case 1:
            employeeHour = 8; 
            break;

        case 2:
            employeeHour = 4;
            break;

        default:
            employeeHour = 0;
            break;
    }
    totalEmpHour +=  employeeHour;
    console.log(`day: ${totalWorkingDays} && employee hour : ${totalEmpHour}`)
    totalWorkingDays++;
}
totalEmpWage = totalEmpHour * wagePerHour;
console.log(`employee wage per month till maximum condition reached is : ${totalEmpWage} \n`); 
