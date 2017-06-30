var toolkit = require('ramda');
toolkit.fork = toolkit.curry(function(join,func1,func2,value) {
	return join(func1(value),func2(value))
});
toolkit.hasLength = function(arr) {
	return arr.length != 0
};
toolkit.conditional = toolkit.curry(function(conditionOne,conditionTwo,val) {
	return val ? conditionTwo(val) : conditionOne(val)
});
toolkit.part = toolkit.curry(function(arr,func) {
	return {
		left:arr.filter(item => {
			return func(item)
		}),
		right:arr.filter(item => {
			return !func(item)
		})
	}
})
toolkit.pull = toolkit.curry(function(obj,key) {
	return obj[key]
})
toolkit.compare = toolkit.curry(function(func,arrOne,arrTwo) {
	return func(arrOne,arrTwo)
})
toolkit.tapP = toolkit.curry(function(func,val) {
	return func(val)
		.then(r => Promise.resolve(val))
		.then(r => Promise.resolve(val))
})

toolkit.wrapper = require('./lib/wrapper.js') 
toolkit.maybe = require('./lib/maybe.js') 
toolkit.either = require('./lib/either.js') 

module.exports = toolkit;