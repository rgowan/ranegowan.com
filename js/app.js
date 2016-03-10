$(initialize);

function initialize() {
  $('a').on('click', function(e) {
      e.stopPropagation();
  });

  $('#card').on('click', function() {
    $(this).toggleClass('flipped');
  });

  $('.love ').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('fa-heart-o fa-heart');
  });
}
