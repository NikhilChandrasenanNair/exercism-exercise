//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//


var Words = function() {};

Words.prototype.count = function(input) {
 var inputArry = input.replace(/¿|¡|\?|:|'(?!\w)|\^|%|\$|!|\.|@|\&|\\'\s/g, "").replace(/\s\'(?=\w)|,|\n|\t|\b  \b/g, " ").toLowerCase().trim().split(" "),
     returnObj = {},
     count = 1;
 inputArry.forEach(function(aObj){
	if(!returnObj.hasOwnProperty(aObj)){
		returnObj[aObj] = count;
        }else{
	   	returnObj[aObj] = returnObj[aObj] + 1;
        }
 });
 return returnObj;
};


module.exports = Words;


