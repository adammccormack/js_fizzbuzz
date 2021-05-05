describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.calculates(3)).toEqual("Fizz");
    });

    it('"Fizzbuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.calculates(15)).toEqual("Fizzbuzz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.calculates(5)).toEqual("Buzz");
    });
  });
});
