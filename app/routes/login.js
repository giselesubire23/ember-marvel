import Ember from 'ember';

let login = [{
  private: 'private_key',
  public: 'private_public'
}];

export default Ember.Route.extend({
  model : function() {
    return login;
  },
  start: function() {
    this.transitionTo('/list');
  }
});
