class Maybe {
	static just(a) {
		return new Just(a)
	}
	static nothing() {
		return new Nothing();
	}
	static fromNullable(a) {
		return a !== null ? new Just(a) : new Nothing();	
	}
	static of(a) {
		return new Just(a);
	}
	get isNothing() {
		return false;
	}
	get isJust() {
		return false;
	}
}
class Just extends Maybe {
	constructor(value) {
		super();
		this._value = value;	
	}
	get value() {
		return this._value
	}
	map(f) {
		return Maybe.of(f(this._value))
	}
	getOrElse() {
		return this._value
	}
	filter(f) {
		Maybe.fromNullable(f(this._value) ? this._value : null)
	}
	get isJust() {
		return true;
	}
	get isNothing() {
		return true;
	}
	toString() {
		return `Maybe.Just(${this._value})`
	}
}
class Nothing extends Maybe {
	constructor(value) {
		super();
		this._value = value;	
	}
	get value() {
		throw new TypeError(`Can't extract the value of a Nothing`)
	}
	map(f) {
		return this;
	}
	getOrElse(other) {
		return other 
	}
	filter(f) {
		return this._value
	}
	get isJust() {
		return false;
	}
	get isNothing() {
		return true;
	}
	toString() {
		return `Maybe.Nothing`
	}
}
	module.exports = Maybe;
