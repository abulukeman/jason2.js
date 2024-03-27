// question 1
let surName = "oshoola"
 firstName ="pemuli"
let otherName = "sheri"
console.log(surName.charAt(0)
,".",firstName.charAt(0))

console.log(surName.charAt(0).concat(".",firstName.charAt(0)," ",otherName))

let str = "Hello, world! how are you?";
console.log(str.length);
console.log(str.indexOf("o"));

let occ1 = str.indexOf("o");


console.log(str.indexOf("o",occ1 + 1));
//question 3
let str1 = "i";
let str2 = "love";
let str3 = "God";
let result = str1 + " " + str2;
result = result + " " + str3;
console.log(result)
            
// question 4
let bola = "the brown dog follow the black dog ,while the white dog barked at the stray dog chasing the small dog";
let lastIndex  = bola.charAt(bola.length - 1);
console.log(lastIndex);


//question 5
let tinubu = "the brown dog follow the black dog ,while the white dog barked at the stray dog chasing the small dog";


let dogocc1 =bola.lastIndexOf("dog") 
console.log (dogocc1);
let dogocc2 = bola.lastIndexOf("dog", dogocc1 - 1)
console.log(dogocc1-1);
let dogocc3 = bola.lastIndexOf("dog",dogocc2 -1)

console.log(dogocc2-1);
console.log ("d indx of d lst occur of 'dog' is", dogocc3);

let v = "my name is kelvin which is also my friends name "
console.log (v.lastIndexOf("friends",17))







//let dogocc2 = bola.lastIndexOf("dog", dogocc1 - 1)
//let dogocc3 = bola.lastIndexOf("dog" ,dogocc2 - 1)
//console.log ("the index of the third occurence of 'dog' is ",dogocc3)  
let u = "hello world,my name is k and im a full stack software engineer and im going to be verifired and world best develope youve ever know."
// console.log(u.slice(4,-44))

let theDog = "the brown dog followed the black dog"

console.log(theDog.replace("dog","cat").replace("dog","rat"))

let newResult = theDog.repeat('dog', 'cat').replace('dog', 'fish')
console.log(newResult)
// console.log (theDog.slice(-11));

// let fullName = " .            lukeman abu"

// console.log (fullName.trim())

const kel = ["may","GOD","give","us","long","life"];

let size = kel.length
console.log(kel.at(0))

const kelv = ["Banana", "Orange", "Apple", "Mango"];

let kelvi = ("demo").innerhtml=kelv.join("*");
console.log(innerhtml=kelv.join(" - "))