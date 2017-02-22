$(document).ready(function(){
  console.log('jquery was correctly sourced!');
  getAllSongs();
  function getAllSongs() {
    $.ajax({
      type: 'GET',
      url: '/songs',
      success: function(response) { // get songList back, songlist = response
        console.log('response', response);
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

  $('#addSongButton').on('click', function(){ // event listener pushes a new object onto song array
    var newSongTitle = $('#title').val();
    var newSongArtist = $('#artist').val();
    var newSongObject = {
      title: newSongTitle,
      artist: newSongArtist
    };
    console.log(newSongObject);
    $.ajax({ // adding data
      type: 'POST',
      url: '/newSong',
      data: newSongObject,
      success: function(response) {
        console.log('response', response);
        getAllSongs();
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  });

});
