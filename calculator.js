let a=67,
    b=43;
let ch='/';
console.log("-----------MATHEMATICAL CALCULATOR-------------");
console.log("Implementing my basic calculator using switch statement.......");
switch(ch){
    case '+' : console.log(a+b);
               break;
    case '-' : console.log(a-b);
               break;
    case '*' : console.log(a*b);
               break;
    case '/' : console.log(a/b);
               break;
    default  : console.log("You have entered an invalid choice please try with a valid choice again.......");
}
