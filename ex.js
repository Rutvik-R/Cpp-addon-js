const addon = require('./build/Release/addon');

function jsSum(a , b) {
	
    for (let i = 0 ; i < 1000000000 ; i++) a += b ;
    	
    let total  = a ;

	return total ;
}

console.time('c++');
let result = addon.sum(10 , 20.2);
console.log(result);
console.timeEnd('c++');

console.time('js');
result = jsSum(10 , 20.2);
console.log(result);
console.timeEnd('js');