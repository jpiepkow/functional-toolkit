functional-toolkit
==================
Description: This lib is my own ongoing collection of functions that I seem to keep having to write when writing functional code. This library starts by wrapping all of the functionality of ramda and then extends with my own set of functions on top.

Usage:
	
	npm install functional-toolkit
	const F = require('functional-toolkit')
	
	//ALL FUNCTIONS CURRIED
	
	//takes the result of func1(value) and func2(value)
	 and passes it to the joinFunc that is returned.
	 
	F.fork(joinFunc,func1,func2,value)
	
	//hasLength takes array and returns true or false if has length
	
	F.hasLength([1,2,3]) => true
	
	//conditional runs conditionOne if value is null else runs conditionTwo
	
	F.conditional(conditionOne,conditionTwok,val)
	
	//part returns both sides of a filter on an array in an object
	//left side being the array filtered with function passed in
	//right side being the reverse
	
	F.part(arr,filterFunction) => {left:[1,2,3],right:[4,5,6]}
	
	//pull pulls a value from an object
	
	F.pull({one:1,two:2},'one') => 1
	
	//compare passes two arrays as args to a compare function
	
	F.compare(compareFunc,arrOne,arrTwo)

	//tapP is used as the same thing as tap except for a promise

	F.tapP(function that returns a promise) => args passed in returned in resolve

	added F.maybe F.either and F.wrapper monads. Will at documentation at some point in the future but
	for now look into the lib folder.
	
will continue to add to this lib. When I find myself rewriting functions they will just be added to this lib.	