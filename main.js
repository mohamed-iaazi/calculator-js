
//const readline=require("node:readline");
const ps = require("prompt-sync"); // import the prompt-sync module via npm
const prompt = ps(); // create promot func


let Choix ,a,b;


while(Choix!=8){
    Menu();
}






function Menu(){
    
console.log("----------------Menu--------------------\n"
    +"              1 Addition\n"
     +"             2Multiplication\n"
      +"              3 subtraction\n"
       +"              4 Devided\n"
        +"            5 puissance\n"
        +"              6 Root squir\n"
         +"              7 Factorial\n"
         +"              8/0 Exit\n"
        
           
);


Choix=Number(prompt("Enter Your choice: "));


switch(Choix)
{

case 1:
input();
result("Addition","+",Multiplication());
break;

case 2:
input();
result("Multiplication","*",Multiplication());
break;
case 3:
input();
result("Subtraction","-",Subtraction());
break;
case 4:
input();
result("Devided","/",Devided());
break;
case 5:
input();
result("puissance","**",puissance());
break;
case 6:
input();
result("rootsquire","v-",rootsquire());
break;
case 7:
result("Factorial","n!",Factorial());
break;
case 8:
Exit();
break;
default:


}
}





function Addition(){
    console.log("**********Addition**************");
    return a+b;
    
}
function Multiplication(){
    console.log("**********Multiplication**************");
    return a*b;
}
function Subtraction(){
    console.log("**********Subtraction**************");
    return a-b;

}
function Devided(){
    console.log("**********Devided**************");
    return a/b;
}
function Factorial(){
    console.log("**********Factorial**************");
    a=Number(prompt("Enter n! : "));
    let result=0;

    for (let index = 1; index < a; index++) {
       
        result=a**+result;
    }

    return result;

}

function puissance(){
    console.log("********* puissance**************");
    return Math.pow(a,b);

}
function rootsquire(){
    console.log("**********root squire**************");
    return Math.sqrt(a,b);

}

function Exit(){
    console.log("********** Exit**************");
    console.log("\n\n**********Good By **************\n\n");

}

function  input(){
   a=Number( prompt("Enter number A :  "));
   b= Number(prompt("Enter number B  :  "));
   

}

function result(title,index,sum){
    console.log("The %s of %d %c %d is %d  ",title,a,index,b,sum);
}



