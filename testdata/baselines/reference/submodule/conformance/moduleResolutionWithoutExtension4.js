//// [tests/cases/conformance/externalModules/moduleResolutionWithoutExtension4.ts] ////

//// [foo.tsx]
export function foo() {
    return "";
}

//// [bar.mts]
// Extensionless relative path ES import in an ES module
import { foo } from "./foo"; // should error, suggest adding ".js"


//// [foo.js]
export function foo() {
    return "";
}
//// [bar.mjs]
export {};
