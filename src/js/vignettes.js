require("./lib/social"); //Do not delete

window.onload = function() {
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 817) {
          $('.nav-bottom').fadeIn();
      } else {
          $('.nav-bottom').fadeOut();
      }
  });
}

// scrolling code ==============================================================

window.onscroll = function() {activate()};

var targetOffset, currentPosition,
    body = document.body,
    d = document.getElementById('d'),
    g = document.getElementById('g'),
    k = document.getElementById('k'),
    h = document.getElementById('h'),
    m = document.getElementById('m'),
    p = document.getElementById('p'),
    scroll = [d, g, k, h, m, p],
    animateTime = 900;

function activate() {
  var sticker = document.getElementById('stick-me');
  var sticker_ph = document.getElementById('stick-ph');
  var window_top = document.body.scrollTop;
  var div_top = document.getElementById('stick-here').getBoundingClientRect().top + window_top;
  // var long = document.getElementById('long');

  if (window_top > div_top) {
      sticker.classList.add('fixed');
      sticker_ph.style.display = 'block'; // puts in a placeholder for where sticky used to be for smooth scrolling
      // long.style.display = 'inline-block';
  } else {
      sticker.classList.remove('fixed');
      sticker_ph.style.display = 'none'; // removes placeholder
      // long.style.display = 'none';
  }

  var top = [], btm = [];
  ["d","g","k","h","m","p"].forEach(function(secid){
    var topsec = document.getElementById(secid+"section").getBoundingClientRect().top + window_top - 40;
    var bottomsec = document.getElementById(secid+"section").getBoundingClientRect().bottom + window_top - 40;
    top.push(topsec);
    btm.push(bottomsec);
  });

  for (var i = 0; i < top.length; i++) {
    if ((top[i] < window_top) && (btm[i] > window_top)) {
      scroll[i].classList.add('activelink');
    }
    else {
      scroll[i].classList.remove('activelink');
    }
  }
}

$(document).on('click', 'a[href^="#"]', function(e) {

    console.log("we clicked");
    // target element id
    var id = $(this).attr('href');
    console.log(id);

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;
    console.log(id);
    console.log(pos);

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
