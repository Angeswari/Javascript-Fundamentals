var myStates=[
    "TamilNadu",
    "Rajasthan",
    1947,
    "Assam",
    "Delhi",
    "Maharashtra"
]
for(let i=0;i<myStates.length;i++){
    if( typeof myStates[i]!="string") continue;
    console.log(myStates[i]); 
}

// for(let i=0;i<myStates.length;i++){
//     if( typeof myStates[i] === "string") continue;
//     console.log(myStates[i]); 
// }

// for(let i=0;i<myStates.length;i++){
//     if( typeof myStates[i] != "string") break;
//     console.log(myStates[i]); 
// }

//break and continue will work in "{}" i.e inside scoping;
