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
