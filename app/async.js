exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    var prom = new Promise((resolve, reject) => {
      resolve(value);
    })
    return prom.then();
  },

  manipulateRemoteData: function (url) {
    var promise = $.Deferred();
    $.ajax(url).then(function (resp) {
      var people = $.map(resp.people, function (person) {
        return person.name;
      });
     promise.resolve(people.sort());
    });
    return promise.promise();
  }
};
