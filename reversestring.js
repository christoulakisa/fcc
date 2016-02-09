function reverseString(str) {
  var arr=str.split("");
  str = arr.reverse();
  str= str.join("");
  return str;
}

reverseString("hello");
