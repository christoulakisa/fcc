/*finds longest word of str*/

function findLongestWord(str) {
  var max=0;
  var a=str.split(" ");
  for(var i=0;i<=a.length-1;i++){
      if(a[i].length > max){
          max=a[i].length;
      }
  }
  console.log(max);
  return max;

}
