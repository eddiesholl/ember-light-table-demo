import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    const store = this.get('store');

    store.createRecord('person', { avatar: 'h', firstName: 'first', address: 'r street' });
    store.createRecord('person', { avatar: 'xxx', firstName: 'second', address: '11 street' });

    return store.peekAll('person');
  },

  setupController: function(controller, model) {

    this._super(controller, model);

    controller.set('model', model);

    controller.setupTable();
  }
});
