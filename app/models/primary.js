import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    varying: DS.attr(),
    related: DS.belongsTo("secondary")
});
