let n1= parseInt(prompt("Enter number 1"));
let operator= prompt("Enter operator");
let n2=parseInt( prompt("Enter number 2"));
if(operator == "+" ){
    console.log(n1+n2)
}
else if(operator=="-"){
    console.log(n1-n2)
}
else if(operator=="*"){
    console.log(n1*n2)
}
else if(operator=="/"){
    console.log(n1/n2)
}
else if(operator=="%"){
    console.log(n1%n2)
}
else{
    console.log("invalid operator")
}