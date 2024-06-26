//Here were declare a variable'driver  and assign it an array[].
 const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

/*Here we declare an anonymous function and assign it to a const.
 An anonymous function has no name before the ().
We call this a function expression 
 //console.log (returnFirstTwoDrivers(drivers))*/
 const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2);
 }


//This is a function expression assigned to a const.
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

/*A variable that has been  assigned an array.
The array contains 2 functions (array1, array2).*/
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/*This is a function expression with multiplier as the 'argument'.
It returns a new function which will take fare and * it with the'argument'*/
const createFareMultiplier = function(multiplier) {
   return function(fare) {
        return fare * multiplier;
    };
};

//The variable'fareDoubler' calls the function above and passes an argument of 2
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10))

///The variable'fareTripler' calls the function above and passes an argument of 3
const fareTripler = createFareMultiplier(3);

/*selectDifferentDrivers is the name of he function. It takes 2 arguments
Inside the {} is the function body. By calling function'selectingDrivers'
 and passing (drivers) to it, we get to choose array1 or array2*/
const selectDifferentDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
};
//console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))
//console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))