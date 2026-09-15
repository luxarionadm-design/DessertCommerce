/**
 * @author luxarionadm-design
 * @file utils.js
 * @description Console utilities and general helpers for the DessertCommerce engine.
 * @repository https://github.com/luxarionadm-design/DessertCommerce
 */

const _cache = {};

let _setConsoleFunction = null;

/**
 * Sets a custom function to handle console output.
 *
 * @param {Function} fn - The function to handle console output. Should accept
 *                        ( type, message, ...params ) where type is 'log', 'warn', or 'error'.
 */
function setConsoleFunction( fn ) {

	_setConsoleFunction = fn;

}

/**
 * Gets the currently set custom console function.
 *
 * @return {Function|null} The custom console function, or null if not set.
 */
function getConsoleFunction() {

	return _setConsoleFunction;

}

/**
 * Logs an informational message with the 'DESSERT.' prefix.
 *
 * @param {...any} params - The message components. The first param is used as
 *                          the method name and prefixed with 'DESSERT.'.
 */
function log( ...params ) {

	const message = 'DESSERT.' + params.shift();

	if ( _setConsoleFunction ) {

		_setConsoleFunction( 'log', message, ...params );

	} else {

		console.log( message, ...params );

	}

}

/**
 * Logs a warning message with the 'DESSERT.' prefix.
 *
 * @param {...any} params - The message components. The first param is used as
 *                          the method name and prefixed with 'DESSERT.'.
 */
function warn( ...params ) {

	const message = 'DESSERT.' + params.shift();

	if ( _setConsoleFunction ) {

		_setConsoleFunction( 'warn', message, ...params );

	} else {

		console.warn( message, ...params );

	}

}

/**
 * Logs an error message with the 'DESSERT.' prefix.
 *
 * @param {...any} params - The message components. The first param is used as
 *                          the method name and prefixed with 'DESSERT.'.
 */
function error( ...params ) {

	const message = 'DESSERT.' + params.shift();

	if ( _setConsoleFunction ) {

		_setConsoleFunction( 'error', message, ...params );

	} else {

		console.error( message, ...params );

	}

}

/**
 * Logs a warning message only once, preventing duplicate warnings.
 *
 * @param {...any} params - The warning message components.
 */
function warnOnce( ...params ) {

	const message = params.join( ' ' );

	if ( message in _cache ) return;

	_cache[ message ] = true;

	warn( ...params );

}

/**
 * Returns true if the given value is a string.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is a string.
 */
function isString( value ) {

	return typeof value === 'string';

}

/**
 * Returns true if the given value is a number.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is a number.
 */
function isNumber( value ) {

	return typeof value === 'number';

}

/**
 * Returns true if the given value is a boolean.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is a boolean.
 */
function isBoolean( value ) {

	return typeof value === 'boolean';

}

/**
 * Returns true if the given value is a function.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is a function.
 */
function isFunction( value ) {

	return typeof value === 'function';

}

/**
 * Returns true if the given value is an object.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is an object.
 */
function isObject( value ) {

	return value !== null && typeof value === 'object' && Array.isArray( value ) === false;

}

/**
 * Returns true if the given value is an array.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is an array.
 */
function isArray( value ) {

	return Array.isArray( value );

}

/**
 * Returns true if the given value is a plain object.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is a plain object.
 */
function isPlainObject( value ) {

	if ( isObject( value ) === false ) return false;

	const prototype = Object.getPrototypeOf( value );

	return prototype === null || prototype === Object.prototype;

}

/**
 * Returns true if the given value is null or undefined.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is null or undefined.
 */
function isNullish( value ) {

	return value === null || value === undefined;

}

/**
 * Returns true if the given value is a class.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Whether the value is a class.
 */
function isClass( value ) {

	return isFunction( value ) && /^class\s/.test( Function.prototype.toString.call( value ) );

}

/**
 * Returns a shallow clone of the given object.
 *
 * @param {Object} object - The object to clone.
 * @return {Object} The cloned object.
 */
function clone( object ) {

	if ( isArray( object ) ) return object.slice();

	if ( isPlainObject( object ) ) return { ...object };

	return object;

}

/**
 * Returns a deep clone of the given value.
 *
 * @param {any} value - The value to clone.
 * @return {any} The cloned value.
 */
