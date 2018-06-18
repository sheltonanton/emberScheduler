import DS from 'ember-data';

export default DS.Model.extend({
    name:DS.attr(),
    time:DS.attr(),
    text:DS.attr(),
    description:DS.attr()
});
