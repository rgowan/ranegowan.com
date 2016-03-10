$(initialize);

function initialize() {
  $('#card').on('click', function() {
    $(this).toggleClass('flipped');
  });

  $('a').on('click', function(e) {
      e.stopPropagation();
  });

  $('.love').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('fa-heart-o fa-heart');
  });
}
