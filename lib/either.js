class Either  {
	constructor(value) {
		this._value = value;		
	}
	get value() {
		return this._value;
	}
	static left(a) {
		return new Left(a);
	}
	static right(a) {
		return new Right(a);
	}	
	static fromNullable(val) {
		return val !== null ? new Right(val) : new Left(val);
	}
	static of(a) {
		return new Right(a);
	}
}

class Left extends Either {
	constructor(value) {
		super()
		this._value = value;		
	}
	map(_) {
		return this;
	}
	get value() {
		throw new TypeError(`Can't extract the value of a left(a).`)
	}
	getOrElse(other) {
		return other;
	}
	orElse(f) {
		return f(this._value)
	}
	chain(f) {
		return this;
	}
	getOrElseThrow(a) {
		throw new Error(a);
	}
	filter(f) {
		return this;
	}
	toString() {
		return `Either.Left(${this._value})`;
	}
}
class Right extends Either {
	constructor(value) {
		super()
		this._value = value;		
	}
	map(f) {
		return Either.of(f(this._value))
	}
	getOrElse(other) {
		return this._value
	}
	get value() {
		return this._value
	}
	orElse() {
		return this;
	}
	chain(f) {
		return f(this._value)
	}
	getOrElseThrow(_) {
		return this._value
	}
	filter(f) {
		return either.fromNullable(f(this._value) ? this._value : null);
	}
	toString() {
		return `Either.Right(${this._value})`
	}
}
module.exports = Either;