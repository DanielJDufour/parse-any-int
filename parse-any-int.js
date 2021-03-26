const isIntegerString = require("is-integer-string");

const parseAnyInt = (str, options) => {
  const debug = typeof options === "object" && options.debug || false;
  try {
    if (debug) console.log("[parse-any-int] starting with", { str, options });

    // be forgiving and trim any extra white space
    str = str.trim()

    if (!isIntegerString(str)) {
      if (debug) {
        !isIntegerString(str, { debug }); // rerun with logging on
        console.log("[parse-integer] input is not an integer string.");
      }
      return null;
    }
    const left = str
      .split(".")[0] // get everything left of the decimal point
      .replaceAll(/[_,]/g,'') // remove all numerical separators
      .replace(/^\+/, ''); // remove starting +

    const int = parseInt(left);
    if (isNaN(int)) return null;
    else return int;
  } catch (error) {
    return null;
  }
};

if (typeof module === "object") module.exports = parseAnyInt;
if (typeof window === "object") window.parseAnyInt = parseAnyInt;
if (typeof self === "object") self.parseAnyInt = parseAnyInt;
