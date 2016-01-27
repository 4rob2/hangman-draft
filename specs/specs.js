

describe('ChoseWord', function() {
  it("creates a new word with properties: word,length,letters", function() {
    var testHangmanword = new ChoseWord("please","5","'p','l','e','a','s','e'");
    expect(testHangmanword.word).to.equal("please");
    expect(testHangmanword.length).to.equal(6)
    expect(testHangmanword.letters).to.eql(["p","l","e","a","s","e"])
  });
});


// describe('UserLetter', function() {
//   it("takes users letter, compares it to the string", function() {
//   var testUserLetter = new testUserLetter("a");
//   expect(testUserLetter.inputtedLetter).to.equal("a")
// });
// });
//
//
// var randomWord = ["apples, cheese, whimsy, please, radios, stereo"];
// var chosenWord = randomWord[math.floor(Math.random()+ randomWord.length)];
// return chosenWord;
//
//
//
//
