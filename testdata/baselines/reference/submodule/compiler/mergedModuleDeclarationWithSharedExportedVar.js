//// [tests/cases/compiler/mergedModuleDeclarationWithSharedExportedVar.ts] ////

//// [mergedModuleDeclarationWithSharedExportedVar.ts]
module M {
    export var v = 10;
    v;
}
module M {
    v;
}

//// [mergedModuleDeclarationWithSharedExportedVar.js]
var M;
(function (M) {
    M.v = 10;
    M.v;
})(M || (M = {}));
(function (M) {
    v;
})(M || (M = {}));
