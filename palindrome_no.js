var rem , temp , final=0;
var number = 474;
temp = number;
while(number > 0){
    rem = number % 10;
    number = parseInt(number/10);
    final = final*10 + rem;
}
if(final == temp){
    console.log("Its a palindrome");
}
else{
     console.log("Its not a palindrome");
}