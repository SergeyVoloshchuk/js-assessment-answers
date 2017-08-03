exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeout;
    function goNext() {
      console.log(start++);
      if (start <= end) {
        timeout = setTimeout(goNext, 100);
      }
    }
    goNext();
    return {
      cancel: function () { timeout && clearTimeout(timeout);}
    }
  }
};
