//// [tests/cases/compiler/declarationEmitFBoundedTypeParams.ts] ////

//// [declarationEmitFBoundedTypeParams.ts]
// Repro from #6040

function append<a, b extends a>(result: a[], value: b): a[] {
    result.push(value);
    return result;
}


//// [declarationEmitFBoundedTypeParams.js]
// Repro from #6040
function append(result, value) {
    result.push(value);
    return result;
}


//// [declarationEmitFBoundedTypeParams.d.ts]
// Repro from #6040
declare function append<a, b extends a>(result: a[], value: b): a[];
