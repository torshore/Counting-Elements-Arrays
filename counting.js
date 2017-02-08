function countLetters(str) {
  var string = [];
  string = str.split("");
  var letters = string.length;
  var countArray = {};
  var space = " "



  for (i = 0; i < string.length; i++) {

    if (string[i] === space) {
      continue;
    } else {
      countArray[string[i]] = (countArray[string[i]] || 0) + 1;
    }
  }
  console.log(countArray);
}

countLetters("lighthouse labs");