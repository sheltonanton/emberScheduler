import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    this.get("store").findRecord("submenuitem",serialized);
    console.log("Transformed");
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
