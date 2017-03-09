class SignupSectionController {
  /** @ngInject */
  constructor($auth, $log) {
    this.$auth = $auth;
    this.$log = $log;
    this.form = {};
  }

  submitRegistration() {
    this.$auth.submitRegistration(this.form)
        .then(resp => {
          this.$log('success');
          this.$log(resp);
        })
        .catch(resp => {
          this.$log('failure');
          this.$log(resp);
        });
  }
}

export const SignupSection = {
  template: require('./SignupSection.html'),
  controller: SignupSectionController
};
