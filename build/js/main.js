#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.blue(`\n\n\t     _-^+-^+‾       ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦       ‾+^-+^-_`));
console.log(chalk.blue(`\t  <==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(`Welcome To Mustafa's - Student Management System`)} ≦)o .｡.:*☆ ~~!==>`));
console.log(chalk.blue(`\t     ‾-∨+-∨+_       ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦       _+∨-+∨-‾\n\n`));
//main arrays and student class
let count;
let democount = 0;
let condition = true;
do {
    count = Math.floor(Math.random() * 100000 - 1);
    if (count >= 50000 && count <= 60000) {
        condition = false;
    }
} while (condition);
const studentsArray = [];
const deletedStudentsarray = [];
class student {
    static counter = count;
    id;
    name;
    courses;
    delcourses;
    balance;
    constructor(studentname, balance) {
        this.name = studentname;
        this.id = student.counter++;
        this.courses = [];
        this.delcourses = [];
        this.balance = balance;
    }
    add_balance(balance) {
        this.balance += balance;
        if (this.balance > 500000) {
            this.balance -= balance;
            console.log(chalk.redBright(`\t+————————————————————————————————————————————————————————————————————————————————————+\n\t|   Student Account Limit Reached(${chalk.green.bold(500000)})) - Amount Too large - Credit Unsuccesful   |\n\t+————————————————————————————————————————————————————————————————————————————————————+\t\n`));
            others();
        }
        else {
            console.log(`\n+—————————————————————————————————————————————————————————————————————————————————+`);
            console.log(chalk.hex('#fc9d4e')(`\tBalance of ${chalk.hex("178C1F").bold("$" + balance)} has been Credited to ${chalk.hex('46579B').bold(this.name)}\t`));
            console.log(`+—————————————————————————————————————————————————————————————————————————————————+\n`);
        }
    }
    change_Name(name) {
        let namechangefees = 10;
        if (this.name === name) {
            console.log(chalk.redBright(`\t+——————————————————————————————————————————————————————+\n\t|    Student Name Cannot Be Renamed To Current Name    |\n\t+——————————————————————————————————————————————————————+\t\n`));
        }
        else if (this.balance >= namechangefees) {
            this.balance -= namechangefees;
            console.log(`◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n\t${chalk.hex('46579B').bold(this.name)}${chalk.hex('#fc9d4e')(` Successfully Changed To ${chalk.yellowBright.bold(name)} With Fee $${chalk.greenBright(namechangefees)}`)}\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦`);
            this.name = name;
        }
        else {
            console.log(chalk.redBright(`\t+———————————————————————————————————————————————————————————————+\n\t|    Student Dosen't have the Amount Required to Change Name    |\n\t+———————————————————————————————————————————————————————————————+\t\n`));
        }
    }
    remove_balance(balance) {
        this.balance -= balance;
        if (this.balance < 0) {
            this.balance += balance;
            console.log(chalk.redBright(`\n\t+——————————————————————————————————————————————————————————————————————————+\n\t|   Student Account Dosen't Have The Required Amount - Dedit Unsuccesful   |\n\t+——————————————————————————————————————————————————————————————————————————+\t\n`));
        }
        else {
            console.log(`\n+——————————————————————————————————————————————————————————————————————————————————+`);
            console.log(chalk.hex('#fc9d4e')(`\tBalance of ${chalk.hex("178C1F").bold("$" + balance)} has been Debited From ${chalk.hex('46579B').bold(this.name)}\t`));
            console.log(`+——————————————————————————————————————————————————————————————————————————————————+\n`);
        }
    }
    deletebalance() {
        this.balance = 0;
    }
    delete_course(course) {
        if (this.courses.includes(course)) {
            this.delcourses.push(course);
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
    view_delcourse() {
        console.log(`\n+———————————————————————————————————————————————————————————————+`);
        console.log(chalk.hex('#fc9d4e')(`\t\tDeleted Courses of ${chalk.hex('46579B').bold(this.name)}: '${chalk.hex("178C1F").bold(this.delcourses)}'\t`));
        console.log(`+———————————————————————————————————————————————————————————————+\n`);
    }
    enroll_course(...course) {
        let enrollementfees = 50;
        if (this.balance >= enrollementfees) {
            this.balance -= enrollementfees;
            this.courses.push(...course);
            console.log(`◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n\t${chalk.hex('46579B').bold(this.name)}${chalk.hex('#fc9d4e')(` Successfully Enrolled in ${chalk.yellowBright.bold(...course)} with Fee $${chalk.green(enrollementfees)}`)}\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦`);
        }
        else {
            console.log(chalk.redBright(`\t+——————————————————————————————————————————————————————————+\n\t|    Student Dosen't have the Amount Required to Enroll    |\n\t+——————————————————————————————————————————————————————————+\t\n`));
        }
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
        await addStudent();
        main();
    }
    else if (operation.option === chalk.hex("#46579B").bold(`Enroll Student`)) {
        await enrollStudent();
        main();
    }
    else if (operation.option === chalk.hex("#178C1F").bold(`Pay Student Fees`)) {
        await payStudentfees();
        main();
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
        console.log(chalk.redBright(`\t+————————————————————————————————————————————————+\n\t|    Student Must Have Alteast $100 To Enlist    |\n\t+————————————————————————————————————————————————+\t\n`));
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
                }
            });
        }
        else {
            console.log(condition);
        }
        ;
    }
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
                chalk.hex("#47FF75").bold(`Remove balance`),
                chalk.hex("#46579B").bold(`Change Name`),
                chalk.hex("#46579B").bold(`Delete student`),
                chalk.hex("#178C1F").bold(`Delete course`),
                chalk.hex("#178C1F").bold(`Show Deleted course`),
                chalk.hex("#688D84").bold(`Student History -=(SYSTEM)=-`),
                chalk.hex("#688D84").bold(`Create Demo Students -=(EXPERIMENTAL)=-`),
                chalk.hex("#880718").bold(`←— Back to Main Menu`),
            ]
        }
    ]);
    if (aadvanceOption.option === chalk.hex("#47FF75").bold(`Add balance`)) {
        await addBalance();
        others();
    }
    else if (aadvanceOption.option === chalk.hex("#47FF75").bold(`Remove balance`)) {
        await RemoveBalance();
        others();
    }
    else if (aadvanceOption.option === chalk.hex("#46579B").bold(`Change Name`)) {
        await changeName();
        others();
    }
    else if (aadvanceOption.option === chalk.hex("#46579B").bold(`Delete student`)) {
        await deleteAccount();
        others();
    }
    else if (aadvanceOption.option === chalk.hex("#178C1F").bold(`Delete course`)) {
        await deleteCourses();
        others();
    }
    else if (aadvanceOption.option === chalk.hex("#178C1F").bold(`Show Deleted course`)) {
        await deletedCourses();
        others();
    }
    else if (aadvanceOption.option === chalk.hex("#688D84").bold(`Student History -=(SYSTEM)=-`)) {
        showAllStudents();
    }
    else if (aadvanceOption.option === chalk.hex("#688D84").bold(`Create Demo Students -=(EXPERIMENTAL)=-`)) {
        let amount = await inquirer.prompt([{
                type: "number",
                name: 'count',
                message: chalk.hex('FFA90A')('Enter the Number of Students to Generate: ')
            }]);
        await demoStudents(amount.count);
        others();
    }
    else if (aadvanceOption.option === chalk.hex("#880718").bold(`←— Back to Main Menu`)) {
        main();
    }
}
async function demoStudents(i) {
    if (democount >= 100) {
        console.log(chalk.redBright(`\n\t+———————————————————————————————————————————————————————+\n\t|         Demo Students are only limited to 100         |\n\t+———————————————————————————————————————————————————————+\t\n`));
    }
    else if (i < 0) {
        console.log(chalk.redBright(`\n\t+———————————————————————————————————————————————————————+\n\t|             Enter A valid Amount (1-100)              |\n\t+———————————————————————————————————————————————————————+\t\n`));
    }
    else if (Number.isNaN(i)) {
        console.log(chalk.redBright(`\n\t+———————————————————————————————————————————————————————+\n\t|             Enter A valid Number (1-100)              |\n\t+———————————————————————————————————————————————————————+\t\n`));
    }
    else {
        let A = 'C';
        let b = 'React';
        let c = 'CSS';
        for (let a = 1; a <= i; a++) {
            let coursenum = Math.floor(Math.random() * 3 + 1);
            democount++;
            console.log(chalk.greenBright.bold('Generating....'));
            let ID = student.counter;
            const demoStudent = new student(`demoStudent${democount}`, (a * i * 100 / 10));
            if (coursenum === 1) {
                let num = Math.floor(Math.random() * 3 + 1);
                if (num == 1) {
                    A = 'C++';
                }
                else if (num == 2) {
                    A = 'Java';
                }
                else if (num == 3) {
                    A = 'CSS';
                }
                demoStudent.enroll_course(A);
            }
            else if (coursenum === 2) {
                let num = Math.floor(Math.random() * 3 + 1);
                if (num == 1) {
                    A = 'C++';
                    b = 'C';
                }
                else if (num == 2) {
                    A = 'React';
                    b = 'CSS';
                }
                else if (num == 3) {
                    A = 'Java';
                    b = 'C##';
                }
                demoStudent.enroll_course(A, b);
            }
            else if (coursenum === 3) {
                let num = Math.floor(Math.random() * 3 + 1);
                if (num == 1) {
                    A = 'Java';
                    b = 'C';
                    c = 'React';
                }
                else if (num == 2) {
                    A = 'React';
                    b = 'CSS';
                    c = 'React';
                }
                else if (num == 3) {
                    A = 'React';
                    b = 'C##';
                    c = 'CSS';
                }
                demoStudent.enroll_course(A, b, c);
            }
            console.log(`\n\t+———————————————————————————————————————————————————————————————+`);
            console.log(chalk.hex('#fc9d4e')(`\n\t\tAdded ${chalk.hex('46579B').bold(`demoStudent${democount}`)} with Balance ${chalk.hex("178C1F").bold("$" + (a * i * 100 / 10))} and ID: ${chalk.yellowBright(ID)}`));
            console.log(`\n\t+———————————————————————————————————————————————————————————————+\n`);
            studentsArray.push(demoStudent);
            if (democount >= 100) {
                console.log(chalk.redBright(`\n\t+———————————————————————————————————————————————————————+\n\t|          -=({Demo Students Limit Reached})=-          |\n\t+———————————————————————————————————————————————————————+\t\n`));
                break;
            }
        }
    }
}
async function demoName(name) {
    for (let i = 1; i <= 200; i++) {
        if (name === `demoStudent` + i) {
            democount--;
            console.log(chalk.green.bold('\n\t+——————————————————————————————+\n\t|  New Space for demo student  |\n\t+——————————————————————————————+'));
        }
    }
}
async function changeName() {
    let student_info = await inquirer.prompt([
        {
            type: "number",
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }, {
            type: 'input',
            name: 'Name',
            message: chalk.hex("FFA90A")(`Enter New Name for Student: \n`)
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
    else {
        let condition = await checkid(student_info.ID);
        if (condition === true) {
            studentsArray.some(element => {
                if (element.id === student_info.ID) {
                    demoName(element.name);
                    element.change_Name(studentname);
                }
            });
        }
        else {
            console.log(condition);
        }
        ;
    }
    ;
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
    else if (student_info.Balance > 200000) {
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
                studentsArray.some((element) => {
                    if (element.id === student_info.ID) {
                        element.view_balance();
                    }
                });
            }
            else {
                others();
            }
            ;
        }
        else {
            console.log(condition);
        }
        ;
    }
}
;
async function RemoveBalance() {
    let student_info = await inquirer.prompt([
        {
            type: 'number',
            name: 'ID',
            message: chalk.hex("FFA90A")(`Enter Student ID: \n`)
        }, {
            type: 'number',
            name: 'Balance',
            message: chalk.hex("FFA90A")(`Enter Debit Amount: \n`)
        }
    ]);
    if (Number.isNaN(student_info.Balance) || student_info.Balance <= 0) {
        console.log(chalk.redBright(`\t+—————————————————————————————————+\n\t|   Please Enter a valid Amount   |\n\t+—————————————————————————————————+\t`));
    }
    else if (student_info.Balance > 200000) {
        console.log(chalk.redBright(`\t+————————————————————————————————————+\n\t|  Amount Exceeds The Allowed Limit  |\n\t+————————————————————————————————————+\t`));
    }
    else {
        let condition = await checkid(student_info.ID);
        if (condition === true) {
            studentsArray.some(element => {
                if (element.id === student_info.ID) {
                    element.remove_balance(student_info.Balance);
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
                studentsArray.some((element) => {
                    if (element.id === student_info.ID) {
                        element.view_balance();
                    }
                });
            }
            ;
        }
        else {
            console.log(condition);
        }
        ;
    }
    ;
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
                demoName(element.name);
                let index = studentsArray.indexOf(element);
                element.deletebalance();
                deletedStudentsarray.push(studentsArray[index]);
                studentsArray.splice(index, 1);
                console.log(`\n+—————————————————————————————————————————————————————————————————————————————————————————————+`);
                console.log(chalk.hex('#fc9d4e')(`\t\tDeleted Account '${chalk.hex("178C1F").bold(element.name)}' with ID:${chalk.hex('46579B').bold(element.id)} from Students\t`));
                console.log(`+—————————————————————————————————————————————————————————————————————————————————————————————+\n`);
            }
        });
    }
    else {
        console.log(condition);
    }
    ;
}
;
async function deletedCourses() {
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
                element.view_delcourse();
            }
            ;
        });
    }
    else {
        console.log(condition);
    }
    ;
}
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
    ;
}
;
async function showAllStudents() {
    if (studentsArray.length === 0 && deletedStudentsarray.length === 0) {
        console.log(chalk.redBright(`\t+————————————————————————————————————————————+\n\t|     NO STUDENT INFORMATION AVAILABLE     |\n\t+————————————————————————————————————————————+\t`));
        others();
    }
    else {
        let question = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: chalk.hex("FFA90A")(`Select Type: \n`),
                choices: [chalk.greenBright.bold('Students Accounts'), chalk.hex('fc9d4e')('Students Courses'), chalk.redBright('Show Students Balance'), "All Student info", chalk.red.bold(`←— Back to Others`)]
            }
        ]);
        if (question.answer === chalk.greenBright.bold('Students Accounts')) {
            let question = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'answer',
                    message: chalk.hex("FFA90A")(`Select Type: \n`),
                    choices: [chalk.greenBright.bold('Active Students'), chalk.hex('fc9d4e')('ALL Students'), chalk.redBright('Deleted Students'), chalk.red.bold(`←— Back to Student History -=(SYSTEM)=-`)]
                }
            ]);
            if (question.answer === chalk.greenBright.bold('Active Students')) {
                let count = studentsArray.length;
                console.log(chalk.greenBright.bold(`\n\t\t-::ACTIVE STUDENTS -=(${chalk.greenBright(count)})=-::-\n`));
                console.log(chalk.hex("fc9d4e").bold(`\n\t\tName          `) + ':  ' + chalk.blue.bold(`ID\n`));
                studentsArray.forEach((element) => {
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
                showAllStudents();
            }
            else if (question.answer === chalk.hex('fc9d4e')('ALL Students')) {
                let allarray = [...studentsArray, ...deletedStudentsarray];
                let count = allarray.length;
                console.log(chalk.greenBright.bold(`\n\t\t-::ALL STUDENTS -=(${chalk.greenBright(count)})=-::-\n`));
                console.log(chalk.hex("fc9d4e").bold(`\n\t\tName          `) + ':  ' + chalk.blue.bold(`ID\n`));
                allarray.forEach((element) => {
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
                showAllStudents();
            }
            else if (question.answer === chalk.redBright('Deleted Students')) {
                let count = deletedStudentsarray.length;
                console.log(chalk.greenBright.bold(`\n\t\t-::DELETED STUDENTS -=(${chalk.greenBright(count)})=-::-\n`));
                console.log(chalk.hex("fc9d4e").bold(`\n\t\tName          `) + ':  ' + chalk.blue.bold(`ID\n`));
                deletedStudentsarray.forEach((element) => {
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
                showAllStudents();
            }
            else {
                showAllStudents();
            }
        }
        else if (question.answer === chalk.hex('fc9d4e')('Students Courses')) {
            let question = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'answer',
                    message: chalk.hex("FFA90A")(`Select Type: \n`),
                    choices: [chalk.greenBright.bold('Active Cources'), chalk.hex('fc9d4e')('ALL Courses'), chalk.redBright('Deleted Courses'), chalk.red.bold(`←— Back to Student History -=(SYSTEM)=-`)]
                }
            ]);
            if (question.answer === chalk.greenBright.bold('Active Cources')) {
                let count = studentsArray.length;
                console.log(chalk.greenBright.bold(`\n\t\t-::ACTIVE STUDENT-=(${chalk.greenBright(count)})=- COURSES::-\n`));
                console.log(chalk.hex("fc9d4e").bold(`\n\t   ID   :\t Name\t    `) + ' :  ' + chalk.blue.bold(`COURSES\n`));
                studentsArray.forEach((element) => {
                    if (element.name.length > 0 && element.name.length <= 6) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : ${chalk.blue(element.courses)}`);
                    }
                    else if (element.name.length > 6 && element.name.length <= 14) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : ${chalk.blue(element.courses)}`);
                    }
                    else if (element.name.length === 15) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : ${chalk.blue(element.courses)}`);
                    }
                    else if (element.name.length === 16) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : ${chalk.blue(element.courses)}`);
                    }
                    else if (element.name.length === 17) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : ${chalk.blue(element.courses)}`);
                    }
                    else if (element.name.length === 18) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : ${chalk.blue(element.courses)}`);
                    }
                    else if (element.name.length === 19) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : ${chalk.blue(element.courses)}`);
                    }
                    else if (element.name.length === 20) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : ${chalk.blue(element.courses)}`);
                    }
                });
                showAllStudents();
            }
            else if (question.answer === chalk.hex('fc9d4e')('ALL Courses')) {
                let count = studentsArray.length;
                console.log(chalk.greenBright.bold(`\n\t\t-::ALL STUDENT-=(${chalk.greenBright(count)})=- COURSES::-\n`));
                console.log(chalk.hex("fc9d4e").bold(`\n\t   ID   :\t Name\t    `) + ' :  ' + chalk.blue.bold(`COURSES\n`));
                studentsArray.forEach((element) => {
                    if (element.name.length > 0 && element.name.length <= 6) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.name.length > 6 && element.name.length <= 14) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.name.length === 15) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.name.length === 16) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.name.length === 17) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.name.length === 18) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.name.length === 19) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.name.length === 20) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                });
                showAllStudents();
            }
            else if (question.answer === chalk.redBright('Deleted Courses')) {
                let count = studentsArray.length;
                console.log(chalk.greenBright.bold(`\n\t\t-::DELETED STUDENT-=(${chalk.greenBright(count)})=- COURSES::-\n`));
                console.log(chalk.hex("fc9d4e").bold(`\n\t   ID   :\t Name\t    `) + ' :  ' + chalk.blue.bold(`COURSES\n`));
                studentsArray.forEach((element) => {
                    if (element.name.length > 0 && element.name.length <= 6) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : ${chalk.blue(element.delcourses)}`);
                    }
                    else if (element.name.length > 6 && element.name.length <= 14) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : ${chalk.blue(element.delcourses)}`);
                    }
                    else if (element.name.length === 15) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : ${chalk.blue(element.delcourses)}`);
                    }
                    else if (element.name.length === 16) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : ${chalk.blue(element.delcourses)}`);
                    }
                    else if (element.name.length === 17) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : ${chalk.blue(element.delcourses)}`);
                    }
                    else if (element.name.length === 18) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : ${chalk.blue(element.delcourses)}`);
                    }
                    else if (element.name.length === 19) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : ${chalk.blue(element.delcourses)}`);
                    }
                    else if (element.name.length === 20) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : ${chalk.blue(element.delcourses)}`);
                    }
                });
                showAllStudents();
            }
            else {
                showAllStudents();
            }
        }
        else if (question.answer === chalk.redBright('Show Students Balance')) {
            let count = studentsArray.length;
            console.log(chalk.greenBright.bold(`\n\t\t-::ACTIVE STUDENT-=(${chalk.greenBright(count)})=- BALANCE::-\n`));
            console.log(chalk.hex("fc9d4e").bold(`\n\t   ID `) + ': ' + chalk.blue.bold(`Balance\n`));
            studentsArray.forEach((element) => {
                if (element.balance < 10) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.id)} : $${chalk.blue(element.balance)}      |`);
                }
                else if (element.balance < 100) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.id)} : $${chalk.blue(element.balance)}     |`);
                }
                else if (element.balance < 1000) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.id)} : $${chalk.blue(element.balance)}    |`);
                }
                else if (element.balance < 10000) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.id)} : $${chalk.blue(element.balance)}   |`);
                }
                else if (element.balance < 100000) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.id)} : $${chalk.blue(element.balance)}  |`);
                }
                else if (element.balance < 1000000) {
                    console.log(`\t|${chalk.hex('fc9d4e').bold(element.id)} : $${chalk.blue(element.balance)} |`);
                }
            });
            showAllStudents();
        }
        else if (question.answer === chalk.red.bold(`←— Back to Others`)) {
            others();
        }
        else {
            let allarray = [...studentsArray, ...deletedStudentsarray];
            let count = allarray.length;
            console.log(chalk.greenBright.bold(`\n\t\t-::ALL STUDENTS-=(${chalk.greenBright(count)})=- INFO ::-\n`));
            console.log(chalk.blue.bold(`\t  ID   : `) + chalk.hex("fc9d4e").bold(`        NAME         : `) + chalk.blue.bold(`BALANCE  : COURSES`));
            allarray.forEach((element) => {
                if (element.name.length > 0 && element.name.length <= 6) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t\t      : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
                else if (element.name.length > 6 && element.name.length <= 14) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}\t      : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
                else if (element.name.length === 15) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}      : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
                else if (element.name.length === 16) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}     : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
                else if (element.name.length === 17) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}    : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
                else if (element.name.length === 18) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}   : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
                else if (element.name.length === 19) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)}  : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
                else if (element.name.length === 20) {
                    if (element.balance < 10) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : $${chalk.blue(element.balance)}       : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : $${chalk.blue(element.balance)}      : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : $${chalk.blue(element.balance)}     : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 10000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : $${chalk.blue(element.balance)}    : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 100000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : $${chalk.blue(element.balance)}   : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                    else if (element.balance < 1000000) {
                        console.log(`\t|${chalk.blue(element.id)} : ${chalk.hex('fc9d4e').bold(element.name)} : $${chalk.blue(element.balance)}  : ${chalk.blue(element.courses, element.delcourses)}`);
                    }
                }
            });
            showAllStudents();
        }
        ;
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
        await showStudentStatusall();
        showStudentStatus();
    }
    else if (choose.option === chalk.hex("#178C1F ").bold(`Student Name`)) {
        await viewStudentname();
        showStudentStatus();
    }
    else if (choose.option === chalk.hex("#46579B").bold(`Student Balance`)) {
        await viewStudentBalance();
        showStudentStatus();
    }
    else if (choose.option === chalk.hex("#688D84 ").bold(`Student Courses`)) {
        await viewStudentCourses();
        showStudentStatus();
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
}
;
main();
