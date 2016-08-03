var beginningScenarios = [ "You wake up in a hospital. It is very quiet. You tiptoe to the door and peek out. " + "You see a narrow hallway leading to a staircase." ];
    function play (){
function randomNumber(range) {
    return Math.round(Math.random() * range);
}

alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

var weaponList = ["RubberGoose", "Crossbow", "RubberDuck", "Wire"];

var weapon = weaponList[randomNumber(weaponList.length - 1)];
alert("Being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you hear some growls and grab a " + weapon + ".");

alert("Suddenly a zombie burts through a door! You ready your " + weapon + " and advance towards the zombie.");

var survival = randomNumber(2);
    
if(survival === 0) {
    alert("The zombie bites you. As you start to see the world fade away right before your eyes.");
}   else if (survival > 0){
    alert("You killed the zombie using your" + " " + weapon + ". You have survived for now...");
}
}



