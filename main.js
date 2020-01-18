/*alert("Hello world");
console.log("hello world");
console.error("This is an Error");
console.warn("This is an warning");
const x="suchithra";
console.log(x);
let age=30;
const bool=true;
const y=undefined;
const z=null;
console.log("age");
console.log("bool");
console.log(y);
console.log(z);
console.log(typeof(x))
console.log(typeof(age))
console.log(typeof(bool))
console.log(typeof(y))
console.log(typeof(z))
const s="brad";
let age1=24;
console.log(`my name is ${s} and my age is ${age1}`);
const i="hello world";
console.log(i.length);
console.log(i.toUpperCase());*/


//get the value;
//const numbers=[1,2,3,4,5];
//console.log(numbers);
//const fruits=["banana","apple","chikku","orange"];
//console.log(fruits);
//console.log(fruits[1]);


//replace the elements
//fruits[4]="greps";
//console.log(fruits);


//add to end
//fruits.push('srawberries');
//console.log(fruits);

//add to begining
//fruits.unshift('mango');
//console.log(fruits);

//remove last value
//fruits.pop()
//console.log(fruits);

//get Index
//console.log(fruits.indexOf('apple'));


//object literal
/*const person={
    name:'suchi',
    age:'24',
    hobbies:['watching TV','listening music'],
    height:5.4,
    weight:'50',
    address:{
        taluk:'udupi',
        city:'kundapur',
        state:'karnataka'
    }
}*/


// get single value
//console.log(person.height);
//console.log(person.age);
//console.log(person.name);

//get array elements
//console.log(person.hobbies[1]);

//get embadded objects
//console.log(person.address.city);

/*const todos=[
    {
        id:1,
        text:'work from home',
        isComplete:false
    },

    {
        id:2,
        text:'dinner with mani',
        isComplete:false
    },
    {
        id:3,
        text:'meet client',
        isComplete:true
    },

];*/

//get specific object value
//console.log(todos[1].text);


//format as JSON
//console.log(JSON.stringify(todos));

//loops
//for{
//for(let i=0;i<=10;i++){
//console.log('forloop number:${i}');

//}

//while
//let i=0
//while(i<=10){
    //console.log('whileloop number:${i}');
    //i++;

//}

//for of loop
//for(let todo of todos){
    //console.log(todo.text)

//}

//high order methods
//maps
//const todoTextArray=todos.map(function(todo){
    //return todo.text;
//})

//while
//let i=0
//while(i<=10){
    //console.log('whileloop number:${i}');
    //i++
//}

//filter()
//const todo1=todos.filter(function(todo){}
//return todo,id=1;
//});

//Functions

function addNums(a,b){
//console.log(a+b);

return a+b;
}
console.log(addNums(2,4));



/*function addNums(a=2,b=2){
    //console.log(a+b);
    
    return a+b;
    }
    console.log(addNums(5,6));*/
    //Arrow Function
    //const addNums1=(a,b)=>
        //console.log(a+b);
    //return a+b;
    //addNums1(2,3);
        //console.log(addNums1(4,4));
    
    
        /*const addNums1=(a,b)=>{
        return a+b;
        }
        console.log(addNums1(4,4));*/

        /*const addNums1=(a,b)=>{
        return a+b;}
        
        console.log(addNums1(3,4));*/

        //OOPS
       /* function person(fname,lname,dob)
        {
            this.fname=fname;
            this.lname=lname;
            this.dob=new Date(dob);
            

        }
        const person1=new person('suchi','chithra','12-14-1996');
        console.log(person1.dob);*/


        //Classes
        class Person{
            constructor(firstname,lastname,dob){
                this.firstname=firstname;
                this.lastname=lastname;
                this.dob=new Date(dob);
            }
            //Get Birth Year
            getbirthYear() {
               return this.dob.getFullYear();

                }
                getFullname() {
                    return `${this.firstname} ${this.lastname}`
                }

        }
            const person1=new Person('suchithra','kulal','12-14-1996');
            console.log(person1.getbirthYear());
            console.log(person1.getFullname());
            //const person2=new Person('suchithra','kulal','12-14-1996');
            //console.log(person2.lastname);

            

        