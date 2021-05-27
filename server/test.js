// var student1={
//     name: 'ha',
//     phone: '0122255445',
//     address: 'Ha Noi'
// }
// var student2 = {
//     name : 'nam',
//     phone: '28545356',
//     address:'Ha Nam'
// }
// //  for of 
// var listStudent = [student1,student2];
// console.log(listStudent)


// var myDog = {
//     name: 'Ga',
//     back: function gaCon(){
//         console.log("Ga con")

//     }
// }
// console.log(myDog.back())

// var length = [1,2,5,6]
// var acreage = length.filter(function(x ){
//     return x%2 ===0
// })
// console.log(acreage)

// var length = [
//     {with: 10, height: 30},
//     {with:30 , height:50},
//     {with:30, height: 50}
// ]
// console.log(length[0].with)
// var acreage = length.map(function(x){
//      var s= x.with*x.height;
//  return s
// })
// console.log(acreage)

// var orders = [
//     {name: 'A', quantity: 2, unitPcice:100},
//     {name: 'B', quantity:3, unitPcice:300},
//     {name: "c", quantity:1, unitPcice:100}
// ]
// var sum = orders.reduce(function(x , y){
// return x + y.quantity*y.unitPcice
// }, 0)
// console.log("tong la :",sum)

// var items =['tom', 'bill','kiem']
// {/* <tom><bill><kiem> */}

// var compound = items.reduce(function(x ,y){
//     return x + "<" + y +">"

// },'')
// console.log(compound)

//  constructer function
 function Mouse(color , weight){
     this.type = 'mouse'
     this.color = color
     this.weight = weight
 }
 Mouse.prototype.sleep = function(){
     console.log(this.color +"...Sleeping.....")
 }
 var  tom = new Mouse('black', 5);
 tom.sleep();

//  json
 var myDog = {name: 'gaugau', age: 2,  dead: 'true'}
 var myDogString = JSON.stringify(myDog)
 console.log(myDogString)

 var string = '{"name":"gaugau", "age":"2","dead":"false"}'
 var oject = JSON.parse(string)
 console.log(oject)

//  ternary operater 
function tossCosi(){
    var valus = Math.random();
    var result = (valus < 0.5) ? 'mặt sấp ' : 'Mặt ngửa';
    console.log(result)
}
tossCosi();


// //  if else mã giảm giá
//  function  getTixkeFee(person){
//      var originPice = 100000;
//      if(person.age <= 15 ){
//          originPice = 100000*0.8

//      }else if( package.age >= 60){
//          originPice = 100000* 0.9;

//      }else{
//          originPice =100000
//      }
//      return originPice;

//     }

//  var person = {
//      age : 15
//  }
//  var fee = getTixkeFee(person);
//  console.log(fee)

// //  while
// var i = 1
// while (i<= 10){
//     console.log(i)
//     ++i
// }    

// show menu
var readlineSync = require('readline-sync');
var fs = require('fs')
var students = []
function loadData() {
    var fileContent = fs.readFileSync('./test.json')
    students = JSON.parse(fileContent)
}
function showMenu() {
    console.log("1. Show all student")
    console.log("2. Create a new student")
    console.log("3. Save and exit")
    var option = readlineSync.question('>>>')
    switch (option) {
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            showCreatStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            showMenu();
            break;
    }
}

function showStudent(){
    console.log(students)
  for (var student of students){
      console.log(student.name,student.age)
  }
}

function showCreatStudent(){
    var name = readlineSync.question('Name: ')
    var age = readlineSync.question('Age: ')
    var student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student)
}

function saveAndExit(){
    var content = JSON.stringify(students)
    fs.writeFileSync('./test.json',content, {encoding: 'utf8'} )
}
function main() {
    loadData();
    showMenu();
    var option = readlineSync.question('>>>')
    switch (option) {
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            showCreatStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            showMenu();
            break;
    }
}
main();

//  Sync and Async

