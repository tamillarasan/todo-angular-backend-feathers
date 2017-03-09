import angular from 'angular';
import 'angular-cookie';
import 'ng-token-auth';
import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Signup} from './app/containers/Signup';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';
import {SignupSection} from './app/components/SignupSection';
import 'angular-ui-router';
import routesConfig from './routes';
import authConfig from './authentication';

import './index.css';

angular
  .module('app', ['ui.router', 'ng-token-auth'])
  .config(routesConfig)
  .config(authConfig)
  .service('todoService', TodoService)
  .component('app', App)
  .component('signup', Signup)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem)
  .component('signupSection', SignupSection);
