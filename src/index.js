var async = require("async");

var wo = function(t, c) {
  var ele = t;
  // if a colour is passed, set the style 
  if (c) ele = "<span style='color:" + c + "'>" + ele + "</span>";
  document.write(ele + "<br>");
};

var heyhoo = function(l) {
  var text = '';
  for (var i = 0; i < l; ) {
    text += ((++i % 3 ? "" : "Hey") + (i % 5 ? "" : "Hoo") || '>');
  }
  return text;
};

async.waterfall(
  [
    function(callback) {
      var h = heyhoo(5);
      wo("Task 1: " + h, "green");
      callback(null, h.length);
    },
    function(a, callback) {
      var h = heyhoo(15);
      wo("Task 2: " + h, "blue");
      callback(null, a + h.length);
    },
    function(a, callback) {
      var h = heyhoo(30);
      wo("Task 3: " + h, "red");
      callback(null, a + h.length);
    }
  ],
  function(error, results) {
    if (error) wo("error:", error);
    wo("total count: " + results, "red");
  }
);
