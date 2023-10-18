let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);

let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result4 = fccRegex.test(myString);

//Syntax
'string'.match(/regex/);
/regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result7 = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result9 = quoteSample.match(alphabetRegex); // Change this line

let jennyStr = "Jenny8675309";
let myRegex2 = /[a-z0-9]/ig;
jennyStr.match(myRegex2);

let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/ig; // Change this line
let result10 = quoteSample3.match(myRegex3); // Change this line

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; // Change this line
let result11 = difficultSpelling.match(myRegex4);

let chewieQuote ="Aaaaaaaaaaaaaaaarrrgh!"
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result12 = chewieQuote.match(chewieRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<h.*?>/; // Change this line
let result13 = text.match(myRegex5);

let reCriminals = /C+/; // Change this line

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result14 = calRegex.test(rickyAndCal);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
//All four of these test calls would return true.

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result16 = quoteSample4.match(alphabetRegexV2).length;

let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
numbers2.match(shortHand2);
sentence.match(shortHand2);
//The first match call would return the value ["%"] and the second would return ["!"].

let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result17 = quoteSample5.match(nonAlphabetRegex).length;

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result18 = movieName.match(numRegex).length;
let noNumRegex = /\D/g; // Change this line
let result19 = movieName.match(noNumRegex).length;

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result20 = userCheck.test(username);

// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input

// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
//This match call would return [" ", " "].

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result21 = sample.match(countWhiteSpace);


let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
//The value returned by the .length method would be 32.

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result22 = sample.match(countNonWhiteSpace);

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
//The first test call would return true, while the second would return false.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let result23 = ohRegex.test(ohStr);

 A4 = "haaaah";
 A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
//In order, the three test calls would return true, false, and true.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/i; // Change this line
let result24 = haRegex.test(haStr);

let A3 = "haaah";
 A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
//In order, the three test calls would return false, true, and false.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result25 = timRegex.test(timStr);

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
//Both uses of the test method would return true.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result26 = favRegex.test(favWord);

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
//Both of these match calls would return ["q"].

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

let sampleWord = "astronaut";
let pwRegex = /(?=\w{1,4})(?=\D\d{2,})/; // Change this line
let result27 = pwRegex.test(sampleWord);

// let sampleWord = "astronaut"; fcc solution
// let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);

let myString3 = "Eleanor Roosevelt";
let myRegex6 = /(Eleanor|Franklin D.)\sRoosevelt/; // Change this line
let result28 = myRegex6.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

// let myString = "Eleanor Roosevelt";  fcc solution
// let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
// let result = myRegex.test(myString);

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
//Using the .match() method on a string will return an array with the matched 
// substring, along with its captured groups.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result29 = reRegex.test(repeatNum);

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
//The replace call would return the string The sky is blue..

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
//The replace call would return the string Camp Code.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result30 = str.replace(fixRegex, replaceText);

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result31 = hello.replace(wsRegex, ""); // Change this line