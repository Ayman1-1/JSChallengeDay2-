// ! Start Task 1 : Going back in Time

// ? Start Factorial

function factorial(num) {
  let res = 1;
  for (i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
}
console.log(factorial(6));
// End Factorial

// ? Start  How many digits

function many_digits(Num) {
  let counter = 0;
  if (Num === 0) {
    counter = 1;
  } else
    while (Num >= 1 || Num <= -1) {
      Num = Num / 10;

      counter++;
    }
  return counter;
}

console.log(many_digits(7578));

//  End  How many digits

// ?  Start Days of the week

function day_of_week(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednsday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Unvalid Day.");
  }
}
console.log(day_of_week(4));
//   End Days of the week

//   ? Start Maximum
function Max(a, b, c) {
  if (a > b && a > c) {
    Max = a;
  } else if (b > a && b > c) {
    Max = b;
  } else {
    Max = c;
  }
  return Max;
}
console.log(Max(5, 9, 20));
//    End Maximum
// ! start mygrade score
function gradeScore(score) {
  if (score >= 0 && score <= 100) {
    if (score > 85) {
      console.log("grade is A");
    } else if (score <= 85 && score > 70) {
      console.log("grade is B");
    } else if (score <= 70 && score > 55) {
      console.log("grade is C");
    } else if (score <= 55 && score > 40) {
      console.log("grade is D");
    } else if (score <= 40 && score > 15) {
      console.log("grade is E");
    } else {
      console.log("grade is F");
    }
  }
}
console.log(gradeScore(80));
// end mygrade score

// End Task 1 : Going back in Time

// ! Start Task 2 : The Extended Factorial
// calu cpn
function cpn(n, p) {
  res = factorial(n) / (factorial(p) * factorial(n - p));
  return res;
}
console.log(cpn(5, 2));

// End Task 2 : The Extended Factorial

//! Start Task 3 :  The Calculator
function Calc(x, opp, y) {
  switch (opp) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y);
      break;
    case "/":
      if(y===0){
        console.log("Impossible");
       break;
      }
      else{
        console.log(x / y);
      }
      break;
    case "%":
      console.log(x % y);
      break;
    case "c":
      console.log(cpn(x, y));
      break;

    default:
      console.log("Unvalid opperators.");
  }
}
Calc(5, "c", 2);
console.log(Calc(8, "+", 8));

//! End Task 3 :  The Calculator
