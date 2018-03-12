import Service from '@ember/service';
import { A } from '@ember/array';
import { next } from '@ember/runloop';

export default Service.extend({

  init() {
    this._super(...arguments);

    this.set('styledComponentNames', A());
  },

  add(name) {
    next(() => {
      if (!this.styledComponentNames.includes(name)) {
        this.styledComponentNames.pushObject(name);
      }
    })
  }

});
