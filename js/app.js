$(initialize);

function initialize() {
    $('#card').on('click', function() {
      $(this).toggleClass('flipped');
    });
}
