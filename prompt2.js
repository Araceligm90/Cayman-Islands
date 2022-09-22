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
    return message;
    };

    let message = askCaribbean();
    document.write(message);
