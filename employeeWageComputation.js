
isPresentFullTime = 1;
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
var company;

console.log(`\n ******* Welcome to employee wage computation ******* \n`);
console.log(`----------------------------------------------------`);

getRandomCheck = () => Math.floor(Math.random() * 3)

getWorkHours = (company, numOfWorkingDays,  maxHrsInMonth) => {

    this.company = company;
    this.wagePerHour = wagePerHour;
    this.numOfWorkingDays = numOfWorkingDays;
    this.maxHrsInMonth = maxHrsInMonth;
    employeeHour = 0;
    totalWorkingDays = 1;
    while( employeeHour <= this.maxHrsInMonth && totalWorkingDays <= this.numOfWorkingDays) {
   
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
        console.log(`day: ${totalWorkingDays}  -->  employee hour : ${totalEmpHour}  -->   Daily wage: ${employeeHour * this.wagePerHour}`)
        totalWorkingDays++;
    }
    console.log(`total work hours for ${this.company} is: ${totalEmpHour}`)
    return totalEmpHour;  
}


empWageBuilder = (company, wagePerHour, numOfWorkingDays,  maxHrsInMonth) => {
    totalEmpWage = getWorkHours(company, numOfWorkingDays,  maxHrsInMonth) * wagePerHour;
    console.log(`\n employee wage for company ${company} per month till maximum condition reached is : ${totalEmpWage} \n`);   
}

empWageBuilder("sbi", 50, 20, 100);
empWageBuilder("sc", 40, 20, 100);
empWageBuilder("boi", 30, 20, 100);
empWageBuilder("uco", 30, 20, 100);
  
  
