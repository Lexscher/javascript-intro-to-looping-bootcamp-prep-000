fuction forLoop(arr) {
  for(let i = 0; i < 25; i++) {
    i === 0 || i === 1 ? arr.push("I am 1 strange loop.") : arr.push(`I am ${i} strage loops`);
  }
}

function whileLoop(n){
  while(n > 0) {
    console.log(n);
    n--;
  }
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
    num--;
  } while (num > 0)
}

