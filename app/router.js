import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', { path: '/' });
  this.route('list');
  this.route('details');
  this.route('details', {path: '/details/:id'});

});

export default Router;


