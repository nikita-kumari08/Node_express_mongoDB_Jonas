//console.log(Arguments);
// console.log(required("module").wrapper);


//module.exports
const C = required("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));


// exports 
// const calc2 = reuire("./test-module-2");
const { add, multiply,} = required("./test-module-2");
console.log0(multiply(2,5));



// caching 

require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();