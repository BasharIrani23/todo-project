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
        
      alert (welcomeMessage)
      } 
      
      
      let answers = [];

      function promptQuestion(question) {
        return prompt(question);
      }
      
      function validateAnswer(input) {
        if (input === "" || input === null) {
          answers.push("invalid");
        } else if (input.toLowerCase() === "yes" || input.toLowerCase() === "no") {
          answers.push(input);
        }
      }
      
      function printAnswers() {
        for (let i = 0; i < answers.length; i++) {
          console.log(answers[i]);
        }
      }
      
      validateAnswer(promptQuestion("Do you work?"));
      validateAnswer(promptQuestion("Do you study?"));
      validateAnswer(promptQuestion("Do you like LTUC?"));
      
      printAnswers();