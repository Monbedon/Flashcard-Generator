var inquirer = require('inquirer');

 function ClozeCard(text, cloze){
 	this.cloze = cloze;
 	this.text = "[cloze] was the first President.";
 	this.printInfo =function(){
 		console.log(this.text)
 	}
}

var cloze = "George Washington";

var brokenCloze = new ClozeCard("This doesn't work");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.");

inquirer.prompt([{
	name:"answer",
	message:"... was the first president."
}]).then(function(res){

	if (firstPresidentCloze.cloze === res.answer){

		cloze.push(answer.text);
		console.log("You did it!");
	}
	else { console.log(brokenCloze);
	}
	firstPresidentCloze.printInfo();
});
 
 
 // var constructFull= function(completeObject){
 // 		completeObject.full = completeObject.full.replace ("[cloze]",
 // 			completeObject.cloze[i]);
 // }