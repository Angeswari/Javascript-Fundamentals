//postfix and prefix form
let a=1;
let b=1;
let c=++a;//increment the value by 1
let d=b++;//increment the value by 1 ,but return "previous" value
console.log(c);//2
console.log(d);//1
console.log(a);//2
console.log(b);//2

let count=1;
console.log(count++);//1, return "previous" value
console.log(count);//2, return updated value.

//Assignment result
let num=2;
let x=1 + (num *=1);
console.log(x);

//unary(+)operand 
let a1="2";
let b1="3";
console.log(+a1 + +b1);
let c1=Number(a1)+Number(b1);
console.log(c1);