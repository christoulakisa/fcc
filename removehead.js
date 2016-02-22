function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany>=arr.length){
    arr=[];
  }
  else{
    arr.splice(0,howMany);
  }
  return arr;
}
