import EmberObject from 'ember-object';

import computed from 'ember-computed';
import get from 'ember-metal/get';

export default EmberObject.extend({
  currentPage: computed('handler.page', 'handler.pageSize', 'content.[]',
  function() {
    let page = get(this, 'handler.page');
    let pageSize = get(this, 'handler.pageSize');
    let content = get(this, 'content');

    if (pageSize && pageSize < content.length) {
      let start = 0 + ((page - 1) * pageSize);
      let end = start + pageSize;

      return content.slice(start, end);
    }

    return content;
  })
});
