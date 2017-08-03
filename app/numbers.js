exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    var binary = num.toString(2);
    if (binary.length < 8) {
      var nums = 8 - binary.length;
      var mass = binary.split('');
      mass.unshift('0');
      binary = mass.join('');
    }
    return binary;
  },

  multiply: function (a, b) {
    var res = a*b;
    var str = b.toString();
    var index = str.indexOf('.');
    var number = str.substring(index+1, str.length);
    return Number(res.toFixed(number.length));

  }
};
