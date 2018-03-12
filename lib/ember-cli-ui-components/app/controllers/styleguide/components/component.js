import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({

  componentName: readOnly('model.component_name'),

  componentLabel: computed('componentName', function() {
    let name = this.get('componentName')
      .replace('ui-', '')
      .capitalize();

    return `UI ${name}`;
  })

});
