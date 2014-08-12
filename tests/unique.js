describe('Unique filter', function () {
  beforeEach(angular.mock.module('customFilter'));
  it('should remove all duplicates values from input array', function () {
    angular.mock.inject(function (uniqueFilter) {
      expect(uniqueFilter(["Hello", "World", "World", 1, 2, 3, 4, 2, 4, 0])).toEqual(["Hello", "World", 1, 2, 3, 4, 0]);
    });
  });
});
