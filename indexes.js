function countLetters(str) {
  var string = [];
  string = str.split("");
  var countArray = {};
  var space = " "



  for (i = 0; i < string.length; i++) {

    if (string[i] === space) {
      continue;
    } else if (countArray[string[i]]) {
      countArray[string[i]].push(i);
    } else {
      countArray[string[i]] = [i]
    }
    }
  console.log(countArray);
}

countLetters("lighthouse labs in the house");

//countArray[string[i]] || 0)