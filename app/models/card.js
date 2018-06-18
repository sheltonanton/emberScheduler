import DS from 'ember-data';

export default DS.Model.extend({
    dashBoardId: DS.belongsTo("dashboard"),
    name: DS.attr(),
    size: DS.attr()
});
