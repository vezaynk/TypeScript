Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/core/anotherModule.ts]
export const World = "hello";


//// [/src/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }


//// [/src/core/some_decl.d.ts]
declare const dts: any;


//// [/src/core/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "declarationMap": true,
        "skipDefaultLibCheck": true
    }
}

//// [/src/logic/index.ts]
import * as c from '../core/index';
export function getSecondsInDay() {
    return c.multiply(10, 15);
}
import * as mod from '../core/anotherModule';
export const m = mod;


//// [/src/logic/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "sourceMap": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../core" }
    ]
}


//// [/src/tests/index.ts]
import * as c from '../core/index';
import * as logic from '../logic/index';

c.leftPad("", 10);
logic.getSecondsInDay();

import * as mod from '../core/anotherModule';
export const m = mod;


//// [/src/tests/tsconfig.json]
{
    "references": [
        { "path": "../core" },
        { "path": "../logic" }
    ],
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    }
}

//// [/src/ui/index.ts]
import * as logic from '../logic';

export function run() {
    console.log(logic.getSecondsInDay());
}


//// [/src/ui/tsconfig.json]
{
    "compilerOptions": {
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../logic/index" }
    ]
}




Output::
/lib/tsc --b /src/tests --listEmittedFiles
TSFILE: /src/core/anotherModule.js
TSFILE: /src/core/anotherModule.d.ts.map
TSFILE: /src/core/anotherModule.d.ts
TSFILE: /src/core/index.js
TSFILE: /src/core/index.d.ts.map
TSFILE: /src/core/index.d.ts
TSFILE: /src/core/tsconfig.tsbuildinfo
TSFILE: /src/logic/index.js.map
TSFILE: /src/logic/index.js
TSFILE: /src/logic/index.d.ts
TSFILE: /src/logic/tsconfig.tsbuildinfo
TSFILE: /src/tests/index.js
TSFILE: /src/tests/index.d.ts
TSFILE: /src/tests/tsconfig.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/core/anotherModule.d.ts]
export declare const World = "hello";
//# sourceMappingURL=anotherModule.d.ts.map

