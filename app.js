
// var budget=800;
// var expense=prompt("what is First Expense")
// var expenseAmount=+prompt("Enter your Expense Amount")
// document.write("<h1>Your Total Monhly Budget</h1>")
// document.write("<h3>Expense"+expense+"<br>"+"Amount Of Expense="+expenseAmount+"<br>")
// var total=budget-expenseAmount
// document.write("Remaing Budget Balance = "+total)




// function edit(){
//    var values=+prompt("Enter your Monthly Icome")
//    var  Balance=document.getElementById("edit");
//   Balance.innerText = values;
// }







   // // to save content for reloading
   // var textarea = document.getElementById('income').innerText;
   // // console.log(textarea)
   // var enteredText = textarea;
   // // console.log(enteredText)
   // localStorage.setItem('myContent', enteredText);
   // var savedText = localStorage.getItem('myContent');
   // // console.log(savedText)









function edit(){
    var values=+prompt("Enter your Income")
    var  Balance=document.getElementById("income").innerText = values;
   
   var  Expense=document.getElementById("expense").innerText;
 
   var subtract=Balance-Expense;
  
   var  currentBalance=document.getElementById("Balance");
   currentBalance.innerText = subtract;

   register()

}













function register() {
	// Get the email and password input values
	let carPice = document.getElementById("income").innerText;
   // console.log(carPice)
   
   // console.log(carExpense)

	// Save the user details to local storage
	localStorage.setItem("income", carPice);
   
	// var itemPrice=localStorage.setItem("income", carPice);
 

 
   
   
   // console.log(carPice)

	// Alert the user that they are now registered
	// console.log(saveditem)
   // var savedText = localStorage.getItem('income');
   // if (savedText) {
   //    var textareaa= document.getElementById('income').innerText;
 
   //    textareaa = savedText;
    
   //  }
}
function userexpense(){
   let carExpense = document.getElementById("expense").innerText;
   localStorage.setItem("expense", carExpense);
}

window.addEventListener('load', function () {
   var savedText = localStorage.getItem('income');
   var savedText2 = localStorage.getItem('expense');
// console.log(savedText)
//    console.log(savedText2)
   if (savedText) {
     var textareaa= document.getElementById('income').innerText=savedText;
  
     var finalout=savedText-savedText2;
     var textareaa2= document.getElementById('Balance').innerText=finalout;
     var textareaa3= document.getElementById('expense').innerText=savedText2;
   
   }

   // localStorage.removeItem('income');
   
   });















// function repos()     {
//    // to save content for reloading

//    if (savedText) {
//      var textareaa= document.getElementById('income').innerText;
//      console.log(textarea)
//      textareaa = savedText;
   
//    }


//    localStorage.removeItem('myContent');
   
//          }  ;


// window.addEventListener('load', function () {
//    var savedText = localStorage.getItem('myContent');
//    console.log(savedText)
//    if (savedText) {
//      var textareaa= document.getElementById('income').innerText;
//    //   console.log(textarea)
//      textareaa = savedText;
   
//    }
//    // localStorage.removeItem('myContent');
   
//    });
   

//  }





// to save content for reloading
// var textarea = document.getElementById('income').innerText;
// console.log(textarea)
// var enteredText = textarea;
// // console.log(enteredText)
// localStorage.setItem('myContent', enteredText);
// var savedText = localStorage.getItem('myContent');
// // console.log(savedText)


// window.addEventListener('load', function () {
// var savedText = localStorage.getItem('myContent');

// if (savedText) {
//   var textarea = document.getElementById('income').innerText;
// //   console.log(textarea)
//   textarea = savedText;

// }
// localStorage.removeItem('myContent');

// });





















let price = 0;
let expoon="";
 function Expenses(){
    let yourExpens=+prompt("Enter Your Expenses")
    expoon=yourExpens
    price+=yourExpens;
    if(yourExpens===0){
      price=0;
    }
    
   
  
    var Balance2 = parseFloat(document.getElementById("income").innerText);
    var subtracts=Balance2-price;
    var  mainBalance=document.getElementById("Balance").innerText = subtracts;
    
var expens=document.getElementById("expense").innerText=price;
    
    userexpense()

 }
let Expensetext="";
 function ExpensesAmount() {
//    var expenseAmount = prompt("Enter Your Expenses");

//    var finals=expenseAmount+"="+expoon;
//  var elementFromSourcePage = document.getElementById("expensetext").innerText=finals;



var Expensetxt=prompt("Enter your Expense Description")
var ExpenseAmount=+prompt("Enter your Expense Amount")

   
   
  
manage(Expensetxt,ExpenseAmount)

 }


function manage(expensetext,expensesAmount){
   totalExpense.push({
      Expensetx:expensetext,
      ExpenseAmoun:expensesAmount,
   })
   console.log(totalExpense)
  
   showAll()
}
// function showAll(){
//    console.log("hi")
//    totalExpense.forEach((value,index)=>{
//       const div=document.createElement("div");
//       div.setAttribute("class","task")
//       const innerDiv=document.createElement("div")
//       div.append(innerDiv)
      
//       const s=document.createElement("p").innerText=value.ExpenseAmoun
      
     
//       innerDiv.append("p")
//    })
// }












const totalExpense=[]

// function showAll(){
//    console.log("hi"+totalExpense.Expensetx);
//    totalExpense.forEach((value, index) => {
//       const div = document.createElement("div");
//       div.setAttribute("class", "task");
//       const innerDiv = document.createElement("div");
//       div.append(innerDiv);
      
//       const s = document.createElement("p");
//       s.innerText = value.ExpenseAmount;
      
//       innerDiv.append(s);
//    });
// }





function saves(){


   var expens_edescription=document.getElementById("inputepense").value;
   var expens_replce=document.getElementById("replaceExpanse").innerText=expens_edescription;
   var expens_amount=document.getElementById("inpAmount").value;
   var converted_amount = parseFloat(expens_amount);
      
 ""
   var expens_amountreplce=document.getElementById("replaceAmountss").innerText="="+expens_amount;
  var newvar=document.getElementById("expense").innerText;
  var converted_amount2 = parseFloat(newvar);
  var finaleAmounts=converted_amount+converted_amount2;
  var aakhry=document.getElementById("expense").innerText=finaleAmounts;

   
}












//  if (typeof localStorage !== 'undefined') {
//    alert("local Storage supported")
//  } else {
//    alert("local  Storage is not supported")
//  }
 
// var person = {
//    name: personName,
//    age: 30,
//    profession: 'Developer'
//  };
 
//  // Using dot notation
//  var personName = prompt("Enter Anything");
//  console.log(personName);













// to save content for reloading
// var textarea = document.getElementById('income').innerText;
// console.log(textarea)
// var enteredText = textarea;
// // console.log(enteredText)
// localStorage.setItem('myContent', enteredText);
// var savedText = localStorage.getItem('myContent');
// // console.log(savedText)


// window.addEventListener('load', function () {
// var savedText = localStorage.getItem('myContent');

// if (savedText) {
//   var textarea = document.getElementById('income').innerText;
// //   console.log(textarea)
//   textarea = savedText;

// }
// localStorage.removeItem('myContent');

// });
























//  var textarea = document.getElementById('income').innerText;
// var enteredText = textarea;


// localStorage.setItem('myContent', enteredText);
// var savedText = localStorage.getItem('myContent');

// window.addEventListener('load', function() {
//    var savedText = localStorage.getItem('myContent');
//    if (savedText) {
//      var textarea = document.getElementById('income');
//      textarea.value = savedText;
//    }
//  });
//  localStorage.removeItem('myContent');