function rot13(str) { // LBH QVQ VG!
  var newstr=[];
 for(var i=0; i<=str.length-1;i++){
     newstr[i]=str.charCodeAt(i);
     if(newstr[i]>=65 &&newstr[i]<=77){
         newstr[i]+=13;                 
     }
     else if(newstr[i]>=78 &&newstr[i]<=90){
         newstr[i]-=13;
     }
     newstr[i]=String.fromCharCode(newstr[i]);
 }
  newstr=newstr.join("");
  return newstr;
}