function deepClone( value ) {

	if ( isArray( value ) ) {

		return value.map( ( item ) => deepClone( item ) );

	}

	if ( isPlainObject( value ) ) {

		const result = {};

		for ( const key in value ) {

			result[ key ] = deepClone( value[ key ] );

		}

		return result;

	}

	return value;

}

/**
 * Merges the source objects into the target object.
 *
 * @param {Object} target - The target object.
 * @param {...Object} sources - The source objects.
 * @return {Object} The target object.
 */
function merge( target, ...sources ) {

	for ( let i = 0, l = sources.length; i < l; ++ i ) {

		const source = sources[ i ];

		if ( isNullish( source ) ) continue;

		for ( const key in source ) {

			target[ key ] = source[ key ];

		}

	}

	return target;

}

/**
 * Generates a universally unique identifier.
 *
 * @return {string} The UUID.
 */
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;

	const uuid = _hex[ d0 & 0xff ] + _hex[ d0 >> 8 & 0xff ] + _hex[ d0 >> 16 & 0xff ] + _hex[ d0 >> 24 & 0xff ] + '-' +
		_hex[ d1 & 0xff ] + _hex[ d1 >> 8 & 0xff ] + '-' +
		_hex[ d1 >> 16 & 0x0f | 0x40 ] + _hex[ d1 >> 24 & 0xff ] + '-' +
		_hex[ d2 & 0x3f | 0x80 ] + _hex[ d2 >> 8 & 0xff ] + '-' +
		_hex[ d2 >> 16 & 0xff ] + _hex[ d2 >> 24 & 0xff ] + _hex[ d3 & 0xff ] + _hex[ d3 >> 8 & 0xff ] + _hex[ d3 >> 16 & 0xff ] + _hex[ d3 >> 24 & 0xff ];

	return uuid.toLowerCase();

}

const _hex = [];

for ( let i = 0; i < 256; ++ i ) {

	_hex[ i ] = ( i < 16 ? '0' : '' ) + i.toString( 16 );

}

/**
 * Returns the current timestamp in milliseconds.
 *
 * @return {number} The current timestamp.
 */
function now() {

	return Date.now();

}

/**
 * Returns the current timestamp in seconds.
 *
 * @return {number} The current timestamp in seconds.
 */
function nowSeconds() {

	return Math.floor( Date.now() / 1000 );

}

/**
 * Formats a date as an ISO string.
 *
 * @param {Date|number} date - The date to format.
 * @return {string} The formatted date.
 */
function formatDate( date ) {

	const d = date instanceof Date ? date : new Date( date );
	return d.toISOString();

}

/**
 * Parses a date string into a timestamp.
 *
 * @param {string} value - The date string.
 * @return {number} The timestamp.
 */
function parseDate( value ) {

	return new Date( value ).getTime();

}

/**
 * Returns a promise that resolves after the given milliseconds.
 *
 * @param {number} ms - The delay in milliseconds.
 * @return {Promise<void>} A promise that resolves after the delay.
 */
function delay( ms ) {

	return new Promise( ( resolve ) => setTimeout( resolve, ms ) );

}

/**
 * Freezes an object and all its properties.
 *
 * @param {Object} object - The object to freeze.
 * @return {Object} The frozen object.
 */
function deepFreeze( object ) {

	Object.freeze( object );

	for ( const key in object ) {

		const value = object[ key ];

		if ( isObject( value ) && Object.isFrozen( value ) === false ) {

			deepFreeze( value );

		}

	}

	return object;

}

/**
 * Throws an error if the given value is nullish.
 *
 * @param {any} value - The value to check.
 * @param {string} message - The error message.
 * @return {any} The value if not nullish.
 */
function required( value, message ) {

	if ( isNullish( value ) ) {

		throw new Error( message );

	}

	return value;

}

export {
	setConsoleFunction,
	getConsoleFunction,
	log,
	warn,
	error,
	warnOnce,
	isString,
	isNumber,
	isBoolean,
	isFunction,
	isObject,
	isArray,
	isPlainObject,
	isNullish,
	isClass,
	clone,
	deepClone,
	merge,
	generateUUID,
	now,
	nowSeconds,
	formatDate,
	parseDate,
	delay,
	deepFreeze,
	required
};
