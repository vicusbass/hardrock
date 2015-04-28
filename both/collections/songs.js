Songs = new Mongo.Collection('songs');
Artists = new Mongo.Collection('artists');

Songs.helpers({

});

Songs.before.insert(function(userId, doc) {
	doc.createdAt = moment().toDate();
});

Songs.after.insert(function(userId, doc) {
	Artists.upsert({
		artist: doc.artist
	}, {
		$set: {
			artist: doc.artist
		}
	});
});

Songs.attachSchema(new SimpleSchema({
	artist: {
		type: String,
		max: 50
	},
	title: {
		type: String,
		max: 120
	}
}));