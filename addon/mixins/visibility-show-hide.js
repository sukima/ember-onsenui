import Ember from 'ember';

const { Mixin, get, observer } = Ember;

export default Mixin.create({
  updateElementVisibility: observer('visible', function () {
    let el = get(this, 'element');
    let shouldBeVisible = get(this, 'visible');
    let isCurrentlyVisible = get(el, 'visible');
    if (shouldBeVisible && !isCurrentlyVisible) {
      el.show();
    } else if (!shouldBeVisible && isCurrentlyVisible) {
      el.hide();
    }
  })
});
