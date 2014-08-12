describe('Titlecase filter', function () {
  beforeEach(angular.mock.module('customFilter'));
  it('should convert words separated by a space to titlecase', function () {
    angular.mock.inject(function (titlecaseFilter) {
      expect(titlecaseFilter('HeLLo wOrld froM tOm')).toEqual('Hello World From Tom');
    });
  });
  it('should convert words separated by a space or hyphen to titlecase', function () {
    angular.mock.inject(function (titlecaseFilter) {
      expect(titlecaseFilter('maRy-lUE')).toEqual('Mary-Lue');
    });
  });
});
