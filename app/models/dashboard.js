import DS from 'ember-data';

export default DS.Model.extend({
    dashboardName:DS.attr(),
    cards:DS.hasMany("card")
});
