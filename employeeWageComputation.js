const isPresent = 1;
let wagePerHour = 20;
let fullDayHour = 8;
let dailyEmpWage = 0;

getWelcomeMessage();

function getWelcomeMessage() {
    console.log(`\n ******* Welcome to employee wage computation ******* \n`);
    console.log(`----------------------------------------------------`);
}

if(Math.floor(Math.random() * 2) == 1) {
    console.log(`Employee is Present`);
    employeeHour = 8; 
}
else {
    console.log(`Employee is absent`);
    employeeHour = 0;
}
dailyEmpWage = wagePerHour * employeeHour;
console.log(`Daily employee wage is : ${dailyEmpWage} \n`); 