//Bài 1
console.log("Bài 1: ");
let n = 3;
function getFib(n) {
  if (n <= 2) return 1;
  else return getFib(n - 1) + getFib(n - 2);
}

// Có thể sử dụng quy hoạch động để tối ưu bộ nhớ và giảm độ phức tạp thuật toán
// let fib = [];
// function getFib(n) {
//   if (n <= 2) return 1;
//   if(fib[n]) return fib[n];
//   else return fib[n] = getFib(n - 1) + getFib(n - 2);
// }

function sumFib(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    return "Đầu vào không hợp lệ";
  } else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += getFib(i);
    }
    return sum;
  }
}

console.log(`Tổng ${n} số fibonacci đầu tiên là: ${sumFib(n)}`);
console.log("=====================");

//Bài 2
console.log("Bài 2: ");
function checkTriangleEdge(a, b, c) {
  let isValidEdgeA = Number.isFinite(a) && a > 0;
  let isValidEdgeB = Number.isFinite(b) && b > 0;
  let isValidEdgeC = Number.isFinite(c) && c > 0;
  if(!isValidEdgeA || !isValidEdgeB || !isValidEdgeC) return false;
  return a + b > c && a + c > b && b + c > a;
}

console.log(checkTriangleEdge(5, 4, 3));
console.log("=====================");

//Bài 3
console.log("Bài 3: ");
function calcBMI(weight, height) {
  let isValidWeight = Number.isFinite(weight) && weight > 0;
  let isValidHeight = Number.isFinite(height) && height > 0;
  if(!isValidWeight || !isValidHeight) return "Dữ liệu không hợp lệ";
  let BMI = weight / (height * height);
  if(BMI < 18.5) {
    return "Thiếu cân";
  } else if(BMI < 23) {
    return "Bình thường";
  } else if(BMI < 25) {
    return "Thừa cân";
  } else {
    return "Béo phì";
  }
}

console.log(calcBMI(71, 1.72));
console.log("=====================");

//Bài 4
console.log("Bài 4: ");
const fullName = "     manCHESter    united      club  ";
const fullNameTrim = fullName.trim().toLowerCase();
let fullNameTrimLength = fullNameTrim.length;
let standardFullName = "";
for(let i = 0; i < fullNameTrimLength; i++) {
  if(fullNameTrim[i] === " " && fullNameTrim[i - 1] === " ") continue;
  if(i === 0 || fullNameTrim[i - 1] === " ") {
    standardFullName += fullNameTrim[i].toUpperCase();
    continue;
  }
  standardFullName += fullNameTrim[i];
}

console.log(standardFullName);
console.log("=====================");

//Bài 5
console.log("Bài 5: ");
function checkUpperCase(str, language = "vi-VN") {
  let isValidStr = typeof str == "string" && str.trim();
  let isValidLanguage = typeof language == "string" && language.trim();
  if(!isValidStr || !isValidLanguage) return false;
  return str === str.toLocaleUpperCase(language);
}

console.log(checkUpperCase("   Á   "));
console.log("=====================");

//Bài 6
console.log("Bài 6: ");
const str = "    Manchester      United Club";
function reverseWord(str) {
  if(typeof str !== "string" || str.trim() === "") return "Đầu vào không hợp lệ";
  let reverseStr = "";
  const strTrim = str.trim();
  let indexFirstWhiteSpace = strTrim.indexOf(" ");
  if(indexFirstWhiteSpace === -1) {
    return reverseStr = strTrim;
  }
  let indexLastWhiteSpace = strTrim.lastIndexOf(" ");
  let firstWord = strTrim.slice(0, indexFirstWhiteSpace);
  let lastWord = strTrim.slice(indexLastWhiteSpace + 1);
  reverseStr += lastWord;
  for(let i = indexFirstWhiteSpace; i <= indexLastWhiteSpace; i++) {
    if(strTrim[i] === " " && strTrim[i - 1] === " ") continue;
    reverseStr += strTrim[i];
  }
  reverseStr += firstWord;
  return reverseStr;
}

console.log(reverseWord(str));

