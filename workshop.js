function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  */
  for (var i = 0; i<theArray.length; i++){
    callback(theArray[i]);
  }
  
}
function multiplyByTwo(x) {
    return x * 2;
}

//var values = [1,2,3,4];

function map(mappingFunction, theArray) {
  
      var tempa=[];
      theArray.forEach(function(item){
        var newItem=mappingFunction(item);
      
      tempa.push(newItem);
      });
      
return tempa;
    // You write the code here
}

//var doubleValues = map(multiplyByTwo, values); // [2,20,30,32]

//console.log(doubleValues);


function isEven(x) {
    return x % 2 === 0;
}

//var values = [1,10,15,16,32,33,34,35,36];

function filter(predicate,theArray) {

      var tempa=[];

      theArray.forEach(function(item){
      
      if(predicate(item)){
      

      tempa.push(item);
      }
      });
      
return tempa;
}

//var evenValues = filter(isEven,values); 

//console.log(evenValues);

/*Make this function return:

true if all the elements in the input array pass the predicate function
false otherwise.
If passed an empty array, then return true.
To get the full points on this exercise, your every function has to stop as soon as it 
encounters an item for which the predicate function returns false. You don't need to go any further.*/

function every(predicate, theArray){
  
  for(var i=0;i<theArray.length;i++){
    
    if(!predicate(theArray[i])){
      
      return false;
     }
  }
      return true;
  
}

/*
Make this function return:

true if at least one element in the input array passes the predicate function
false otherwise.
If passed an empty array, then return false.
To get the full points on this exercise, your some function has to stop as soon 
as it encounters an item for which the predicate function returns true. You don't need to go any further.*/

function some(predicate, theArray) {

  for(var i=0;i<theArray.length;i++){
    
    if(predicate(theArray[i]))
    {
      return true;
     }
  }

return false;
  
}

/*
Make this function return the index of the first item in the input array that is === to the input item. If no item in the input array is === to the input item, then return -1. For example:
*/

function indexOf(item, theArray) {
  var index = -1;
    if(typeof theArray === "undefined" && theArray == null && theArray.length < 0)
    {
      return index;
    };
  
  for(var i=0;i<theArray.length;i++){
    
   if(theArray[i]===item){
    index=i;
    return index;
    }
  
  }  //end of for loop
  
return index;
}

/*var fruits = ['orange','apple','banana','apple'];

var i = indexOf('apple', fruits); // 1
console.log(i);
var j = indexOf('pineapple', fruits); // -1
console.log(j);



/*
Make this function return the index of the first item in the input array for which the predicate function returns true. Return -1 if no matching item is found. For example:

var pets = [
    {id: 33, name: 'popcorn', species: 'dog'},
    {id: 46, name: 'purrito', species: 'cat'},
    {id: 47, name: 'bob', species: 'fish'},
    {id: 49, name: 'nacho', species: 'dog'}
];

function isDog(item) {
    return item.species === 'dog';
}

var firstDogIndex = findIndex(isDog, pets);
After successfully implementing the function, explain in your own words why we need findIndex when we already have indexOf. They're two functions that return an array index based on a condition, but there is a fundamental difference between them.

Hint: it is related to how === works with objects.

*/

var pets = [
    {id: 33, name: 'popcorn', species: 'dog'},
    {id: 46, name: 'purrito', species: 'cat'},
    {id: 47, name: 'bob', species: 'fish'},
    {id: 49, name: 'nacho', species: 'dog'}
];

function isDog(item) {
    return item.species === 'dog';
}

var firstDogIndex = findIndex(isDog, pets);


function findIndex(predicate, theArray) {
  
  var index=-1;
  
  for(var i=0;i<theArray.length;i++){
    
    if(predicate(theArray[i])){
      index = i;
      return index;
     }
  }
     
return index;
}

var firstDogIndex = findIndex(isDog, pets);

// ***************COMMENTS******************
// Pets is an array containing objects, and the properties of these objects can only be accessed with a function (specially designed for the specific values).



console.log(firstDogIndex);

function first(n, theArray) {

var elements=[];

if(typeof n === "object"){
  return n[0];
}

else if(n>theArray.length){
  return theArray;
}
else if(n<0) {
 return elements;
}
for(var i=0;i<n;i++){
  var newNum=theArray[i];
  elements.push(newNum);
}
 return elements;

}

function last(n, theArray) {

var elements=[];

if(typeof n === "object"){
  return n[n.length-1];
}

else if(n>theArray.length){
  return theArray;
}
else if(n<0) {
 return elements;
}
for(var i=theArray.length-1;i>=0;i--){
  var newNum=theArray[i];
  elements.push(newNum);
}
 return elements;


}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
