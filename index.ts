// import inquirer from "inquirer";

// let todos: string[] = [];
// let loop = true;

// while(loop){
//     const answer : {
//         todo: string,
//         addmore: boolean
//     } = await inquirer.prompt([
//         {
//             name: "todo",
//             type: "input",
//             message:"What do you want to add in your todo?"
//         },
//         {
//             name: "addmore",
//             type: "confirm",
//             message: "Do you want to add more todo?",
//             default: false
//         }
//     ])
//     const {todo, addmore} = answer;
//     loop = addmore
//     console.log(answer);
    
//     if(todo){
//         todos.push(todo)
//     }else{
//         console.log("Kindly add valid input");
        
//     }
// };

// if(todos.length > 0){
//     console.log("Your todo list:");
    
//     todos.forEach(todo => {
//         console.log(todo);
        
//     })
// }else{
//     console.log("No todos found");
    
// }

// let fruitChat = ["Banana", "Mango", "Apple"];

// console.log(fruitChat);

// fruitChat.push("Melon")
// console.log(fruitChat);

// fruitChat.pop();
// console.log(fruitChat);

// fruitChat = fruitChat.concat(["Graphes", "Orange","Pineapple"]);
// console.log(fruitChat);

// While loop;

let days = 1;

while(days <= 10){
    console.log(days,"Fasting");
    console.log(days,"Five times prayers");
    days++
}