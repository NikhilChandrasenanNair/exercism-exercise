//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(inputYear) {
	this.year = inputYear;
};

Year.prototype.isLeap = function() {
//
// YOUR CODE GOES HERE
//
	if(this.year%4 != 0){
		return false;
	}else if(this.year%100 != 0){
		return true;
	}else if(this.year%400 != 0){
		return false;
	}else {
		return true;
	}


};

module.exports = Year;


