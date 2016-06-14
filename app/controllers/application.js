import Ember from 'ember';
import Table from 'ember-light-table';

const computed = Ember.computed;

export default Ember.Controller.extend({

  model: [],
  table: null,

  actions: {
    updateModel: function() {
      const store = this.get('store');

      const people = store.peekAll('person');
      people.objectAt(0).set('state', new Date());
    },

    onColumnClick(column) {
      console.log('onColumnClick')
    }
  },

  columns: computed(function() {
    return [{
      label: 'Avatar',
      valuePath: 'avatar',
      width: '60px',
      sortable: false,
      //  cellComponent: 'user-avatar'
    }, {
      label: 'First Name',
      valuePath: 'firstName',
      width: '150px'
    }, {
      label: 'Last Name',
      valuePath: 'lastName',
      width: '150px'
    }, {
      label: 'Address',
      valuePath: 'address'
    }, {
      label: 'State',
      valuePath: 'state'
    }, {
      label: 'Country',
      valuePath: 'country'
    }];
  }),

  setupTable() {
    this.set('table', new Table(this.get('columns'), this.get('model')));
  }

});
