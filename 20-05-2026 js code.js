//Normal function
function normaldict(){
    let stu = {
        "name": "Kiruthiga",
        "age": 18,
        "country": "India"
    }
    console.log(stu);
    console.log(stu.name);
    console.log(stu.age);
    console.log(stu.country);
}
normaldict();
console.log("---------------------------------");

//arrow function
let arrowdict = () =>{
    let stu = {
        "name":"Kiruthiga",
        "age":18,
        "country":"India"
    }
    for(let i in stu){
        console.log(`${i} -> ${stu[i]}`);
    }
}
arrowdict();
console.log("---------------------------------");

//for each
let stu = {
        "name": "Kiruthiga",
        "age": 18,
        "country": "India"
}
Object.entries(stu).forEach(([key,value])=>{
    console.log(key +":"+ value);
});
console.log("---------------------------------");

//for in loop
function forin(){
    let stu = {
        "name": "Kiruthiga",
        "age": 18,
        "country": "India"
    }
    
    for(let i in stu){
        console.log(i +" : "+ stu[i]);
    }
}
forin();
console.log("---------------------------------");

//for of
let stud = {
        "name": "Kiruthiga",
        "age": 18,
        "country": "India"
};
for(let [key,value] of Object.entries(stud)){
    console.log(key +":"+ value);
} 
console.log("---------------------------------");

//overloading
class calc{
    add(a){
        return a+a;
    }
    add(a,b){
        return a+b;
    }
    add(a,b,c){
        return a+b+c;
    }
}
const cal = new calc()
console.log(cal.add(5));
console.log(cal.add(5,6));
console.log(cal.add(5,6,2));
    
