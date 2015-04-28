Meteor.startup(function() {
  if (Songs.find({}).count() === 0) {
    [{
      artist: 'Metallica',
      title: 'Nothing else matters'
    }, {
      artist: 'Metallica',
      title: 'One'
    }, {
      artist: 'Sepultura',
      title: 'Roots bloody roots'
    }, {
      artist: 'Sepultura',
      title: 'Arise'
    }, {
      artist: 'U2',
      title: 'Bad'
    }, {
      artist: 'Michael Jackson',
      title: 'Bad'
    }].forEach(function(song) {
      Songs.insert(song, function(err, res) {
        if (err) console.log(err.error);
      });
    });
  }
  Songs._ensureIndex({artist: 1});

});