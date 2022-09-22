// let userActivities = prompt("Are you scared of stingrays?");

// if (userActivities.toLocaleLowerCase() == "yes") {
   // document.write("You should give a try to the third option then!");

// }   else if (userActivities.toLocaleLowerCase() == "no") {
    // document.write("You should choose the first activity then!");
 
// }   else { 
   // document.write("You can wait on the hammock!")
//}

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
    return greeting;
    };

    let greeting = askActivities();
    document.write(greeting);

