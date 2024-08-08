// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not
const prompt=require("prompt-sync")({sigint:true}); 
let input = prompt("Enter a list of numbers separated by commas:");
let array = input.split(",");

console.log(array);
function first_elemnet()
{
let first_number=array.shift(0);
//console.log(first_number);
let isprime=true;

if(first_number==1)
{
    console.log('1 is neither prime nor composite number');
}
else if(first_number>1){
for (let i = 2; i<=first_number-1; i++) {
    if(first_number%i==0){
isprime=false;
break;
    }}
 if(isprime){
    console.log(first_number,'is a primenumber');
 }
 else{
    console.log(first_number,'is a not a primenumber');
 }
}
}
first_elemnet();
