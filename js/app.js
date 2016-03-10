$(initialize);

function initialize() {
  $('#card').on('click', function() {
    $(this).toggleClass('flipped');
  });

  $('a, label, .love').on('click', function(e) {
      e.stopPropagation();
  });

  $('.project').each(function(){
    var counter = 0;

    $(this).find('.love').on('click', function() {
      $love = $(this);
      $love.toggleClass('fa-heart-o fa-heart');

      if ($love.hasClass('fa-heart')) {
        counter ++;

        $love.parent().find('span').text(counter);
      }
    });
  });
}
