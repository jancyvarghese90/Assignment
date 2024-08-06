//Write a JavaScript program to find the sum of squares of the elements of an array.
let arr2=[3,6,7]
let sum=0,square=0;
for(i=0;i<arr2.length;i++)
{
let square=arr2[i]*arr2[i] 
sum=square+sum;

}
console.log("Sum of numbers in an array with " +arr2.length, " values is:" +sum);