exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function (str) {
    return function (argum) {
      return str = str + ', ' + argum;
    }
  },

  makeClosures: function (arr, fn) {
    var ret = [];
    var makeFn = function (val) {
      return function () { return fn(val); };
    };
    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(makeFn(arr[i]));
    }
    return ret;
  },

  partial: function (fn, str1, str2) {
    return function (arg) {
      return fn(str1, str2, arg);
    }
  },

  useArguments: function () {
    var output = 0;
    for (var i = 0; i < arguments.length; i++) {
      output += arguments[i];
    }
    return output;
  },

  callIt: function (fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function (fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt: function (fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }
    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);
        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;
        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }
        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }
    return getArgumentAccumulator([], fn.length);
  }
};
