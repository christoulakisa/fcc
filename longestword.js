/*finds longest word in string of characters*/

function findLongestWord(str) {
  var counter=0, max=0;
/*string to array*/
  var a=str.split("");
  for(var i=0;i<=a.length-1;i++){
      if (a[i]===" " ){
          if( counter>max){
              max=counter;
                }
          counter=0;
      }
      /*last character is not a space*/
      else if (i===a.length-1){
          counter++;
          if( counter>max){
              max=counter;
                }
      }
      /*non-space character*/
       else if(a[i]!==" "){
          counter++;
        } 
  }
  console.log(max);
  return max;
}
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
