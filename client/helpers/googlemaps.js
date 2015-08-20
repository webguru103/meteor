Template.googleMaps.helpers({
	mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(51.206, 4.4212),
        zoom: 15
      };
    }
  }
});