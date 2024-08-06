// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not
let array=[10,20,30,40];
let isprime=true;

if(array[0]==1)
{
    console.log('1 is neither prime nor composite number');
}
else if(array[0]>1){
for (let i = 2; i<=array[0]-1; i++) {
    if(array[0]%i==0){
isprime=false;
break;
    }}
 if(isprime){
    console.log(array[0],'is a primenumber');
 }
 else{
    console.log(array[0],'is a not a primenumber');
 }
}
