//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
//
// YOUR CODE GOES HERE
//

	var rnaTranscriptedResult="",
	    rnaInputLength = input.length,
	    counter = 0;

	for(var i=0; i < rnaInputLength; i++){
		if(input[i] == "A"){
 			rnaTranscriptedResult = rnaTranscriptedResult + "U";
			counter++;
		}else if(input[i] == "C"){
			rnaTranscriptedResult = rnaTranscriptedResult + "G";
			counter++;
		}else if(input[i] == "G"){
			rnaTranscriptedResult = rnaTranscriptedResult + "C";
			counter++;
		}else if(input[i] == "T"){
			rnaTranscriptedResult = rnaTranscriptedResult + "A";
			counter++;
		}else{
			if(counter == 0){
				throw new Error('Invalid input');
			}else{
				throw new Error('Invalid input');
			}
		}

	}

	return  rnaTranscriptedResult;


};

module.exports = DnaTranscriber;


