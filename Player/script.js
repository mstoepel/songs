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
    $(".artist").val('New Artist')
    $(".title").val("New Title")
    $("#songId").val('13212155');
    
    var player = $("#audioPlayer")
    $("source", player).attr('src', 'http://previews.7digital.com/clips/34/13212155.clip.mp3')
    
    player[0].pause()
    player[0].load()
    player[0].play()
    
    
  }
  
});