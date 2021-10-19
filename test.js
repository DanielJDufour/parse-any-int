const { strictEqual } = require("assert");
const test = require("flug");

const parseAnyInt = require("./parse-any-int.js");

const check = (str, int) => strictEqual(parseAnyInt(str), int);

test("simple integer", ({ eq }) => {
  eq(parseAnyInt("10"), 10);
});

test("integer with underscore", ({ eq }) => {
  eq(parseAnyInt("12_345"), 12345);
});

test("decimal", ({ eq }) => {
  eq(parseAnyInt("12.345"), null);
});

test("integer with comma", ({ eq }) => {
  eq(parseAnyInt("12,345"), 12345);
});

test("extra .0", ({ eq }) => {
  eq(parseAnyInt("12,345.0"), 12345);
});

test("extra .00", ({ eq }) => {
  eq(parseAnyInt("12,345.00"), 12345);
});

test("extra +", ({ eq }) => {
  eq(parseAnyInt("+12,345.00"), 12345);
});

test("negative integer with extra .00", ({ eq }) => {
  eq(parseAnyInt("-12,345.00"), -12345);
});

test("negative decimal", ({ eq }) => {
  eq(parseAnyInt("-12,345.001"), null);
});


test("double underscore", ({ eq }) => {
  eq(parseAnyInt("12__345"), 12345);
});

test("null returns null", ({ eq }) => {
  eq(parseAnyInt(null, { debug: false }), null);
});

test("undefined returns null", ({ eq }) => {
  eq(parseAnyInt(null, { debug: false }), null);
});

test("e notation", ({ eq }) => {
  eq(parseAnyInt("123e5", { debug: false }), 12300000);
})

test("E notation", ({ eq }) => {
  eq(parseAnyInt("123E5", { debug: false }), 12300000);
})