$(function() {

  likes = [];
  dislikes = [];
  averageTimeSig = 0;
  
  $(".like").click(function() {  // Run this function when they click anything with the class like
    
    likes.push($("#songId").val()); // #songId looks for id "songId"
    
    changeSong();
  
  })
  
  $(".nolike").click(function() {  // Run this function when they click anything with the class like
    
    dislikes.push($("#songId").val());
    
    changeSong();
    
  }) 

  changeSong = function() {

    var next = Math.floor(Math.random() * (data.length - 1))
    var song = data[next]

    $("#artistName").html(song.artistName)
    $("#songTitle").html(song.songTitle)
    $("#songId").val(song.id);
    
    var player = $("#audioPlayer")
    $("source", player).attr('src', song.songPreview)
    
    player[0].pause()
    player[0].load()

    if ($('#autoplay').is(':checked')) {
        player[0].play()
    }
    
    
    
  }

  setTimeout(500, changeSong())
  
});