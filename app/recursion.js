exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    var listOfFiles = [];
    var dirs = [];
    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;
      dirs.push(dir.dir);
      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }
      dirs.pop();
    }
    processDir(data);
    return listOfFiles;
  },

  permute: function (arr) {
    let result = [];
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
        }
      }
    }

    permute(arr);
    return result;
  },

  fibonacci: function (n) {
    function iterator() {
      var start = 0;
      var pred = 1;
      var value = 1;
      var feb = [0, 1];
      function next() {
        var sum = pred + value;
        feb.push(sum);
        value = pred;
        pred = sum;
        start++;
      }
      function get() {
        return feb[n - 1];
      }
      return {
        next: next,
        get: get
      }
    }
    var it = new iterator();
    for (var i = 0; i < n; i++) {
      it.next();
    }
    return it.get();

  },

  validParentheses: function (n) {
    function nPair(n) {
      if (n == 0)
        return [""];
      var result = [];
      for (var i = 0; i < n; ++i) {
        var lefts = nPair(i);
        var rights = nPair(n - i - 1);
        for (var l = 0; l < lefts.length; ++l)
          for (var r = 0; r < rights.length; ++r)
            result.push("(" + lefts[l] + ")" + rights[r]);
      }

      return result;
    }
    return nPair(n);
  }
};
