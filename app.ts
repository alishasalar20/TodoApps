import inquirer from "inquirer"

let todos =[];
let condition = true

while(condition)

{
let todoQuestions = await inquirer.prompt(
    [{
      name:"firstquestion",
      type:"input",
      message:"would you like to add in you todos?"

    },
    {
        name:"secondquestion",
        type:"confirm",
        message:"would you like to add more in your todos?",
        default:"true",
    }]
);
todos.push(todoQuestions.firstquestion)
console.log(todos)
condition = todoQuestions.secondquestion
  }