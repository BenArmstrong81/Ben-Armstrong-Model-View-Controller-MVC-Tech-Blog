//-------------Required Packages:
const Handlebars = require("handlebars");

module.exports = {
  format_date: (date) => {
    if (!date) {
      return "";
    }
    //-------------Format Date as MM/DD/YYYY
    return date.toLocaleString("en-AU");
  },
  //-------------Format Plural Words:
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
};

Handlebars.registerHelper("eq", function (a, b, options) {
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
});