//// [/src/core/anotherModule.d.ts.map]
{"version":3,"file":"anotherModule.d.ts","sourceRoot":"","sources":["anotherModule.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,KAAK,UAAU,CAAC"}

//// [/src/core/anotherModule.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
exports.World = "hello";


//// [/src/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;
//# sourceMappingURL=index.d.ts.map

//// [/src/core/index.d.ts.map]
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,UAAU,EAAE,MAAsB,CAAC;AAChD,wBAAgB,OAAO,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB;AAC/D,wBAAgB,QAAQ,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB"}

//// [/src/core/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.leftPad = exports.someString = void 0;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
exports.leftPad = leftPad;
function multiply(a, b) { return a * b; }
exports.multiply = multiply;


//// [/src/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-2676574883-export const World = \"hello\";\r\n","signature":"-9234818176-export declare const World = \"hello\";\n"},{"version":"-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n","signature":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n"},{"version":"-9253692965-declare const dts: any;\r\n","affectsGlobalScope":true}],"root":[[2,4]],"options":{"composite":true,"declaration":true,"declarationMap":true,"skipDefaultLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./anothermodule.ts": {
        "original": {
          "version": "-2676574883-export const World = \"hello\";\r\n",
          "signature": "-9234818176-export declare const World = \"hello\";\n"
        },
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "./index.ts": {
        "original": {
          "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
          "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n"
        },
        "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n"
      },
      "./some_decl.d.ts": {
        "original": {
          "version": "-9253692965-declare const dts: any;\r\n",
          "affectsGlobalScope": true
        },
        "version": "-9253692965-declare const dts: any;\r\n",
        "signature": "-9253692965-declare const dts: any;\r\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "./anothermodule.ts",
          "./index.ts",
          "./some_decl.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1477
}

//// [/src/logic/index.d.ts]
export declare function getSecondsInDay(): number;
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/src/logic/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m = exports.getSecondsInDay = void 0;
var c = require("../core/index");
function getSecondsInDay() {
    return c.multiply(10, 15);
}
exports.getSecondsInDay = getSecondsInDay;
var mod = require("../core/anotherModule");
exports.m = mod;
//# sourceMappingURL=index.js.map

//// [/src/logic/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":";;;AAAA,iCAAmC;AACnC,SAAgB,eAAe;IAC3B,OAAO,CAAC,CAAC,QAAQ,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AAC9B,CAAC;AAFD,0CAEC;AACD,2CAA6C;AAChC,QAAA,CAAC,GAAG,GAAG,CAAC"}

//// [/src/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","-9234818176-export declare const World = \"hello\";\n",{"version":"-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"root":[4],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3],[3]],"referencedMap":[[4,1]],"exportedModulesMap":[[4,2]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n"
      },
      "../core/anothermodule.d.ts": {
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "./index.ts": {
        "original": {
          "version": "-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
          "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
        },
        "version": "-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "root": [
      [
        4,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1512
}

//// [/src/tests/index.d.ts]
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/src/tests/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m = void 0;
var c = require("../core/index");
var logic = require("../logic/index");
c.leftPad("", 10);
logic.getSecondsInDay();
var mod = require("../core/anotherModule");
exports.m = mod;


//// [/src/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n","-9234818176-export declare const World = \"hello\";\n","-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",{"version":"12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"root":[5],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,1]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n"
      },
      "../core/anothermodule.d.ts": {
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "../logic/index.d.ts": {
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      },
      "./index.ts": {
        "original": {
          "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
          "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
        },
        "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "root": [
      [
        5,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1657
}



Change:: incremental-declaration-changes
Input::
//// [/src/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }

export class someClass { }



Output::
/lib/tsc --b /src/tests --listEmittedFiles
TSFILE: /src/core/index.js
TSFILE: /src/core/index.d.ts.map
TSFILE: /src/core/index.d.ts
TSFILE: /src/core/tsconfig.tsbuildinfo
TSFILE: /src/logic/index.js.map
TSFILE: /src/logic/index.js
TSFILE: /src/logic/tsconfig.tsbuildinfo
TSFILE: /src/tests/index.js
TSFILE: /src/tests/tsconfig.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;
export declare class someClass {
}
//# sourceMappingURL=index.d.ts.map

//// [/src/core/index.d.ts.map]
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,UAAU,EAAE,MAAsB,CAAC;AAChD,wBAAgB,OAAO,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB;AAC/D,wBAAgB,QAAQ,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB;AAEhE,qBAAa,SAAS;CAAI"}

//// [/src/core/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someClass = exports.multiply = exports.leftPad = exports.someString = void 0;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
exports.leftPad = leftPad;
function multiply(a, b) { return a * b; }
exports.multiply = multiply;
var someClass = /** @class */ (function () {
    function someClass() {
    }
    return someClass;
}());
exports.someClass = someClass;


//// [/src/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-2676574883-export const World = \"hello\";\r\n","signature":"-9234818176-export declare const World = \"hello\";\n"},{"version":"-13387000654-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n\nexport class someClass { }","signature":"-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"},{"version":"-9253692965-declare const dts: any;\r\n","affectsGlobalScope":true}],"root":[[2,4]],"options":{"composite":true,"declaration":true,"declarationMap":true,"skipDefaultLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./anothermodule.ts": {
        "original": {
          "version": "-2676574883-export const World = \"hello\";\r\n",
          "signature": "-9234818176-export declare const World = \"hello\";\n"
        },
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "./index.ts": {
        "original": {
          "version": "-13387000654-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n\nexport class someClass { }",
          "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"
        },
        "version": "-13387000654-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n\nexport class someClass { }",
        "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"
      },
      "./some_decl.d.ts": {
        "original": {
          "version": "-9253692965-declare const dts: any;\r\n",
          "affectsGlobalScope": true
        },
        "version": "-9253692965-declare const dts: any;\r\n",
        "signature": "-9253692965-declare const dts: any;\r\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "./anothermodule.ts",
          "./index.ts",
          "./some_decl.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1542
}

//// [/src/logic/index.js] file written with same contents
//// [/src/logic/index.js.map] file written with same contents
//// [/src/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n","-9234818176-export declare const World = \"hello\";\n",{"version":"-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"root":[4],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3],[3]],"referencedMap":[[4,1]],"exportedModulesMap":[[4,2]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
        "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"
      },
      "../core/anothermodule.d.ts": {
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "./index.ts": {
        "original": {
          "version": "-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
          "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
        },
        "version": "-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "root": [
      [
        4,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1549
}

//// [/src/tests/index.js] file written with same contents
//// [/src/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n","-9234818176-export declare const World = \"hello\";\n","-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",{"version":"12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"root":[5],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,1]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n",
        "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"
      },
      "../core/anothermodule.d.ts": {
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "../logic/index.d.ts": {
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      },
      "./index.ts": {
        "original": {
          "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
          "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
        },
        "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "root": [
      [
        5,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1694
}



Change:: incremental-declaration-doesnt-change
Input::
//// [/src/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }

export class someClass { }
class someClass2 { }



Output::
/lib/tsc --b /src/tests --listEmittedFiles
TSFILE: /src/core/index.js
TSFILE: /src/core/index.d.ts.map
TSFILE: /src/core/tsconfig.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/core/index.d.ts.map] file written with same contents
//// [/src/core/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someClass = exports.multiply = exports.leftPad = exports.someString = void 0;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
exports.leftPad = leftPad;
function multiply(a, b) { return a * b; }
exports.multiply = multiply;
var someClass = /** @class */ (function () {
    function someClass() {
    }
    return someClass;
}());
exports.someClass = someClass;
var someClass2 = /** @class */ (function () {
    function someClass2() {
    }
    return someClass2;
}());


//// [/src/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-2676574883-export const World = \"hello\";\r\n","signature":"-9234818176-export declare const World = \"hello\";\n"},{"version":"-11293323834-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n\nexport class someClass { }\nclass someClass2 { }","signature":"-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"},{"version":"-9253692965-declare const dts: any;\r\n","affectsGlobalScope":true}],"root":[[2,4]],"options":{"composite":true,"declaration":true,"declarationMap":true,"skipDefaultLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./anothermodule.ts": {
        "original": {
          "version": "-2676574883-export const World = \"hello\";\r\n",
          "signature": "-9234818176-export declare const World = \"hello\";\n"
        },
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "./index.ts": {
        "original": {
          "version": "-11293323834-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n\nexport class someClass { }\nclass someClass2 { }",
          "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"
        },
        "version": "-11293323834-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n\nexport class someClass { }\nclass someClass2 { }",
        "signature": "-2489663677-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\nexport declare class someClass {\n}\n"
      },
      "./some_decl.d.ts": {
        "original": {
          "version": "-9253692965-declare const dts: any;\r\n",
          "affectsGlobalScope": true
        },
        "version": "-9253692965-declare const dts: any;\r\n",
        "signature": "-9253692965-declare const dts: any;\r\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "./anothermodule.ts",
          "./index.ts",
          "./some_decl.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1564
}

//// [/src/logic/tsconfig.tsbuildinfo] file changed its modified time
//// [/src/tests/tsconfig.tsbuildinfo] file changed its modified time


Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tests --listEmittedFiles
exitCode:: ExitStatus.Success


