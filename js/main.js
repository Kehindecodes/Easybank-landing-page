$('body').scrollspy({ target: '.navbar' });

// Smooth Scrolling
$('.navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
// init animate on scroll
AOS.init();

// Back to top button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('.back-to-top').click(function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
