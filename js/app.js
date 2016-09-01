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
                      "<img src='../images/avatar.jpg'>" +
                      "<h2>About Me</h2>" +
                      "<hr>" +
                      "<p>" +
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus placeat mollitia repellat asperiores voluptate vitae, officia doloribus sapiente earum excepturi cumque voluptates adipisci, cum consectetur, voluptatem laborum possimus recusandae nostrum!" +
                      "</p>" +
                    "</div>"
    );

    $('#card').toggleClass('flipped');

    $('#card').on('click', function() {
      $(this).toggleClass('flipped');
      $('#card').off('click');
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
