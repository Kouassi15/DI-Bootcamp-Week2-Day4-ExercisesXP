//Exercise 1 : Information
/*Part I : function with no parameters*/
function infoAboutMe(){
     console.log('my name is Kouassi ,i am 20 year old and my hobbies is a awale');
}
infoAboutMe();

/*Part II : function with three parameters*/
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("my name is " + personName  + ",i am " + ""  + personAge  + ""  + " year old" + " and my favorite color is " +  ""  + personFavoriteColor);
}
infoAboutPerson("David ", 45,  "blue");
infoAboutPerson("Josh", 12, "yellow");

/////////////////////////////////////////////////////////////////////////////////////////////

//Exercise 2 : Tips
function calculatetip() {
    const amount = Number(prompt("how much is the bull?")) 
    let tipPercent

    if (amount < 50) tipPercent = 0.2
    if (amount > 50 && amount < 200) tipPercent = 0.15
    if ( amount> 200) tipPercent = 0.1

    const TotalBil = amount * (1 +  tipPercent)
    console.log("bill:",amount)
    console.log("Total bill including  :",TotalBil)

}

calculatetip()

////////////////////////////////////////////////////////////////////////////////////
//Exercise 3 : Find The Numbers Divisible By 23
function isDivisible(divisor) {
    let sum=0;
    for (let i=0;i<500;i++)
    {
        
        if(i%divisor === 0) 
        {
         console.log(i);
        sum=sum+i;
        }

    }
    console.log("the sum of numbers divisible by 23 is :",sum)
} 
isDivisible(23);

/////////////////////////////////////////////////////////////////////////////////////

 //Exercise 4 : Shopping List

 const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = {
    "banane" : 1,
    "orange"  : 1,
     "pomme": 1
  
}
console.log(stock);

// Definition of myBill() function without parameter
/**
 * The function should return the total price of your shoppingList
 * @returns {String}
 */
function myBill(){

    let amount = 0;
    let result = ` `;
    for(let item in shoppingList)
    {
        amount += stock[item] * shoppingList[item];

        if(stock[item] > 0)
        {
            stock[item] -=  shoppingList[item]
            result += `${item} est disponible. ${item} coûte : ${prices[item]} ; \n `
        }else
        {
            result += `${item} est indisponible; \n `
        }
    }

 console.log(`${result} \n cout total : ${amount}`);
}


myBill();

console.log(stock);

/////////////////////////////////////////////////////////////////////////////////
//Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {
    console.log("the item price is", itemPrice)

   const sum = calculateSum(amountOfChange);
   return (sum > itemPrice) 
    
}

function calculateSum(arr) {
    let sum = 0;

    for (let i = 0;i < arr.length;i++){
       let coinValue;

       const numberOfcoins = arr[i];

       if(i === 0) {coinValue = 0.25};
       if(i === 1) {coinValue = 0.10}; 
       if(i === 2) {coinValue = 0.05};
       if(i === 3) {coinValue = 0.01};
       console.log("Vous avez", numberOfcoins,"des pièces d'une valeur de", coinValue);
       
       sum = sum + numberOfcoins * coinValue
    }
    console.log("la somme total est",sum)
    return sum;
}
changeEnough(4.25, [25, 20, 5, 0])

//////////////////////////////////////////////////////////////////////////////////////
//Exercise 6 : Vacations Costs
function hotelCost(){
    const answer = prompt("how anny nights would liste to stay")
    const numberOfNights = Number(ansew)
    console.log('answer', numbersOfNights)
}
hotelCost();

function hotelCost(){
    let answer= "respuser"
    while(!isOnlyNumbers(answer) == NaN){
        answer = prompt("how anny nights would liste to stay")
    }
    const numberOfNights = Number(answer)
    const costParNight = 140
    const totalPrice = numberOfNights * costParNight
    console.log('totalPrice:',totalPrice);
    return totalPrice
}
function isOnlyNumbers(str){
    const regex = new RegExp(/^[0-9]*$/);
    return regex.test(str)
    }
    function includesNumbers(str){
    const regex = new RegEXp(/\d/)
    return regex.test(str)
}
const price = planeRideCost()
console.log('price:',price);

function planeRideCost(){
    
    while (destination == ""  || includesNumbers(destination)){
        destination = prompt("where are you going?")
    }
    console.log("your destination is",destination)
    if (destination == "London") return "183$"
    if (destination == "Paris") return "220$"
    return "300$"
}

function rentalCarCost(){
    let answer
    while (!isOnlyNumbers(answer)){
        answer = prompt("how many days would you like to rent the car")
    }
    const dailyPrice = 46
    const numberOtDays = Number(answer)
    let discount = 0
    if(numerOfDays >= 10) discount = 0.05
    const totalPrice = dailyPrice * numberOfDays * (1 - discount)
    console.log('totalPrice:', totalPrice)
    return totalPrice

}

function totalVacationCost(){
    const  carPrice =rentalCarCost()
    const hotelPrice = hotelCost()
    const  planePrice = planeRideCost()
    console.log('hotelPrice:' ,hotelPrice)
    console.log('carPrice:', carPrice)
    console.log('planePrice:',planePrice)
}
totalVacationCost();
