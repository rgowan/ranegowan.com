$(initialize);

function initialize() {
  $('a').on('click', function(e) {
      e.stopPropagation();
  });

  $('#card').on('click', function() {
    $(this).toggleClass('flipped');
  });
}
