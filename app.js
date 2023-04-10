let name = prompt("Please enter your name:");
alert("Hello, " + name + "! Welcome!");
let gender =prompt("Please enter your gender");
gender = gender.toLowerCase();
if (gender === "male" || gender === "female") {
   
    alert("Your gender is: " + gender);
  } else {
   
    alert("Invalid input. Please enter either 'male' or 'female'.");
  }


  let age=prompt("Please enter your age");
  if (age>0) {
alert("Your age is " + age);



  }
  else {alert("Your age is less than or equal 0")}

  var skipWelcome = confirm("Do you want to skip the welcoming message?");

if (skipWelcome) {
  alert("Welcome message skipped!");
} else {
    var userName = prompt("Please enter your name:");
      var welcomeMessage = "";
      if (gender === "male") {
        welcomeMessage = "Welcome, Mr. " + userName + "!";
      } else if (gender === "female") {
        welcomeMessage = "Welcome, Ms. " + userName + "!";
      } else {
        welcomeMessage = "Welcome, " + userName + "!";
      }
      alert (welcomeMessage)
}



  
 
  
  
