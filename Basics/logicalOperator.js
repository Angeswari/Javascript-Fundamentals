//OR Logical operator,

let IsLoggedInFrom_Email=true;
let IsLoggedInFrom_Google=false;
let IsLoggedInFrom_Facebook=false;
if(IsLoggedInFrom_Email || IsLoggedInFrom_Google || IsLoggedInFrom_Facebook==true){
      console.log("Login");
}
else{
    console.log("signup");
}

//AND Logical operator,
//precedence of AND is greater than OR,
var isLoggedIn=true;
var isEmailVerified=true;
var cardInfo=true;
if(isLoggedIn && isEmailVerified && cardInfo==true){
    console.log("you are allowed to purchase");
}else{
    console.log("sorry! you are not allowed to purchase");
}

//NOT Logical operator,
console.log(!true);
console.log(!null);
console.log(!undefined);
console.log(!NaN);