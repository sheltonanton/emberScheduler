import DS from 'ember-data';

export default DS.Model.extend({
    submenuitems:DS.attr("menuresolve"),
    related:DS.belongsTo("submenuitem",{async:false})
});
