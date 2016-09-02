$(initialize);

function initialize() {
  clickEvents();
}

function clickEvents() {
  $('a, label, .like, #about, #portfolio').on('click', function(e) {
      e.stopPropagation();
  });

  $('#about').on('click', function() {
    $('.back').html("<div class='about'>" +
                      "<img class='avatar' src='../images/avatar.jpg'>" +
                      "<hr class='avatar'>" +
                      "<h2>About Me</h2>" +
                      "<hr>" +
                      "<p>" +
                        "I am a Web Developer based in London with a mild obsession with football. I have also delved into teaching at General Assembly, the place where I took their Web Development Immersive course sometime last year." +
                      "</p>" +
                    "</div>" +
                    "<div class='experience'>" +
                      "<h2>Experience</h2>" +
                      "<hr>" +
                      "<img src='http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png'>" +
                    "</div>"
    );

    $('#card').toggleClass('flipped');

    $('#card').on('click', function() {
      $(this).toggleClass('flipped');
      $('#card').off('click');

      setTimeout(function(){
        $('.back').empty();
      }, 300);
    });
  });

  $('#portfolio').on('click', function() {
    $('.back').html("<h2>Portfolio</h2>" +
                    "<hr>" +
                    "<ul>" +
                      "<li>" +
                        "<div class='project'>" +
                          "<ul>" +
                            "<li><h4>Biliardino</h4></li>" +
                            "<li><label>Mongo Express API/Jquery</label></li>" +
                          "</ul>" +
                          "<a href='https://github.com/eisacke/biliardino' target='_blank'><img src='/images/biliardino.jpg'></a>" +
                          "<div class='project-bio'>" +
                            "<p><span>37</span> Likes</p>" +
                            "<i class='like fa fa-heart-o'></i>" +
                            "<p>Uses google maps api to show bars in london that have foosball tables.</p>" +
                          "</div>" +
                        "</div>" +
                      "</li>" +
                      "<li>" +
                        "<div class='project'>" +
                          "<ul>" +
                            "<li><h4>Shoe Selector</h4></li>" +
                            "<li><label>Ruby-on-Rails/Backbone</label></li>" +
                          "</ul>" +
                          "<a href='https://github.com/rgowan/shoeselector' target='_blank'><img src='/images/shoe_selector.png'></a>" +
                          "<div class='project-bio'>" +
                            "<p><span>43</span> Likes</p>" +
                            "<i class='like fa fa-heart-o'></i>" +
                            "<p>A tinder style app which pulls data from the Popshops Rakuten api.</p>" +
                        "</div>" +
                      "</div>" +
                    "</li>" +
                    "<li>" +
                      "<div class='project'>" +
                        "<ul>" +
                          "<li><h4>Beatbox</h4></li>" +
                          "<li><label>Ruby-on-Rails</label></li>" +
                        "</ul>" +
                        "<a href='https://github.com/rgowan/beatbox' target='_blank'><img src='/images/beatbox.png'></a>" +
                        "<div class='project-bio'>" +
                          "<p><span>10</span> Likes</p>" +
                          "<i class='like fa fa-heart-o'></i>" +
                          "<p>Self publishing music app with built in authentication.</p>" +
                        "</div>" +
                      "</div>" +
                    "</li>" +
                    "<li>" +
                      "<div class='project'>" +
                        "<ul>" +
                          "<li><h4>Puppy Love</h4></li>" +
                          "<li><label>Ruby-on-Rails</label></li>" +
                        "</ul>" +
                        "<a href='http://wdi-12-puppy-love.herokuapp.com' target='_blank'><img src='/images/puppy_love.png'></a>" +
                        "<div class='project-bio'>" +
                          "<p><span>9</span> Likes</p>" +
                          "<i class='like fa fa-heart-o'></i>" +
                          "<p>Dating for dogs website with fully functioning messaging system.</p>" +
                        "</div>" +
                      "</div>" +
                    "</li>" +
                    "<li>" +
                      "<div class='project'>" +
                        "<ul>" +
                          "<li><h4>Nandos: FYF</h4></li>" +
                          "<li><label>Hackathon 24hr</label></li>" +
                        "</ul>" +
                        "<a href='https://github.com/Hassanmir92/WDI-hackthon' target='_blank'><img src='/images/nandos.png'></a>" +
                        "<div class='project-bio'>" +
                          "<p><span>23</span> Likes</p>" +
                          "<i class='like fa fa-heart-o'></i>" +
                          "<p>Simple app that suggests a nandos sauce based on answering a light-hearted questionare.</p>" +
                        "</div>" +
                      "</div>" +
                    "</li>" +
                  "</ul>"
    );

    $('#card').toggleClass('flipped');

    $('#card').on('click', function() {
      $(this).toggleClass('flipped');
      $('#card').off('click');

      setTimeout(function(){
        $('.back').empty();
      }, 500);
    });
  });

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
