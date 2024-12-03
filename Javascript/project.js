
/* url = https://www.youtube.com/watch?v=E3XxeE7NF30&t=1451s&ab_channel=TechWithTim

 1. total money deposited
 2. how many lines does the user wanna bet on
 3. how much is the user betting 
 4. spin the slot machine
 5. check if the user won
 6. give user money or take money from total
 7. play again


// function deposit(){
//     return 1
// }   

// Node is used to run the project.js file "node project.js"

const promt = require("prompt-sync")();

const deposit = () => {
    var depositAmt= promt("Enter a deposit amount: ")
    depositAmt = parseFloat(depositAmt)

    if(isNaN(depositAmt) || depositAmt<=0){
        console.log("Invalid deposit amount try again")
        deposit()// recursive back to the function if below 0 or IsNAN
    }
    else{
        return (depositAmt)
    }    

}

const getNumofLines= () => {
    var numOfLines= promt("Enter a number of lines: ")
    numOfLines = parseFloat(numOfLines)

    if(isNaN(numOfLines) || numOfLines<=0 || numOfLines > 3){
        console.log("Invalid deposit amount try again")
        getNumofLines()// recursive back to the function if below 0 or IsNAN
    }
    else{
        return (numOfLines)
    }
}

const howMuchBet= (Tamt) => {
    var bettingAmt= promt("Enter an amount to bet: ")
    bettingAmt = parseFloat(bettingAmt)

    if(isNaN(bettingAmt) || bettingAmt<=0 || bettingAmt > Tamt){
        console.log("Invalid deposit amount try again")
        howMuchBet()// recursive back to the function if below 0 or IsNAN
    }
    else{
        return (bettingAmt)
    }
    
}

const amt = deposit()
const amtofLines = getNumofLines()
const tBet = howMuchBet(amt)
console.log(amt, "Lines\t", amtofLines, "\tTotal bet\t",tBet)
*/

/* Simple syntax things
// Object type
let person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    eyeColor: 'Black',
    fullName: function(){
        return "Hello " + this.firstName + " " + this.lastName + "!";
    }
}

// switch
weekday =1;
day = null;
switch (weekday){
    case 1 : day = 'monday';break;
    case 2 : day = 'tuesday'; break;
    default : day = 'not a valid day';
}
*/

// DOM 
