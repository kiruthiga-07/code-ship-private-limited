//palindrome
/*let palindrome = (str) => {
    let s = str.toLowerCase();
    let rev = s.split("").reverse().join("");
    
    if(rev == s){
        console.log("palindrome");
    }
    else{
        console.log("Not a palindrome");
    }
}

palindrome("radar");
palindrome("Kiruthiga");

//print 1 to 10 numbers
let numbers = (n) => {
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}
numbers(10);

//greet
function greet(){
    console.log("Hello World");
}
greet();

//add
let add = (a,b) =>{
    console.log(a+b);
} 
add(2,3);

//even or odd
let check = (n) => {
    if(n%2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
check(3);
check(6);

//square of number
let sq = (n) => {
    console.log(n*n);
}
sq(4);

//fibonacci
let fibo = (n) => {
    let n1=0;
    let n2=1;
    if (n == 0)
    {
        console.log("0");
    }
    for(let i=1;i<=n;i++)
    {
        console.log(n1);
        
        temp = n1+n2;
        n1=n2;
        n2=temp;
    }
    
}
fibo(1);
fibo(5);

//factorial
let fact = (n) => {
    let fact = 1;
    if(n==0){
        console.log("1");
    }
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    console.log(fact);
}
fact(5);

//reverse a number
let rev = (n) => {
    let rev = 0;
    while(n>0){ //234
        let dig = n%10; //4|3|2
        rev = rev*10 + dig; //0+4=4|4*10+3=43|43*10+2=432
        n=Math.floor(n/10);//23|2
    }
    console.log(rev);//432
}
rev(341);

//vowels count
let cvowels = (str) => {
    let v ="aeiou";
    let count = 0;
    for(let i of str){
        if(v.includes(i)){
            count++;
        }
    }
    console.log(count);
}
cvowels("Kiruthiga");

//sum of array
let sarr =(n) => {
    let sum =0;
    for(let i of n){
        sum+=i;
    }
    console.log(sum);
}
sarr([1,2,3,4]);


//Armstrong
let ar = (n) =>{
    let temp = n;
    let sum =0;
    let l = n.toString().length;
    
    while(n>0){
        let l_num = n%10;
        sum += l_num**l;
        n = Math.floor(n/10);
    }
    
    if(sum == temp){
        console.log("it is a armstrong number");
    }
    else{
        console.log("it is not a armstrong number");
    }
}
ar(153);
ar(163); */

//sum of two numbers
function sum(a,b){
    return a+b;
}
console.log("Sum of two numbers: "+sum(5,4));
console.log("------------------------------")

//prime
function isPrime(n){
    let count = 0;
    if(n<=1){
        console.log("Not prime");
    }
    for(i=1;i<=n;i++){
        if(n%i == 0){
            count++;
        }
    }
    if (count == 2){
        console.log("Prime number");
    }
    else{
        console.log("Not prime")
    }
}
isPrime(3);
console.log("------------------------------")

//fibonacci
let fib = (n) =>{
    let n1 = 0;
    let n2 = 1;
    
    if(n == 0){
        console.log("0");
    }
    
    for(let i=1; i<=n; i++){
        console.log(n1);
        
        let temp = n1+n2;
        n1=n2;
        n2 = temp;
    }
}
fib(5)
console.log("------------------------------")

//vowels count
let vow = (str) =>{
    let v = "aeiou";
    let count = 0;
    for(let i of str){
        if(v.includes(i)){
            count++;
        }
    }
    console.log(count);
}
vow('kiruthiga');
console.log("------------------------------")

//maximum of array

let max = (n) =>{
    let max = n[0];
    for(let i of n){
        if(i>max){
            max = i;
        }
    }
    console.log(max);
}
max([5,9,7,3]);
console.log("------------------------------")

//sum of array elements
let s = (n) =>{
    let sum = 0;
    for(let i of n){
        sum+=i;
    }
    console.log(sum);
}
s([1,2,3,4]);
console.log("------------------------------")

//count words in a string
let st = (stri) =>{
    let count = 0;
    for(let i in stri){
        count++;
    }
    console.log(count);
}
st("kiruthiga Raja");
console.log("------------------------------")

//swap two numbers
let sw = (a,b) => {
    console.log("before swap: "+ a,b);    
    let temp = a;
    a = b;
    b = temp;
    
    console.log("after swap: "+ a,b);
}
sw(5,10);
console.log("------------------------------")

//uppercase
let u = (uc) => {
    console.log(uc.toUpperCase());
}
u("kiruthiga");
console.log("------------------------------")

//simple calculator
const calc = (a, b, op) =>{
    if(op == "+") return a+b;
    if(op == "-") return a-b;
    if(op == "*") return a*b;
    if(op == "/") return a/b;
    
    return 'invalid operator';
}
console.log("addition: "+calc(9,3,"+"));
console.log("subtraction: "+calc(9,3,"-"));
console.log("multiplication: "+calc(9,3,"*"));
console.log("division: "+calc(9,3,"/"));
