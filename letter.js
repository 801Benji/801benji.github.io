
function beCount(){
var phrase = prompt("Which sentence would you like to examine for the letter b"); 
if ( typeof(phrase) != "string") {
    alert("That is not a valid phrase!");
    return false; 
} else {
    var bCount = 0;
    for(var index = 0; index < phrase.length; index++)
    if(phrase.charAt(index) == 'b' || phrase.charAt(index) == 'B') {
        bCount++; 
    }
alert("There are " + bCount + "B's in " + phrase + ".");
   return true;  
}

}