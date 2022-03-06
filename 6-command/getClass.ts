
/*
function Foo() {

}

const foo = new Foo()

console.log(foo)
console.log(typeof(foo))
console.log(foo.constructor)
console.log(foo.constructor.name)
*/

class Bar {

}

const bar = new Bar()
console.log(bar.constructor.prototype.constructor.name)
