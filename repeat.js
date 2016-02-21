function repeat(str, num) {
  // repeat after me
  var temp=str;
  if(num<=0){
    str="";
  }
  else{
    for(var i=1;i<num;i++){
      str+=temp;
    }
  }
  return str;
}

repeat("abc", 2);
