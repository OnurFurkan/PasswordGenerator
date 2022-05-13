var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var signs = ["!","@","+","%","&","/","=","?","_","-","*","#","£"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z"];
var pOne = [ ];
var pTwo = [ ];
var pThree = [ ];
var pFour = [ ];
var touch = true;
function generatePassword() { 
    for (var i = 0; i < 100; i++) {
            var numbersIndex = Math.floor(Math.random()*numbers.length);
            pOne += numbersIndex;  
            var lowerLettersIndex = lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
            pOne += lowerLettersIndex;
            var signsIndex = signs[Math.floor(Math.random()*signs.length)];
            pOne +=  signsIndex;
            var upperLettersIndex = upperLetters[Math.floor(Math.random()*upperLetters.length)];
            pOne += upperLettersIndex;
    };
    // console.log(pOne);
    for (var k = 0; k < 100; k++) {
            var numbersIndex = Math.floor(Math.random()*numbers.length);
            pTwo += numbersIndex;  
            var lowerLettersIndex = lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
            pTwo += lowerLettersIndex;  
            var signsIndex = signs[Math.floor(Math.random()*signs.length)];
            pTwo += signsIndex;
            var upperLettersIndex = upperLetters[Math.floor(Math.random()*upperLetters.length)];
            pTwo += upperLettersIndex;
    };
    // console.log(pTwo);
    for (var l = 0; l < 100; l++) {
            var numbersIndex = Math.floor(Math.random()*numbers.length);
            pThree += numbersIndex;  
            var lowerLettersIndex = lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
            pThree += lowerLettersIndex;  
            var signsIndex = signs[Math.floor(Math.random()*signs.length)];
            pThree += signsIndex;
            var upperLettersIndex = upperLetters[Math.floor(Math.random()*upperLetters.length)];
            pThree += upperLettersIndex;
    };
    // console.log(pThree);
    for (var m = 0; m < 100; m++) {
            var numbersIndex = Math.floor(Math.random()*numbers.length);
            pFour += numbersIndex;  
            var lowerLettersIndex = lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
            pFour += lowerLettersIndex;     
            var signsIndex = signs[Math.floor(Math.random()*signs.length)];
            pFour += signsIndex;
            var upperLettersIndex = upperLetters[Math.floor(Math.random()*upperLetters.length)];
            pFour += upperLettersIndex;
    };
    // console.log(pFour);

    var passwordOne = pOne.slice(0,18);
    console.log(passwordOne);
    var passwordTwo = pTwo.slice(0,18);
    console.log(passwordTwo);
    var passwordThree = pThree.slice(0,18);
    console.log(passwordThree);
    var passwordFour = pFour.slice(0,18);
    console.log(passwordFour);

    document.getElementById("password1").innerHTML = passwordOne;
    document.getElementById("password2").innerHTML = passwordTwo;
    document.getElementById("password3").innerHTML = passwordThree;
    document.getElementById("password4").innerHTML = passwordFour;

};


