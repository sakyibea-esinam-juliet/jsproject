//1

// const paragraph = document.getElementById("welcomemessage");
// paragraph.innerText = "hello,friend!";

//2
// const para = document.getElementsByTagName("p");
// const paragraphs = [...para].map(p => {paragraphs="this paragrph is updated"})

//or
// const paragraph = document.querrySelectorAll("p");
// paragraph.forEach(el=>(el.innerText="this paragraph is updated"))

//3
//  const paragraph = document.getElementById("mainContent");
//  paragraph.innerHTML = "<h2>updated content</h2>";

//4
// const newLi = document.createElement("li");
// newLi.innerText = "New List Item";
// document.getElementById("mylist").appendChild(newLi);

// const newLi = document.createElement("li");
// newLi.innerText = "New List Item2";
// document.getElementById("mylist").appendChild(newLi);

//5
// const newbutton = document.createElement("button");
// newbutton.innerText = "click me";
// document.getElementsByClassName("buttonContainer")[0].appendChild(newbutton)

//6
// const newLi = document.createElement("li");
// newLi.innerText = "note has been updated";
// document.getElementsByClassName("note")[0].appendChild(newLi);

//7
// container = document.getElementById("paragraphContainer");
// for(let i = 1; i <= 5;i++){
//     const p = document.createElement("p");
//     p.innerText= `paragraph ${i}`;
//     container.appendChild(p)
// }

//8
// const boxDiv = document.createElement("div");
// boxDiv.className = "box";
// const boxP = document.createElement("p");
// boxP.innerText = "I am inside a box";
// document.getElementById("mainWrapper").appendChild(boxP);

// //9
// const newparagraph = document.createElement("p");
// p.innerText = "New output here";
// document.getElementById("outputBox").appendChild("p")

//  let text = "hello world"
//  console.log(text.at(11));

// let text = "hello world"
// console.log(text[2]);
// let text1 ="hello world and hello world i am here" ;
// console.log(text1.replace(/hello world/g, "i am coming"));

// const numbers1 = [1,2,3,4,5,6];
// let numbers2 = numbers1.reduce((num,x) =>(num+2),0);
// console.log(numbers2);

// class car{
//     constructor(name,year){
// this.name = name;
// this.year = year;
//     }
//     age(x){
//         return x - this.year; 
//     }

// }
// const ford = new car("ford",2014);
// console.log(ford.year)
// const button = document.getElementById("btn");
// const heading = document.getElementById("heading")
// button.addEventListener("click",() =>{
//     heading.style.visibility = "visible";
// });

//  const head =document.getElementById("head");
//  head.addEventListener("mouseover",() =>{
//     head.style.color = "blue"
//  })

//  const click = document.getElementById("click")
//  click.addEventListener("mousedown",() =>{
//     click.innerText = "i have been clicked"
//  }
//  );



// let x = 50 + 100
// console.log(x)

// let a = 20
// let b = 40
// let z = a+b
// console.log(z)

// let a = 4;
// let b =(100 +50)*a;
// console.log(b)
// let x = 5
// x+=2;
// console.log(x)

// let y = 6
// y-= 2
// console.log(y);

// let a =10
// let b = 5;
// let c = a>b
// console.log(c)

const theform = document.getElementById("theform");
const errorMessage= document.getElementById("errormsg");
theform.addEventListener("submit",(e) => {
    e.preventDefault();

  const password = document.getElementById("password1").value;
  const confirmpassword = document.getElementById("confirmpassword").value;

  if (password.length < 8){
    errorMessage.innerHTML = "password must be at least 8 characters";
    errorMessage.style.display="block";
    alert("must be at least 8 characters");
  }
 if(password.length==8 !== confirmpassword.length===8){
    errorMessage.innerHTML = "not match"
    errorMessage.style.display = "block"
    alert("not match")
  }
   
  if (password.length==8 && confirmpassword.length ==8){
     errorMessage.style.display="block"
     errorMessage.innerHTML="password match"
     alert("Successful")
     
  }
  //  if(password!== confirmpassword){
  //   errorMessage.innerHTML = "not match"
  //   errorMessage.style.display = "block"
  //   alert("not match")
  // }
    
});










