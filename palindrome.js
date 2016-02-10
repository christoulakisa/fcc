/*credit to ********* https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript
*********** for replace(/[^A-Z0-9]/ig, "")    */



function palindrome(str) {
  
    var a = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var b = a.split('').reverse().join('');
    return (a===b);
}
