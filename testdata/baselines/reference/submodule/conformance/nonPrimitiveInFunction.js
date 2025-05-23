//// [tests/cases/conformance/types/nonPrimitive/nonPrimitiveInFunction.ts] ////

//// [nonPrimitiveInFunction.ts]
function takeObject(o: object) {}
function returnObject(): object {
    return {};
}

var nonPrimitive: object;
var primitive: boolean;

takeObject(nonPrimitive);
nonPrimitive = returnObject();

takeObject(primitive); // expect error
primitive = returnObject(); // expect error

function returnError(): object {
    var ret = 123;
    return ret; // expect error
}


//// [nonPrimitiveInFunction.js]
function takeObject(o) { }
function returnObject() {
    return {};
}
var nonPrimitive;
var primitive;
takeObject(nonPrimitive);
nonPrimitive = returnObject();
takeObject(primitive); // expect error
primitive = returnObject(); // expect error
function returnError() {
    var ret = 123;
    return ret; // expect error
}
