function heyhoo(num) {
  var str = "";
  for (var i = 1; i < num + 1; i++) {
    if (i % 3 == 0 && i % 15 != 0) {
      str += "Hey";
    } else if (i % 5 == 0 && i % 15 != 0) {
      str += "Hoo";
    } else if (i % 15 == 0) {
      str += "HeyHoo";
    } else {
      str += ">";
    }
  }
  return str;
}

var print_output = heyhoo(5);


document.write(print_output);

