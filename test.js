const { strictEqual } = require("assert");

const parseAnyInt = require("./parse-any-int.js");

const check = (str, int) => strictEqual(parseAnyInt(str), int);

check("10", 10);
check("12_345", 12345);
check("12.345", null);
check("12,345", 12345);
check("12,345.0", 12345);
check("12,345.00", 12345);
check("+12,345.00", 12345);
check("-12,345.00", -12345);
check("-12,345.001", null);

// fails
// check("12__345", null);