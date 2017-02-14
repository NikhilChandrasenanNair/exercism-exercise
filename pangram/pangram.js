//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// using letter frequency

var Pangram = function(input) {
   this.inputStr = input.toLowerCase().replace(/_|-|\s|(\\")/g,"");
};

Pangram.prototype.isPangram = function() {
   var input = this.inputStr,
       letters="zqxjkvbpygfwmucldrhsnioate";
     for(var i=0;i<letters.length;i++){
	 if(input.indexOf(letters.charAt(i)) == -1){
	   return false;
	 }
     }
   return true;
};


module.exports = Pangram;


