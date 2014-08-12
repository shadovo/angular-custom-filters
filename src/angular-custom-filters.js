angular.module('customFilter', []).
filter('reverse', function () {
  return function (input) {
    var out = "";
    var i;
    if (angular.isString(input)) {
      for (i = 0; i < input.length; i = i + 1) {
        out = input[i] + out;
      }
      return out;
    } else {
      return input;
    }
  };
}).
filter('titlecase', function () {
  return function (input) {
    if (angular.isString(input)) {
      var out = "";
      for (var i = 0; i < input.length; i = i + 1) {
        if (i === 0 || input.charAt(i - 1) === " " || input.charAt(i - 1) === "-") {
          out = out + input.charAt(i).toUpperCase();
        } else {
          out = out + input.charAt(i).toLowerCase();
        }
      }
      return out;
      //   var output = "",
      //     words,
      //     i;
      //   output = input.toLowerCase();
      //   words = output.split(' ');
      //   for (i = 0; i < words.length; i = i + 1) {
      //     words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
      //   }
      //   output = words.join(' ');
      //   return output;
      // } else {
      //   return input;
    }
  };
}).
filter('nodublicates', function () {
  return function (input) {
    var i,
      tempValue,
      tempArray = [],
      output = [];
    if (angular.isArray(input)) {
      for (i = 0; i < input.length; i = i + 1) {
        tempValue = input[i];
        tempArray = input.slice(0);
        tempArray.splice(i, 1);
        if (tempArray.indexOf(tempValue) === -1) {
          output.push(tempValue);
        }
      }
      return output;
    } else {
      return input;
    }
  };
}).
filter('unique', function () {
  return function (input) {
    var i,
      output = [];
    if (angular.isArray(input)) {
      for (i = 0; i < input.length; i = i + 1) {
        if ((output.indexOf(input[i]) == -1)) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  };
});
