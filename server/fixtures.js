if (Kantoren.find({}).count() < 1) {
  Kantoren.insert({
    naam:'Hoofdzetel',
    adres: {
      straat : 'Belgielei',
      nummer: 34,
      postcode: 2018,
      gemeente: 'Antwerpen',
	  lengtegraad: 4.4212,
	  breedtegraad: 51.206
    }
  });
  Kantoren.insert({
      naam:'Meteor BVBA',
      adres: {
        straat : 'Meir',
        nummer: 1,
        postcode: 2000,
        gemeente: 'Antwerpen',
		lengtegraad: 4.3212,
		breedtegraad: 51.206
      }
    }
  );
}
