const isPresentFullTime = 1;
const isPresentPartTime = 2;
let wagePerHour = 20;
let fullDayHour = 8;
let dailyEmpWage = 0;
let totalEmpWage = 0;
const numOfWorkingDays = 20;

getWelcomeMessage();

function getWelcomeMessage() {
    console.log(`\n ******* Welcome to employee wage computation ******* \n`);
    console.log(`----------------------------------------------------`);
}

for(let i = 0; i <= numOfWorkingDays; i++) {
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
    dailyEmpWage = wagePerHour * employeeHour;
    totalEmpWage += dailyEmpWage;
}
console.log(`employee wage for month is : ${totalEmpWage} \n`); 
