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

let getRandomCheck = () => {
    var randomCheck = Math.floor(Math.random() * 3);
    return randomCheck;
}

let getWorkHours = () => {
    while( employeeHour <= maxHrsInMonth && totalWorkingDays <= numOfWorkingDays) {
        switch(getRandomCheck()) {
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
       //let dayWage = getDailyWage();
        totalEmpHour +=  employeeHour;
        console.log(`day: ${totalWorkingDays}  -->  employee hour : ${totalEmpHour}  -->   Daily wage: ${getDailyWage()}`)
        totalWorkingDays++;
    }
    console.log(`total work hours is: ${totalEmpHour}`)
    return totalEmpHour;
}

let getDailyWage = () => {
    dailyEmpWage = employeeHour * wagePerHour;
   // console.log(`--- Daily employee Wage is ${dailyEmpWage} ---`);
   return dailyEmpWage;
}

function getTotalEmpWage() {
    totalEmpWage = getWorkHours() * wagePerHour;
    console.log(`\n employee wage per month till maximum condition reached is : ${totalEmpWage} \n`);
}

getTotalEmpWage();