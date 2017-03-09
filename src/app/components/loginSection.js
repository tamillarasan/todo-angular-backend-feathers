class LoginSectionController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const loginSection = {
  template: require('./loginSection.html'),
  controller: LoginSectionController
};

