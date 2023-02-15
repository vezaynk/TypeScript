///<reference path="fourslash.ts" />

// @allowJs: true
// @Filename: a.js

/////**
//// * Doc comment
//// * [|@typedef /*def*/[|{| "contextRangeIndex": 0 |}Product|]
//// * @property {string} title
//// |]*/

/////**
//// * @type {[|/*use*/Product|]}
//// */
////const product = null;

const desc = `type Product = {
    title: string;
}`;

const [r0Def, ...ranges] = test.ranges();
verify.quickInfoAt("use", desc, "Doc comment");

verify.goToDefinition("use", "def");

verify.rangesAreOccurrences(/*isWriteAccesss*/ undefined, ranges);
verify.rangesAreDocumentHighlights(ranges);

verify.baselineCommands(
    { type: "findAllReferences", markerOrRange: ["use", "def"] },
    { type: "findRenameLocations", markerOrRange: ranges },
);
