$(initialize);

function initialize() {
  $('#card').on('click', function() {
    $(this).toggleClass('flipped');
  });

  $('a, label, .like').on('click', function(e) {
      e.stopPropagation();
  });

  likeProject();
}

function likeProject() {
  $('.project').each(function(){
    var counter = $(this).find('span').html();

    $(this).find('.like').one('click', function() {

      $(this).toggleClass('fa-heart-o fa-heart');

      if ($(this).hasClass('fa-heart')) {
        counter ++;
        $(this).parent().find('span').text(counter);
      }
    });
  });
}
