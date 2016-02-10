/* Capitalize first letter of words in string*/

function titleCase(str){
  var a=str.split("");
    
  a[0]=a[0].toUpperCase();
  for(var i=0;i<=a.length-2;i++){
    if(a[i]===" "){
            a[i+1]=a[i+1].toUpperCase();
        }
    else{  
            a[i+1]=a[i+1].toLowerCase();
        }
    }
  str=a.join("");
  return str;    
}
