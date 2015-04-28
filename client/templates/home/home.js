Template.home.rendered = function() {

};

Template.home.helpers({
	settings: function() {
		return {
			position: "top",
			limit: 5,
			rules: [{
				collection: 'Songs',
				subscription: 'autocompleteArtists',
				field: "artist",
				template: Template.songItem
			}]
		};
	},
	filteredSongs: function() {
		return Songs.find({
			artist: Session.get('selectedArtist')
		});
	}
});

Template.home.events({
	"autocompleteselect input": function(event, template, doc) {
		console.log("selected ", doc);
		template.find('#artistInput').value = doc.artist;
		Meteor.subscribe('artistSongs', doc.artist);
		Session.set('selectedArtist', doc.artist);
	},
	"click a": function(event, template, doc) {
		Materialize.toast('Ai votat!', 4000);
	}
});
