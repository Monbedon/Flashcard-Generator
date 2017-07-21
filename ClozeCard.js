var inquirer = require('inquirer');

 function ClozeCard(text, cloze){
 	this.text = text;
 	this.cloze = cloze;
 	this.partial = "[cloze] was the first President";
 }

var cloze = "George Washington";


inquirer.prompt({
	name:"cloze",
	message:"Enter first presidents first and last name:"
}).then(function(answer){
	cloze.push(answer.partial);
	var ClozeCard = new ClozeCard(text,cloze);
	console.log(ClozeCard);


})
 

 var constructPartial= function(completeObject){
 	c
 }