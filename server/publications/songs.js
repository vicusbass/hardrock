Meteor.publish("autocompleteArtists", function(selector, options) {
	Autocomplete.publishCursor(Artists.find(selector, options), this);
	this.ready();
});

Meteor.publish('artistSongs', function(artist) {
	return Songs.find({
		artist: artist
	});
});