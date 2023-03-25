//js - change or manipulate the html and css.


// website /webapp - 

//client blog -  ui/ux  - frontend developer - backend developer   - hosting - digital maerkteing
 
//frontend developer - ui - client side developer.
//html - css  

//backend developer - logic - server side developer
//server - programming - database.



// js - client side scripting language.

//js - html css ;


//js - browser .. 


// js -  google fire, 
// js   - js engine  - google.
//js    - V8          - google.
//js    - spider monkey - firfox.


// js - browser - 

//EcmaScript 

//Es6


// js  - basic js - DOM

//js advace - Es6 - reactjs



//debugging

// console.log(4*7)


//Basic - Javascript

// varibales - container - store data 

//varibles - keyword - identifer - value.


// keyword - reserved words.
//var let const .

//identifers - name for the container.

//value - data. - datatypes;


//  let fName = 'Vikas'
//  fName = 'Kartik'

//  console.log(fName)

 

//datatypes - 
//primitive type - 
//string,number,boolean,null,undefined, - Bigint and symbols

//reference type -
//object  - Array

//string : squence of characters - '' "" `` ;
// typeof - datatype the varible;

// let str = '8787677667';

// console.log(typeof str)


// number -23,4.5,0,-23,

// let num = 0;

// console.log(typeof num)

//Boolean - true, false;

// const bool = 4<8;
// console.log(bool)


//null - purposely makes the varible null.

// let num = null;
// console.log(typeof num)

//undefined - 
// let a ;
// console.log( a)




//in js everything is object;


//Array

// let arr = ['string',2,true,undefined,null];

// console.log( arr)

// let obj = {
//  //property-data - key:value
//     name:'hari',
//     age :28,

//     //  methods - behaviuor
//    details:function(){
//     return "My name is "+ obj.name;
//    }
// }

// console.table(obj)
// obj.details()


//functions - actions - statements;
// let num = 45;
// let num1 = 46;

// function createAct(a1,b1){
//     let a = a1+b1;
//     return a;
// }
// console.log(createAct(num,num1))


// const str = 'hello'

// let str1 = new String(str);
// console.log(str1)

// console.log(str.toUpperCase())



//conditional statements:

// let coin = 'Tail';

//if else esleif switch;

// if(coin === 'Head'){
//    console.log('Bat')
// }else{
//     console.log('Bowl')
// }


// if(color === 'Red'){
//     console.log('Stop')
// }else if(color ==='Green'){
//    console.log('Go')
// }else if (color === 'Yellow'){
//     console.log('Ready')
// }else{
//     console.log('Temporaryly Unavailabe')
// }
// let color = 'Green'

// switch (color){
//     case 'Red':
//         console.log('Stop');
//         break;
//     case 'Green':
//         console.log('Go');
//        break;
//     case 'Yellow':
//         console.log('Ready');
//         break;
//     default:
//         console.log('TMP')
// }



//loops and iterators:
//loops - n time repeatign again again:
//Hello for 10 times in console.
//loops - for - while  - do while:

// for(let i =1 ; i <= 100 ; i++){
//   console.log('Hello')
// }


// let i = 100;

// while(i <10){
//     console.log('Hello')
//     i++;
// }

// do{
//     console.log('Hello')
//     i++;
// }while(i <10)

//iteration - array,string;

//iteration
// const arr = [0,1,2,3,4,5,6,7,8,9,10];
// console.log(arr.length)
// let i = 0;

// while(i < arr.length){
//     console.log(arr[i]*2)
//     i++;
// }

//forEach - 

// arr.forEach(function(value,index,array){
// console.log(value*2)
// })





//Dom

// grabbing - 5 types; - 

// '
// console.log(head)

// function eventHandlers(){
//     const head = document.getElementById('demo')
//   const body = document.body;
//   console.log(body);

//   const img = document.getElementsByTagName('img')[0]
// console.log(img)

//     head.innerHTML = 'Congratulations'
    
//     body.style.backgroundColor ='orange'

//     head.style.fontSize='56px'
   
//    img.src = 'https://images.unsplash.com/photo-1679706292806-3a7d5eb2dd75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'

// }

//changing an element

//innerContent - change css - changing the attributes;

//content - innerHTML
//style - element.style.bang =''

// att  - ememt .src = ''





//eventlisteners-


// function eventHandlers(){
//     console.log('I am Clicked')
// }















//Create a Application:




const eventsData = [
{
    eventName: 'Reactjs Begginers',
    Tutor:'Hari',
    Timing:"2:40",
    img:'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
}
,{
    eventName: 'Nodejs Begginers',
    Tutor:'Nabendu Biswas',
    Timing:"7:40",
    img:'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
},{
    eventName: 'Css Begginers',
    Tutor:'Mousam',
    Timing:"1:40",
    img:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
},
{
    eventName: 'Reactjs Begginers',
    Tutor:'Hari',
    Timing:"2:40",
    img:'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
}
,{
    eventName: 'Nodejs Begginers',
    Tutor:'Nabendu Biswas',
    Timing:"7:40",
    img:'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
},{
    eventName: 'Css Begginers',
    Tutor:'Mousam',
    Timing:"1:40",
    img:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
}
]

const cont = document.getElementsByClassName('container')[0]
// console.log(cont)

eventsData.forEach(function(data){
    // console.log(data.Tutor)


   cont.innerHTML +=`
   <div class='events'>
   <img src=${data.img} />
   <h1>${data.eventName}</h1>
   <h4>${data.Tutor}</h4>
    <p>${data.Timing}</p>
   </div>
     
   
   `


})


// const event = '12 hours of workshop'

// // const detail = `welcome to  ${event} `

// console.log(detail)
