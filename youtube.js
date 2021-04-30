var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerInfoList = [{
  id: 'player1',
  videoId: 'dOy7vPwEtCw'
}, {
  id: 'player2',
  videoId: 'QWtsV50_-p4'
}, {
  id: 'player3',
  videoId: 'y-JqH1M4Ya8'
}, {
  id: 'player4',
  videoId: 'gH7dMBcg-gE'
}, {
  id: 'player5',
  videoId: '7wL9NUZRZ4I'
}, {
  id: 'player6',
  videoId: 'S4R8HTIgHUU'
}];

function onYouTubeIframeAPIReady() {
  if (typeof playerInfoList === 'undefined') return;

  for (var i = 0; i < playerInfoList.length; i++) {
    var curplayer = createPlayer(playerInfoList[i]);
    players[i] = curplayer;
  }
  
  var links = document.querySelectorAll('.play_video');
  links.forEach(function (e) {    
    $(e).on('click', function(e) {
      stopAllVideos();
      var i = $(this).data('index');
      players[i].playVideo();
    })
  });
}

var players = new Array();

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.id, {
    videoId: playerInfo.videoId,
    playerVars: {
      showinfo: 0,
    }
  }); 
}

function stopAllVideos() {
  players.forEach(function (el) {
    el.stopVideo();
  });
}

$('#stop').click(function () {
  console.log("players", players);
  players.forEach(function (el) {
    el.stopVideo();
  });
});