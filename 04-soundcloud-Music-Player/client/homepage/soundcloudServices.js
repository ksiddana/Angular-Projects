angular.module('SoundcloudServices', [])

.factory('SoundcloudFactory', ['$http', function($http) {

  var songs = {};
  var API_KEY = '27cdfc113026bf6b14abbca4eade9d87';

  http://api.soundcloud.com/tracks.json?client_id=27cdfc113026bf6b14abbca4eade9d87&q=chicago

  songs.getSongs = function(songTitle) {

    // Set the Search API with the song Title passed in through the Search Box
    var url = 'http://api.soundcloud.com/tracks.json?client_id=' + API_KEY +'&q=' + songTitle +'&limit=10';

    return $http({
      method: 'GET',
      url: url
    })
    .then(function(response){
      return response.data;
    })
  }

  return songs;

}])