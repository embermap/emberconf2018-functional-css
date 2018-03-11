import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({

  router: service(),

  onSolution: computed('model', 'router.currentRouteName', function() {
    let routeName = this.get('router.currentRouteName');

    return /\.solution$/.test(routeName);
  })

});
