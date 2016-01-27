function ChoseWord(word, length, letters) {
  this.word = word;
  this.length = word.length;
  this.letters = word.split("");
}

ChoseWord.prototype.Game = function() {
  var bank = ["apples, cheese, whimsy, please, radios, stereo"];
  var hangLetters = bank.split(" ");
}
