import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  uiComponents: service(),

  componentNames: computed('uiComponents.styledComponentNames.[]', function() {
    return this.get('uiComponents.styledComponentNames').map(name => name.replace('component:', ''));
  })

});
