Restaurants = new Meteor.Collection('restaurants');

if (Meteor.isClient) {
  Template.places.topRestaurants = function () {
    return Restaurants.find({}, { sort: { score: -1 } });
  };

  Template.restaurant.events({
    'dblclick': function () {
      var rest = this;
      Restaurants.update(rest._id, { $inc: { score: 5 } });
    },
    'click': function () {
      var rest = this;
      Session.set('selectedName', rest.name);
    }
  });

  Template.restaurant.selected = function () {
    var rest = this;
    if (rest.name === Session.get('selectedName'))
      return 'selected';
    return '';
  };
}

if (Meteor.isServer) {
}
