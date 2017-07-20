
// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 
 var inquirer = require('inquirer');

 function BasicCard(front, back){
 	this.front = front;
 	this.back = back;

 	this.printInfo= function(){
 		console.log("Front: "+this.front+ "\nBack: "+this.back);
 	}
 }

	inquirer.prompt([{
		name: "front"
		message: "Who was the first president of the United States?"
	},{
		name:"back"
		message:"George Washington"
	}]).then(function(answers){
		var firstPresident = new BasicCard(answers.front, answers.back);
		firstPresident.printInfo();
	})

}

module.exports = BasicCard;