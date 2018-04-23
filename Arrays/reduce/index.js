"use strict";
var arr = [1,2,3,4,5];
console.log("Output after performing reduce operation >");

var arr1 = arr.reduce ( function (a,x) {
console.log(a,x)
return a+x;

},0);
console.log(arr1);


