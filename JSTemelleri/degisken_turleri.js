
var urunAdi = "iphone 13";

var urunFiyati ="15000";

var urunFiyatiInt = 1500;

// console.log(urunAdi);
// console.log(urunFiyati);
// console.log(urunFiyatiInt);



// console.log(Number(urunFiyati));

// console.log(urunFiyatiInt.toString());


var firstStdName = "test";
var firstStdDate = 2012;
var firstStdGrades = [70,70,80];
var firstStdIsSuccessfull = 0;
var firstStdAvg = 0.;
firstStdGrades.forEach(element => 
{
    firstStdIsSuccessfull += element

});
firstStdAvg = firstStdIsSuccessfull / firstStdGrades.length;
firstStdIsSuccessfull = firstStdIsSuccessfull >= 50;


var secondStdName = "test2";
var secondStdDate = "2012";
var secondStdGrades = [40,40,50];
var secondStdsIsSuccessfull = 0;
var secondStdAvg = 0.;

secondStdGrades.forEach(grade => {
    secondStdsIsSuccessfull += grade;
})
secondStdAvg = secondStdsIsSuccessfull / secondStdGrades.length;
secondStdsIsSuccessfull = secondStdsIsSuccessfull >= 50;

var currentYear = new Date().getFullYear();
console.log(firstStdName+" "+ (currentYear-firstStdDate)+" "+firstStdIsSuccessfull+" "+firstStdAvg);
console.log(secondStdName+" "+ (currentYear-secondStdDate) +" "+secondStdsIsSuccessfull+" "+secondStdAvg);