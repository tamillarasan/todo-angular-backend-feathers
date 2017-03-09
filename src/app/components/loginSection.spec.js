import angular from 'angular';
import 'angular-mocks';
import {loginSection} from './loginSection';

describe('loginSection component', () => {
  beforeEach(() => {
    angular
      .module('loginSection', ['app/components/loginSection.html'])
      .component('loginSection', loginSection);
    angular.mock.module('loginSection');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<loginSection></loginSection>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
