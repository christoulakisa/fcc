function largestOfFour(arr) {
  // You can do this!
  for(var i=0;i<=arr.length-1;i++){
      var max=0;
      for(var j=0;j<=arr[i].length-1;j++){
          if(arr[i][j]>max){
              max=arr[i][j];
              }
        }
        arr[i]=max;
      }
  return arr;
}
