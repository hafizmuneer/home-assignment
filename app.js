function cricketer(name , number , category){
    this.name = name;
    this.number = number;
    this.category = category;
}

cricketer.prototype.mydetails = function(){
    console.log(`name ${this.name}`);
   console.log( `category ${this.category}`);
   console.log( `number ${this.number}`);
}

let cricketer1 = new cricketer("babar azam" , 56 , "batsman")
let cricketer2 = new cricketer("mohammad amir" , 5 , "bowler")
let cricketer3 = new cricketer("mohammad rizwan" , 16 , "wicket-keeper")

cricketer.prototype.updatedetails = function(newNumber){
    this.number = newNumber;
}

cricketer2.updatedetails(20);
console.log(cricketer1.mydetails === cricketer2.mydetails);

console.log("number" in cricketer1);
console.log("name" in cricketer2);
console.log(cricketer1.hasOwnProperty("name"));
console.log(typeof cricketer1.number);
console.log(typeof cricketer1.mydetails);

cricketer.prototype.team = "pakistan";
console.log(cricketer1.team);
console.log(Object.getPrototypeOf(cricketer1) === cricketer.prototype);





cricketer1.mydetails();
cricketer2.mydetails();
cricketer3.mydetails();


