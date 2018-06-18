import DS from 'ember-data';

const {attr} = DS;
export default DS.Model.extend({
    det:attr(),
    details:DS.belongsTo("detail")
});
