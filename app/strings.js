exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    var re = new RegExp("(.)(?=\\1{" + amount + "})", "g");
    return str.replace(re, "");
  },

  wordWrap: function (str, cols) {
    var formatedString = '',
      wordsArray = [];
    wordsArray = str.split(' ');
    formatedString = wordsArray[0];
    for (var i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > cols) {
        formatedString += '\n' + wordsArray[i];
      } else {
        if (formatedString.length + wordsArray[i].length > cols) {
          formatedString += '\n' + wordsArray[i];
        } else {
          formatedString += ' ' + wordsArray[i];
        }
      }
    }
    return formatedString;
  },

  reverseString: function (str) {
    var massive = str.split('');
    massive = massive.reverse();
    return massive.join('');;
  }
};
