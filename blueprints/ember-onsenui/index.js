/*jshint node:true*/
module.exports = {
  description: 'ember-onsenui',

  normalizeEntityName: function () {},

  afterInstall: function afterInstall(/* options */) {
    return this.addBowerPackageToProject('onsenui');
  }
};
