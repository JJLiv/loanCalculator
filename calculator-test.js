
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 100, years: 1, rate: .12})).toEqual('8.88');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 100, years: 1, rate: .12})).toMatch(/^[0-9]+\.[0-9]{2}$|[0-9]+\.[0-9]{2}[^0-9]/);
});

it('should not contain a negative load amount', function(){
  expect(calculateMonthlyPayment({amount: -100, years: 1, rate: .12})).toThrowError();
})
