//// [tests/cases/conformance/async/es6/asyncArrowFunction/asyncArrowFunction10_es6.ts] ////

//// [asyncArrowFunction10_es6.ts]
var foo = async (): Promise<void> => {
   // Legal to use 'await' in a type context.
   var v: await;
}


//// [asyncArrowFunction10_es6.js]
var foo = async () => {
    // Legal to use 'await' in a type context.
    var v;
};
