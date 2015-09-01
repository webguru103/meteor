Template.googleMaps.helpers({
	mapOptions: function() {
		if (GoogleMaps.loaded()) {
			var selectedAgency = Kantoren.findOne({ _id: Session.get("selectedKantoor")});
			if(selectedAgency){
				return {
					center: new google.maps.LatLng(selectedAgency.adres.breedtegraad, selectedAgency.adres.lengtegraad),
					zoom: 15
				};
			}
			
			return { center: new google.maps.LatLng(51.22, 4.4), zoom: 15};
		}
  }
});