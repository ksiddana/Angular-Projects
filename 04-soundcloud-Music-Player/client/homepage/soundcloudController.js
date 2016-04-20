angular.module('soundcloud.main', ['SoundcloudServices'])

.controller('soundcloudController', ['$scope', 'SoundcloudFactory', '$sce',
  function ($scope, SoundcloudFactory, $sce) {

  var iFrameUrls = [];

  $scope.searchSong = function(songTitle) {
    
    // Insert the SoundcloudFactory function, when the Search bar is clicked
    SoundcloudFactory.getSongs(songTitle)
    .then(function(data) {

         // Empty the songs, once a new set of songs has been requested 
        if (iFrameUrls.length) {
          iFrameUrls = [];
        }
   
        // Setting the data on the songs scope
        $scope.songs = data;

        // embedding the player using a trusted source otherwise you get a blocking error
        // Blocked loading resource from url not allowed by $sceDelegate policy.
        
        for (var i = 0; i < data.length; i++) {
          var tempUrl = "https://w.soundcloud.com/player/?url=" + data[i].uri;
          var trustSrc = $sce.trustAsResourceUrl(tempUrl)
          iFrameUrls.push(trustSrc);
        }

        // Add this new property on all the songs data, so that it 
        // can be interpreted by the Javascript in the HTML
        for (var i = 0; i < data.length; i++){
          $scope.songs[i]['iframe'] = iFrameUrls[i];
        }

    })

  }

}])

.directive("login", function() {
   return {
       restrict: 'E',
       templateUrl: 'homepage/login.html',
       replace: true,
       scope: {
           usersObject: "=",
           login: "&"
       }
   }
});

