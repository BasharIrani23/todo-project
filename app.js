let name = prompt("Please enter your name:");
let gender =prompt("Please enter your gender");
gender = gender.toLowerCase();
let age=prompt("Please enter your age");
  if (age<=0) {
alert("Enter your real age");}

var skipWelcome = confirm("Do you want to skip the welcoming message?");

if (skipWelcome) {
  console.log("Welcome message has been skipped");
} else {
      var welcomeMessage = "";
      if (gender === "male") {
        welcomeMessage = "Welcome, Mr. " + name + "!";
      } else if (gender === "female") {
        welcomeMessage = "Welcome, Ms. " + name + "!";
      }
        else {

          welcomeMessage="Welcome " + name + "!";
 
        }
      alert (welcomeMessage)
      } 
      
      
let answers=[];

function askQuestion(question) {
  let input=prompt(question) 

if (input==="" || input === null)
{
  alert("Please enter a valid answer");
}
else if(input.toLowerCase()==="yes" || input.toLocaleLowerCase() === "no") {
  answers.push(input);
  return input;
}}

askQuestion("Do you work?");
askQuestion("Do you study?");
askQuestion("Do you like LTUC?");

for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}