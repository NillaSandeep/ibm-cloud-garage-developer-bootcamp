describe.only('the palindrome canary spec', () => {
  it('Shows the test infrastructure works', () => {
    true.should.be.true();
  });


  function isPalindrome(phrase) {
    return phrase.split('').reverse().join('') === phrase;
  }

  describe(' a palindrome ', () => {
    it('is "racecar"', () => {
      isPalindrome('racecar').should.be.true();
    });
    it('is not "racecars"', () => {
      isPalindrome('racecars').should.be.false();
    });
    it('is not a "race car"', () => {

    });
    it('"   " is not a palindrome');
    it('"" is not a palindrome');
    it('is "mom dad mom"');
  });
});
