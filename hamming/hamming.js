//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Hamming = function() {};

Hamming.prototype.compute = function(first, second) {
//
// YOUR CODE GOES HERE
//
	if(first.length == second.length){
		var firstStrand = first.split(''),
		    secondStrand = second.split(''),
		    length = firstStrand.length,
		    count = 0;

		for(var i = 0; i < length; i++){
			if(firstStrand[i] != secondStrand[i]){
				count = count+ 1;
			}
		}

		return count;
	}else{
		throw new Error('DNA strands must be of equal length.');

	}


};

module.exports = Hamming;


