const { stdin, stdout } = require("node:process");
const readline=require("node:readline");
const{stdin:input,stdout:output}=require("node:process");
const { Console } = require("node:console");
const { existsSync } = require("node:fs");
const { resolve } = require("node:path");
let Choix ,a,b;

console.log("----------------Menu--------------------\n"
           +"              1 Addition\n"
            +"              2 Multiplication\n"
             +"              3 subtraction\n"
              +"              4 Devided\n"
               +"              5 puissance\n"
               +"              6 Root squir\n"
                +"              7 Factorial\n"
                +"              8/0 Exit\n"
               
                  
);


const rl=readline.createInterface(input,output)


rl.question("\n\n Enter Your Choix: ",(userinput)=>{
    console.log(userinput);
    Choix=userinput;
    console.log(Choix);
   
    switch(Choix)
{
    
case "1":
    
result("Addition",'+',Addition())
break;

case "2":
Multiplication();
break;
case "3":
Subtraction();
break;
case "4":
Devided();
break;
case "5":
puissance();
break;
case "6":
rootsquire();
break;

case "7":
Factorial();
break;
case "8":
exist();
break;
default:
    

}

rl.close();
    
});

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
    for(i=0;i<a;i++){

    }
}

function puissance(){
    console.log("********* puissance**************");
}
function rootsquire(){
    console.log("**********root squire**************");
}

function rootsquire(){
    console.log("********** Exit**************");
    console.log("\n\n**********Good By **************\n\n");

}

function result(title,index,sum){
    console.log("The %s of %d %c %d is %d  ",title,a,index,b,sum);
}



