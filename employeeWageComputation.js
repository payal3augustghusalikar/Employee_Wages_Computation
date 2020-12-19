const isPresentFullTime = 1;
const isPresentPartTime = 2;
const numOfWorkingDays = 20;
const maxHrsInMonth = 100;
let wagePerHour = 20;
let fullDayHour = 8;
let dailyEmpWage = 0;
let totalEmpWage = 0;
let totalWorkingDays = 1;
let totalEmpHour = 0;
let employeeHour = 0;

console.log(`\n ******* Welcome to employee wage computation ******* \n`);
console.log(`----------------------------------------------------`);

getRandomCheck = () => randomCheck = Math.floor(Math.random() * 3)

getWorkHours = () => {
    while( employeeHour <= maxHrsInMonth && totalWorkingDays <= numOfWorkingDays) {
        switch(getRandomCheck()) {
            case isPresentFullTime:
                employeeHour = 8; 
                break;

            case isPresentPartTime:
                employeeHour = 4;
                break;

            default:
                employeeHour = 0;
                break;
        }
        totalEmpHour +=  employeeHour;
        console.log(`day: ${totalWorkingDays}  -->  employee hour : ${totalEmpHour}  -->   Daily wage: ${getDailyWage()}`)
        totalWorkingDays++;
    }
    console.log(`total work hours is: ${totalEmpHour}`)
    return totalEmpHour;
}

getDailyWage = () => employeeHour * wagePerHour
  
getTotalEmpWage = () => {
    totalEmpWage = getWorkHours() * wagePerHour;
    console.log(`\n employee wage per month till maximum condition reached is : ${totalEmpWage} \n`);
}

getTotalEmpWage();