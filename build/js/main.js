#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.blue(`\n\n\t     _-^+-^+‾       ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦       ‾+^-+^-_`));
console.log(chalk.blue(`\t  <==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(`Welcome To Mustafa's - Student Management System`)} ≦)o .｡.:*☆ ~~!==>`));
console.log(chalk.blue(`\t     ‾-∨+-∨+_       ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦       _+∨-+∨-‾\n\n`));
//main arrays and student class
const studentsArray = [];
const deletedStudentsarray = [];
class student {
    static counter = Math.floor(Math.random() * 100000 - 1);
    id;
    name;
    courses;
    balance;
    constructor(studentname, balance) {
        this.name = studentname;
        this.id = student.counter++;
        this.courses = [];
        this.balance = balance;
    }
    add_balance(balance) {
        this.balance += balance;
        console.log(`\n+—————————————————————————————————————————————————————————————————————————————————+`);
        console.log(chalk.hex('#fc9d4e')(`\tBalance of ${chalk.hex("178C1F").bold("$" + balance)} has been Credited to ${chalk.hex('46579B').bold(this.name)}\t`));
        console.log(`+—————————————————————————————————————————————————————————————————————————————————+\n`);
    }
    delete_course(course) {
        if (this.courses.includes(course)) {
            let index = this.courses.indexOf(course);
            this.courses.splice(index, 1);
            console.log(`\n+———————————————————————————————————————————————————————————————+`);
            console.log(chalk.hex('#fc9d4e')(`\t\tDeleted Course '${chalk.hex("178C1F").bold(course)}' from ${chalk.hex('46579B').bold(this.name)}\t`));
            console.log(`+———————————————————————————————————————————————————————————————+\n`);
        }
        else {
            console.log(chalk.redBright(`\t+—————————————————————————————————+\n\t|   Please Enter a valid Course   |\n\t+—————————————————————————————————+\t`));
        }
    }
    ;
    enroll_course(course) {
        this.courses.push(course);
    }
    view_balance() {
        console.log(`\n+———————————————————————————————————————————————————————————————+`);
        console.log(chalk.hex('#fc9d4e')(`\t\tBalance of ${chalk.hex('46579B').bold(this.name)} : ${chalk.hex("178C1F").bold("$" + this.balance)}\t`));
        console.log(`+———————————————————————————————————————————————————————————————+\n`);
    }
    pay_fees(amount, course) {
        if (this.courses.includes(course)) {
            if (this.balance < amount) {
                console.log(chalk.redBright(`\t+———————————————————————————————————————+\n\t|  Your Account Balance Is Insufficient |\n\t+———————————————————————————————————————+\t`));
            }
            else if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`\n+———————————————————————————————————————————————————————————————+`);
                console.log(chalk.hex('#fc9d4e')(`\t${chalk.hex('46579B').bold(this.name + "'s")} Fees paid ${chalk.hex("178C1F").bold("$" + amount)} successfully for ${chalk.yellowBright(course)}\t`));
                console.log(`+———————————————————————————————————————————————————————————————+\n`);
            }
        }
        else {
            console.log(chalk.redBright(`\t+—————————————————————————————————+\n\t|   Please Enter a valid Course   |\n\t+—————————————————————————————————+\t`));
        }
    }
    display_status() {
        console.log(`\n+——————————————————————————+`);
        console.log(chalk.hex("FFA90A")(`\nID: ${chalk.yellowBright(this.id)}\nName: ${chalk.hex('46579B').bold(this.name)}\nBalance: ${chalk.hex("178C1F").bold("$" + this.balance)}\nCourses: ${chalk.yellowBright(this.courses)}\n`));
        console.log(`+————————————————————————————+\n`);
    }
}
// main options
async function main() {
    let operation = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: chalk.hex("FFA90A")("Select An Option:\n"),
            choices: [
                chalk.hex("#47FF75").bold(`Add Student`),
                chalk.hex("#46579B").bold(`Enroll Student`),
                chalk.hex("#178C1F").bold(`Pay Student Fees`),
                chalk.hex("#688D84").bold(`Show Student Status`),
                chalk.hex("#ffffff").bold(`Others`),
                chalk.hex("#880718").bold(`Exit Program`)
            ]
        }
    ]);
    if (operation.option === chalk.hex("#47FF75").bold(`Add Student`)) {
        addStudent();
    }
    else if (operation.option === chalk.hex("#46579B").bold(`Enroll Student`)) {
        enrollStudent();
    }
    else if (operation.option === chalk.hex("#178C1F").bold(`Pay Student Fees`)) {
        payStudentfees();
    }
    else if (operation.option === chalk.hex("#688D84").bold(`Show Student Status`)) {
        showStudentStatus();
    }
    else if (operation.option === chalk.hex("#880718").bold(`Exit Program`)) {
        terminate();
    }
    else if (operation.option === chalk.hex("#ffffff").bold(`Others`)) {
        others();
    }
}
;
async function addStudent() {
    let student_info = await inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: chalk.hex("FFA90A")(`Enter Student Name: \n`)
        },
        {
            type: 'number',
            name: 'balance',
            message: chalk.hex("FFA90A")(`Enter Student Balance: \n`)
        }
    ]);
    let test = /^[a-zA-Z]+$/;
    let studentname = student_info.Name.trim();
    if (!test.test(studentname)) {
        console.log(chalk.redBright(`\n\t+————————————————————————————————————————————————————+\n\t|    Please Enter a valid Name -=(Only Letters)=-    |\n\t+————————————————————————————————————————————————————+\t\n`));
    }
    else if (studentname.length > 20 || studentname.length < 3) {
        console.log(chalk.redBright(`\n\t+——————————————————————————————————————————————————————+\n\t|  Student Name Can Only Be in Range 3—20 Characters   |\n\t+——————————————————————————————————————————————————————+\t\n`));
    }
    else if (Number.isNaN(student_info.balance)) {
        console.log(chalk.redBright(`\n\t+—————————————————————————————————+\n\t|   Please Enter a valid Amount   |\n\t+—————————————————————————————————+\t\n`));
    }
    else if (student_info.balance <= 0 && student_info.balance < 100) {
        console.log(chalk.redBright(`\t+————————————————————————————————————————————————+\n\t|  Student Not Must Have Alteast $100 To Enroll  |\n\t+————————————————————————————————————————————————+\t\n`));
    }
    else if (student_info.balance > 300000) {
        console.log(chalk.redBright(`\t+————————————————————————————————————————————————————————————————————————————————+\n\t|   Student Account Limit Reached - Amount Too large - Enrollement Unsuccesful   |\n\t+————————————————————————————————————————————————————————————————————————————————+\t\n`));
    }
    else {
        let ID = student.counter;
        const Student = new student(student_info.Name, student_info.balance);
        studentsArray.push(Student);
        console.log(`\n\t+———————————————————————————————————————————————————————————————+`);
        console.log(chalk.hex('#fc9d4e')(`\n\t\tAdded ${chalk.hex('46579B').bold(student_info.Name)} with Balance ${chalk.hex("178C1F").bold("$" + student_info.balance)} and ID: ${chalk.yellowBright(ID)}`));
        console.log(`\n\t+———————————————————————————————————————————————————————————————+\n`);
    }
    main();
}
;
async function enrollStudent() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }, {
            type: 'list',
            name: 'course',
            message: chalk.hex("FFA90A")(`Select a Course: \n`),
            choices: [chalk.blue("TypeScript"), chalk.yellow("JavaScript"), chalk.magenta("Python"), chalk.bold('Others')]
        }
    ]);
    if (student_info.course === chalk.bold('Others')) {
        let studentinfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'otherCourse',
                message: chalk.hex("FFA90A")(`Enter a Course: \n`)
            }
        ]);
        let condition = await checkid(student_info.ID);
        if (condition === true) {
            studentsArray.some(element => {
                if (element.id === student_info.ID) {
                    element.enroll_course(studentinfo.otherCourse);
                    console.log(`◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n\t${chalk.hex('46579B').bold(element.name)}${chalk.hex('#fc9d4e')(` Successfully Enrolled in `)}${chalk.yellowBright.bold(studentinfo.otherCourse)}\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦`);
                }
            });
        }
        else {
            console.log(condition);
        }
        ;
    }
    else {
        let condition = await checkid(student_info.ID);
        if (condition === true) {
            studentsArray.some(element => {
                if (element.id === student_info.ID) {
                    element.enroll_course(student_info.course);
                    console.log(`◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n\t${chalk.hex('46579B').bold(element.name)}${chalk.hex('#fc9d4e')(` Successfully Enrolled in `)}${chalk.yellowBright.bold(student_info.course)}\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦`);
                }
            });
        }
        else {
            console.log(condition);
        }
        ;
    }
    main();
}
async function payStudentfees() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }, {
            type: 'list',
            name: 'course',
            message: chalk.hex("FFA90A")(`Select a Course To pay Fees for:\n`),
            choices: [chalk.blue("TypeScript"), chalk.yellow("JavaScript"), chalk.magenta("Python"), chalk.bold('Others')]
        }, {
            type: 'list',
            name: 'Amount',
            message: chalk.hex("FFA90A")(`Enter Amount To Pay: \n`),
            choices: ["50", "100", "500", "1000", "5000", "8000", "Others"]
        }
    ]);
    if (student_info.Amount === 'Others') {
        let amount = await inquirer.prompt([
            {
                type: "number",
                name: 'amount',
                message: chalk.hex("FFA90A")(`Enter Amount To Pay: \n`)
            }
        ]);
        if (Number.isNaN(amount.amount) || amount.amount > 10000 || amount.amount <= 0 || amount.amount <= 9) {
            console.log(chalk.redBright(`\t+—————————————————————————————————+\n\t|   Please Enter a valid amount   |\n\t+—————————————————————————————————+\t`));
        }
        else {
            if (student_info.course === chalk.bold('Others')) {
                let studentinfo = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'otherCourse',
                        message: chalk.hex("FFA90A")(`Enter a Course: \n`)
                    }
                ]);
                let condition = await checkid(student_info.ID);
                if (condition === true) {
                    studentsArray.some(element => {
                        if (element.id === student_info.ID) {
                            element.pay_fees(amount.amount, studentinfo.otherCourse);
                        }
                    });
                }
                else {
                    console.log(condition);
                }
            }
            else {
                let condition = await checkid(student_info.ID);
                if (condition === true) {
                    studentsArray.some(element => {
                        if (element.id === student_info.ID) {
                            element.pay_fees(amount.amount, student_info.course);
                        }
                    });
                }
                else {
                    console.log(condition);
                }
            }
        }
    }
    else {
        if (Number.isNaN(student_info.Amount) || student_info.Amount > 10000 || student_info.Amount <= 0 || student_info.Amount <= 9) {
            console.log(chalk.redBright(`\t+—————————————————————————————————+\n\t|   Please Enter a valid Amount   |\n\t+—————————————————————————————————+\t`));
        }
        else {
            if (student_info.course === chalk.bold('Others')) {
                let studentinfo = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'otherCourse',
                        message: chalk.hex("FFA90A")(`Enter a Course: \n`)
                    }
                ]);
                let condition = await checkid(student_info.ID);
                if (condition === true) {
                    studentsArray.some(element => {
                        if (element.id === student_info.ID) {
                            element.pay_fees(student_info.Amount, studentinfo.otherCourse);
                        }
                    });
                }
                else {
                    console.log(condition);
                }
            }
            else {
                let condition = await checkid(student_info.ID);
                if (condition === true) {
                    studentsArray.some(element => {
                        if (element.id === student_info.ID) {
                            element.pay_fees(student_info.Amount, student_info.course);
                        }
                    });
                }
                else {
                    console.log(condition);
                }
            }
        }
    }
    main();
}
function terminate() {
    console.log(chalk.blue(`\n\n\t     _-^+-^+‾                       ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦                         ‾+^-+^-_`));
    console.log(chalk.blue(`\t<==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(`Thanks For Using Mustafa's - Student Management System`)} ≦)o .｡.:*☆ ~~!==>`));
    console.log(chalk.blue(`\t     ‾-∨+-∨+_                       ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦                         _+∨-+∨-‾\n\n`));
}
;
async function checkid(id) {
    if (!studentsArray.some(e => e.id === id)) {
        return chalk.redBright(`\t+————————————————————————————————————————+\n\t|    Student Not Found - Incorrect ID    |\n\t+————————————————————————————————————————+\t`);
    }
    else if (studentsArray.some(element => element.id === id)) {
        return true;
    }
}
//other sub options
async function others() {
    let aadvanceOption = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: chalk.hex("FFA90A")("Select An Option:\n"),
            choices: [
                chalk.hex("#47FF75").bold(`Add balance`),
                chalk.hex("#46579B").bold(`Delete student`),
                chalk.hex("#178C1F").bold(`Delete course`),
                chalk.hex("#688D84").bold(`Student History -=(SYSTEM)=-`),
                chalk.hex("#880718").bold(`←— Back to Main Menu`)
            ]
        }
    ]);
    if (aadvanceOption.option === chalk.hex("#47FF75").bold(`Add balance`)) {
        addBalance();
    }
    else if (aadvanceOption.option === chalk.hex("#46579B").bold(`Delete student`)) {
        deleteAccount();
    }
    else if (aadvanceOption.option === chalk.hex("#178C1F").bold(`Delete course`)) {
        deleteCourses();
    }
    else if (aadvanceOption.option === chalk.hex("#688D84").bold(`Student History -=(SYSTEM)=-`)) {
        showAllStudents();
    }
    else if (aadvanceOption.option === chalk.hex("#880718").bold(`←— Back to Main Menu`)) {
        main();
    }
}
async function addBalance() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }, {
            type: 'number',
            name: 'Balance',
            message: chalk.hex("FFA90A")(`Enter Credit Amount: \n`)
        }
    ]);
    if (Number.isNaN(student_info.Balance) || student_info.Balance <= 0) {
        console.log(chalk.redBright(`\t+—————————————————————————————————+\n\t|   Please Enter a valid Amount   |\n\t+—————————————————————————————————+\t`));
    }
    else if (student_info.Balance > 250000) {
        console.log(chalk.redBright(`\t+————————————————————————————————————+\n\t|  Amount Exceeds The Allowed Limit  |\n\t+————————————————————————————————————+\t`));
    }
    else {
        let condition = await checkid(student_info.ID);
        if (condition === true) {
            studentsArray.some(element => {
                if (element.id === student_info.ID) {
                    element.add_balance(student_info.Balance);
                }
            });
            let question = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'answer',
                    message: chalk.hex("FFA90A")(`Do You Want To View Your Balance: \n`),
                    choices: [chalk.greenBright.bold('Yes'), chalk.redBright('No')]
                }
            ]);
            if (question.answer === chalk.greenBright.bold('Yes')) {
                studentsArray.some(element => {
                    if (element.id === student_info.ID) {
                        element.view_balance();
                    }
                });
            }
        }
        else {
            console.log(condition);
        }
        ;
    }
    others();
}
;
async function deleteAccount() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }
    ]);
    let condition = await checkid(student_info.ID);
    if (condition === true) {
        studentsArray.some(element => {
            if (element.id === student_info.ID) {
                let index = studentsArray.indexOf(element);
                deletedStudentsarray.push(studentsArray[index]);
                studentsArray.splice(index, 1);
                console.log(`\n+————————————————————————————————————————————————————————————————————————+`);
                console.log(chalk.hex('#fc9d4e')(`\t\tDeleted Account '${chalk.hex("178C1F").bold(element.name)}' with ID:${chalk.hex('46579B').bold(element.id)} from Students\t`));
                console.log(`+————————————————————————————————————————————————————————————————————————+\n`);
            }
        });
    }
    else {
        console.log(condition);
    }
    others();
}
;
async function deleteCourses() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }, {
            type: 'list',
            name: 'course',
            message: chalk.hex("FFA90A")(`Select a Course: \n`),
            choices: [chalk.blue("TypeScript"), chalk.yellow("JavaScript"), chalk.magenta("Python"), chalk.bold('Others')]
        }
    ]);
    if (student_info.course === chalk.bold('Others')) {
        let studentinfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'otherCourse',
                message: chalk.hex("FFA90A")(`Enter a Course: \n`)
            }
        ]);
        let condition = await checkid(student_info.ID);
        if (condition === true) {
            studentsArray.some(element => {
                if (element.id === student_info.ID) {
                    element.delete_course(studentinfo.otherCourse);
                }
                ;
            });
        }
        else {
            console.log(condition);
        }
    }
    else {
        let condition = await checkid(student_info.ID);
        if (condition === true) {
            studentsArray.some(element => {
                if (element.id === student_info.ID) {
                    element.delete_course(student_info.course);
                }
                ;
            });
        }
        else {
            console.log(condition);
        }
    }
    others();
}
;
async function showAllStudents() {
    if (studentsArray.length === 0 && deletedStudentsarray.length === 0) {
        console.log(chalk.redBright(`\t+———————————————————————————————————————————+\n\t|     NO STUDENT INFORMATION AVAILABLE     |\n\t+———————————————————————————————————————————+\t`));
    }
    else {
        let question = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: chalk.hex("FFA90A")(`Select Type: \n`),
                choices: [chalk.greenBright.bold('Active Students'), chalk.hex('fc9d4e')('ALL Students'), chalk.redBright('Deleted Students')]
            }
        ]);
        if (question.answer === chalk.greenBright.bold('Active Students')) {
            let count = studentsArray.length;
            console.log(chalk.greenBright.bold(`\n\t\t-::ACTIVE STUDENTS -=(${count})=-::-\n`));
            console.log(chalk.hex("fc9d4e").bold(`\n\t\tName\t `) + ': ' + chalk.blue.bold(`ID\n`));
            studentsArray.forEach((element) => {
                count++;
                if (element.name.length > 0 && element.name.length <= 6) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}\t\t      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length > 6 && element.name.length <= 14) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}\t      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 15) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 16) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}     : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 17) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}    : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 18) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}   : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 19) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}  : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 20) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)} : ${chalk.blue(element.id)}|`);
                }
            });
        }
        else if (question.answer === chalk.hex('fc9d4e')('ALL Students')) {
            let allarray = [...studentsArray, ...deletedStudentsarray];
            let count = allarray.length;
            console.log(chalk.greenBright.bold(`\n\t\t-::ALL STUDENTS -=(${count})=-::-\n`));
            console.log(chalk.hex("fc9d4e").bold(`\n\t\tName\t `) + ': ' + chalk.blue.bold(`ID\n`));
            allarray.forEach((element) => {
                count++;
                if (element.name.length > 0 && element.name.length <= 6) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}\t\t      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length > 6 && element.name.length <= 14) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}\t      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 15) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 16) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}     : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 17) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}    : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 18) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}   : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 19) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}  : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 20) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)} : ${chalk.blue(element.id)}|`);
                }
            });
        }
        else if (question.answer === chalk.redBright('Deleted Students')) {
            let count = deletedStudentsarray.length;
            console.log(chalk.greenBright.bold(`\n\t\t-::DELETED STUDENTS -=(${count})=-::-\n`));
            console.log(chalk.hex("fc9d4e").bold(`\n\t\tName\t `) + ': ' + chalk.blue.bold(`ID\n`));
            deletedStudentsarray.forEach((element) => {
                count++;
                if (element.name.length > 0 && element.name.length <= 6) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}\t\t      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length > 6 && element.name.length <= 14) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}\t      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 15) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}      : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 16) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}     : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 17) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}    : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 18) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}   : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 19) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)}  : ${chalk.blue(element.id)}|`);
                }
                else if (element.name.length === 20) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.name)} : ${chalk.blue(element.id)}|`);
                }
            });
        }
        others();
    }
}
;
//status viewing options
async function showStudentStatus() {
    let choose = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: chalk.hex("FFA90A")("Select An Option:\n"),
            choices: [
                chalk.hex("#47FF75").bold(`Student Status(All Info)`),
                chalk.hex("#178C1F ").bold(`Student Name`),
                chalk.hex("#46579B").bold(`Student Balance`),
                chalk.hex("#688D84 ").bold(`Student Courses`),
                chalk.hex("#880718").bold(`←— Back to Main Menu`)
            ]
        }
    ]);
    if (choose.option === chalk.hex("#47FF75").bold(`Student Status(All Info)`)) {
        showStudentStatusall();
    }
    else if (choose.option === chalk.hex("#178C1F ").bold(`Student Name`)) {
        viewStudentname();
    }
    else if (choose.option === chalk.hex("#46579B").bold(`Student Balance`)) {
        viewStudentBalance();
    }
    else if (choose.option === chalk.hex("#688D84 ").bold(`Student Courses`)) {
        viewStudentCourses();
    }
    else if (choose.option === chalk.hex("#880718").bold(`←— Back to Main Menu`)) {
        main();
    }
}
async function viewStudentname() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }
    ]);
    let condition = await checkid(student_info.ID);
    if (condition === true) {
        studentsArray.some(element => {
            if (element.id === student_info.ID) {
                console.log(`+——————————————————————————————————————+`);
                console.log(chalk.hex('fc9d4e').bold(`\tName: ${chalk.blue(element.name)}`));
                console.log(`+——————————————————————————————————————+`);
            }
        });
    }
    else {
        console.log(condition);
    }
    ;
    showStudentStatus();
}
;
async function viewStudentCourses() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }
    ]);
    let condition = await checkid(student_info.ID);
    if (condition === true) {
        studentsArray.some(element => {
            if (element.id === student_info.ID) {
                console.log(`+——————————————————————————————————————+`);
                console.log(chalk.hex('fc9d4e').bold(`\tCourses: ${chalk.blue(element.courses)}`));
                console.log(`+——————————————————————————————————————+`);
            }
        });
    }
    else {
        console.log(condition);
    }
    ;
    showStudentStatus();
}
;
async function showStudentStatusall() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }
    ]);
    let condition = await checkid(student_info.ID);
    if (condition === true) {
        studentsArray.some(element => {
            if (element.id === student_info.ID) {
                element.display_status();
            }
        });
    }
    else {
        console.log(condition);
    }
    showStudentStatus();
}
async function viewStudentBalance() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }
    ]);
    let condition = await checkid(student_info.ID);
    if (condition === true) {
        studentsArray.some(element => {
            if (element.id === student_info.ID) {
                element.view_balance();
            }
        });
    }
    else {
        console.log(condition);
    }
    ;
    showStudentStatus();
}
;
main();
