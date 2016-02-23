function where(arr, num) {
  // Find my place in this sorted array.
  var newarr=arr.sort(function(a,b){
        return a-b;}
            );

 for(var i=0;i<=newarr.length-1;i++){
    if (num<=newarr[i]){
         return i;
     }
    else if(num>newarr[newarr.length-1]){
         return newarr.length;
    }
 }
}
