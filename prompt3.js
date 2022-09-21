let userActivities = prompt("Are you scared of stingrays?");

if (userActivities.toLocaleLowerCase() == "yes") {
    document.write("You should give a try to the third option then!");

}   else if (userActivities.toLocaleLowerCase() == "no") {
    document.write("You should choose the first activity then!");
 
}   else { 
    document.write("You can wait on the hammock!")
}
