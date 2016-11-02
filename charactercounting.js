


function countLetters(characters) {
  var obj = {}
  for (var i = 0; i < characters.length; i += 1) {

    var char = characters[i];
  //   return characters[i] + 1;
    // obj[characters[i]] = 1;
    if(char === ' ') continue;
    if(obj[char] /*!== undefined*/)
    {
      //was already in obj
      obj[char] += 1;
    }
    else
    {
      //Is not in obj yet
      obj[char] = 1;
    }
  }
  return obj;
}



console.log(countLetters("lighthouse in the house"));

//

// {
//   A: 1,
//   n: 2
//   t: 1
//   h: 1
//   o: 1
//   y: 1
// }