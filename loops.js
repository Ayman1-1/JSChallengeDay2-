// !Start Task 1 : Factorial
let num = 5;
let res=1;
if(num===0){
    res=0
}
else 
for (i=1 ; i<=num; i++) {
res= res*i
}
console.log(res)
// End Task 1 : Factorial

// !Start Task 2 : How many digits ?
    let Num = 123542;
    let counter = 0;
    if (Num===0){
        counter=1;
    }
    else
    while (Num >=1 || Num<=-1 ) {
    Num = (Num / 10);
  
        counter++;  
    
    }
    console.log(counter);

// End Task 2 : How many digits ?

// !Start Task 3 :  Time to draw !
let tree = 4;

for (let i = 1; i <= tree; i++) {
  let space = "";
  for (let j = 0; j < tree - i; j++) {
    space += " ";
  }

  let num = "";
  for (let k = 0; k < 2 * i - 1; k++) {
    num += "*";
  }

  let result = space + num;
  console.log(result);
}
let trunkSpace = "";
let trunk = "|";
for (let i = 0; i < tree - 1; i++) {
  trunkSpace = trunkSpace+" ";
}

let trunkResult = trunkSpace + trunk;
console.log(trunkResult);
// End Task 3 :  Time to draw !
