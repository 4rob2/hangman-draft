describe('Hangmanword', function() {
  it("creates a new word with properties: word", function() {
    var testHangmanword = new Hangmanword("please");
    expect(testHangmanword.word).to.equal("please");
  });
  it("takes an array string and separates it out to individual letters"), function() {
    var testHangmanword = new Hangmanword("please");
    expect(testHangmanword.letterindent).to.eql(["p","l","e","a","s","e"]);
  };
});
