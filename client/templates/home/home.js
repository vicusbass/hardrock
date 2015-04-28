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
        event.preventDefault();
        template.find('#artistInput').value = doc.artist;
        Meteor.subscribe('artistSongs', doc.artist);
        Session.set('selectedArtist', doc.artist);
    },
    "click li.song": function(event, template, doc) {
        event.preventDefault();
        var song = this;
        Materialize.toast('Ai votat: ' + song.title, 4000);
    }
});
