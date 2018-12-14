import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default Helper.extend({
  router: inject(),

  compute(args) {
    return this.router.urlFor(...args);
  }
});
