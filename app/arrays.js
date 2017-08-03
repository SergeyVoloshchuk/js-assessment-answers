exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    var index = null;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        index = i;
        break;
      }
    }
    if (index) {
      return index;
    }
    return -1;
  },

  sum: function (arr) {
    var sum = null;
    if (typeof arr[0] !== 'number') {
      sum = '';
    }
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        output.push(arr[i]);
      }
    }
    return output;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    var outputArray = arr1.concat(arr2);
    return outputArray;
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var number = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        number += 1;
      }
    }
    return number;
  },

  duplicates: function (arr) {
    var data = [];
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1] && data.indexOf(arr[i]) === -1) {
        data.push(arr[i]);
      }
    }
    return data;
  },

  square: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        arr[i] = Math.pow(arr[i], 2);
      }
    }
    return arr;
  },

  findAllOccurrences: function (arr, target) {
    var output = [];
    var index = arr.indexOf(target);
    if (index !== -1) {
      for (var i = index; i < arr.length; i++) {
        if (arr[i] === target) {
          output.push(i);
        }
      }
      return output;
    }
    return null;
  }
};
