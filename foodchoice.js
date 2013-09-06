Restaurants = new Meteor.Collection('restaurants');

if (Meteor.isClient) {
  Template.places.topRestaurants = function () {
    return Restaurants.find({}, { sort: { score: -1 } });
  };
}

if (Meteor.isServer) {
}
