import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1122;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code ");
    let OperationsAns = await inquirer.prompt([
        {
            name: "Operations",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Balance"],
        },
    ]);
    if (OperationsAns.Operations = "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your Remaining Balance is " + myBalance);
    }
    ;
}
else {
    console.log("Wrong Pin Code");
}
;
