
 var inquirer = require('inquirer');

 function BasicCard(front, back){
 	this.front = front;
 	this.back = back;

 	this.printInfo= function(){
 		console.log("Front: "+this.front+"\nBack: "+this.back);
 	}
 }
 
 var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

	inquirer.prompt([{
		name: "answer",
		message: "Who was the first president of the United States?"
	}]).then(function(res){
		
		if (firstPresident.back.toLowerCase() === res.answer.toLowerCase()){
			console.log("CORRECT!");
		}
		firstPresident.printInfo();

	})

module.exports = BasicCard;
