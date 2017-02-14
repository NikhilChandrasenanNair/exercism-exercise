//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// using letter frequency

var rle = function() {};


rle.prototype.encode = function(input) {
   var inputStr =  input,
       length = inputStr.length,
       count = 1,
       encodeStr='';
   for(var i=0;i<length;i++){
     if(inputStr.charAt(i) == input.charAt(i+1)){
       count++;
     }else{	
       encodeStr = encodeStr + (count > 1 ? count : '') + inputStr.charAt(i);
       count = 1;
     }
   }
return encodeStr;
};

rle.prototype.decode = function(input) {

 /* var decodeStr='',
      arry = input.split('');

  for(var i = 0; i < arry.length; i++){
      var item =  parseInt(arry[i]);  

      if(!isNaN(item)){
         for(var j = 0; j < item-1 ; j++){
            decodeStr =  decodeStr + arry[i+1];
         }
      }else{
	    decodeStr = decodeStr + arry[i];
      }
  }  */

   var pattrn = /(\d*\w?)/g,
       arry = input.split(pattrn),
       decodeStr='',
       tempArry;
   for(var i = 0; i < arry.length; i++){
	var item = parseInt(arry[i]),
            repeatStr = arry[i].replace(item,"");
	if(arry[i] != '' && !isNaN(item)){
	  for(var j = 0; j < item; j++){
      	    decodeStr = decodeStr + repeatStr;
          }
        }else if(arry[i].length == 1){
	    decodeStr = decodeStr + arry[i];
        }        
   }
   return decodeStr;
};



module.exports = rle;


