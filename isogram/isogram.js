//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//


var Isogram = function(input) {
   this.inputStr = input.toLowerCase().replace(/-|\s/g,"");
};

Isogram.prototype.isIsogram = function() {
   var input = this.inputStr;
     for(var i=0;i<input.length;i++){
       for(var j=i+1;j<input.length;j++){
	 if(input.charAt(i) == input.charAt(j)){
	   return false;
	 }
       }
     }
   return true;
};


module.exports = Isogram;


