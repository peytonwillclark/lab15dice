window.onload = function(){
	var dices= [];
    var counter=0;	
    var Dice = function() {
    this.number = getRandomNumber();
    this.div = document.createElement('div');
	this.div.id = counter++;
    var h1 = document.createElement('h1');
    h1.innerHTML = this.number;
	this.h1 = h1;
    var h3 = document.createElement('h3');
    h3.innerHTML = "Dice";
	this.div.appendChild(h3);
    this.div.appendChild(h1);
	this.div.className += ' dicediv';
    document.getElementById("diceholder").appendChild(this.div);

    this.div.ondblclick = function(){
		document.getElementById(this.id).remove();
		for (var i =0; i < dices.length ; i++) {
			if(dices[i].div.id  == this.id){
				 dices.splice(i, 1);
			}
		 }
	}	
}
Dice.prototype.roll = function() {
    console.log('Hello, my name is ' + this.h1);
	this.h1.innerHTML = getRandomNumber(); 
}

function getRandomNumber(){
	return Math.floor(Math.random()*6)+1;
}

document.getElementById("spawn").onclick =function(){ 
		 var d = new Dice();
		 dices.push(d);

};

document.getElementById("roll").onclick =function(){
		 for (var i =0; i < dices.length ; i++) {
			 dices[i].roll();
		 }
};
document.getElementById("sum").onclick =function(){
	      var sum = 0;
		 for (var i =0; i < dices.length ; i++) {
			sum += parseInt(dices[i].h1.innerHTML);
		 }
		document.getElementById('totaldie').innerHTML =("TOTAL DIE " + sum);
};
}