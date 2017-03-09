export default authConfig;

/** @ngInject */
function authConfig($authProvider) {
  $authProvider.configure({
    apiUrl: 'https://todo-feathers-tamillharasan.c9users.io/',
    emailRegistrationPath: '/users',
    emailSignInPath: '/local'
  });
}
