//// [tests/cases/compiler/genericClasses0.ts] ////

//// [genericClasses0.ts]
class C<T> {
	public x: T;
}

var v1 : C<string>;

var y = v1.x; // should be 'string'

//// [genericClasses0.js]
class C {
    x;
}
var v1;
var y = v1.x; // should be 'string'


//// [genericClasses0.d.ts]
declare class C<T> {
    x: T;
}
declare var v1: C<string>;
declare var y: string; // should be 'string'
