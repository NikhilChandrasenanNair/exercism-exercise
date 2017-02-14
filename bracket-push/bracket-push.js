//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//


var bracket = function(input) {
	var openBracketArry = [],
	    inputStr = input,
	    returnObj= false;

	for(var i=0; i < inputStr.length ; i++){
		if(inputStr[i] == "{" || inputStr[i] == "(" || inputStr[i] == "["){
			openBracketArry.push(inputStr[i]);
		}else if(inputStr[i] == "}" || inputStr[i] == ")" || inputStr[i] == "]"){
			var popElem = openBracketArry.pop();
			if((popElem == "{" && inputStr[i] == "}") || 
			   (popElem == "(" && inputStr[i] == ")") ||  
			   (popElem == "[" && inputStr[i] == "]")){
			    returnObj = true;
			}else{
			    returnObj = false;
			}
		}
	}

	return returnObj;
};





module.exports = bracket;


