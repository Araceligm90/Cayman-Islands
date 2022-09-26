
function askName(){
    let userName = prompt("What is your name?");
    document.write("That is a beautiful name!");
};


// function askName(){
   // let name = prompt("What is your name?");
    // let message;
    
    // document.write("That is a beautiful name!");
    //return message;
    // };


    // let text = "Have you ever been to The Caribbean? Press OK if you have or Cancel if you haven't"

// if (confirm(text) == true) {
   // document.write("And what about the Cayman Islands?");   
// } else {
   // document.write("You should try and get there on your next vacation then!")
// }

function askCaribbean(){
    let text = prompt("Have you ever been to The Caribbean? Press OK if you have or Cancel if you haven't");
    let message;
    
    if (text != null) {
        message = "And what about the Cayman Islands?";  
    } else {
        message = "You should try and get there on your next vacation then!";
    }
    return document.write(message);
    };


function askActivities(){
    let userActivities = prompt("Are you scared of stingrays?");
    let greeting;  
        
     if(userActivities.toLowerCase() == "yes"){
        greeting = "You should give a try to the third option then!";
     } else if (userActivities.toLowerCase() == "no"){
        greeting = "You should choose the first activity then!";
    } else {
        greeting = "You can wait on the hammock!";
    }
        return document.write(greeting);
     };
    

      
  
// function guessNumber() {
   // let number = prompt("How many stingrays are there in the picture?");
    
     //   while (number != 11) {
       //     answer = prompt("Guess a number between 10 and 12 ;)");
         //   if (number != 11) {
           //     alert("Try harder!");
            //} else {
              //  alert("You are correct!");
            // }
        //}
    // }


function showPic() {
    let userNum = prompt("How many times would you like to see the coolest picture?");
    for(let i = 0; i < userNum; i++){
        document.write("<img src= 'stingrays-boat.jpg' style='width:300px'; />")
    }
}


function guessNumber() {
    let answer;

    while (answer != 3) {
        answer = prompt('Guess how many islands are there in the Cayman Islands from 1-5');
        if (answer !=3) {
            alert('Try again!');
        } else {
            alert('You are correct!');
        }
    }
}

