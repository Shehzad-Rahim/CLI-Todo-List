#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let loop = true

while(loop){
let addTask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: "What do you want to add in your todos?"
    },
    {
        name: "addmore",
        type: "confirm",
        message: "Do you want to add more todos?",
        default: "false"
    }
]);

todos.push(addTask.todo);
loop = addTask.addmore
console.log(todos);
if(addTask.addmore == false){
    addTask = await inquirer.prompt(
        {
            name: "remove",
            type: "confirm",
            message:"Do you want to delete last todo from list?"
        }
    )
    if(addTask.remove == true){
        todos.pop();
        console.log(todos);
    }else{

        console.log(todos);
    }
}

}


