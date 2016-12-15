require("./lib/social"); //Do not delete
var dot = require("./lib/dot");


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

// templates for the two interactives
var slideshow_template = dot.compile(require("../partials/_slideshow.html"));

// Gray photo gallery
var photo00 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039420/3/2000x1000.jpg",
  caption: "Jesus Guillen was in his typical vibrant colors at the U.S. Conference on AIDS in Florida. "
};
var photo01 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039425/3/2000x1000.jpg",
  caption: "At the International AIDS Conference in South Africa, Jesus Guillen meets with friends from a U.S. HIV advocacy group. "
};
var photo02 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039401/3/2000x1000.jpg",
  caption: "After a 12-plus-hour flight from San Francisco to South Africa for the International AIDS Conference, Jesus Guillen makes friends on the bus to his hotel. "
};
var photo03 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039400/3/2000x1000.jpg",
  caption: "Jesus Guillen made time to relax in the pool during a break at the U.S. Conference on AIDS in Florida. "
};
var photo04 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039421/3/2000x1000.jpg",
  caption: "Jesus Guillen poses with a doorman at a hotel in South Africa, where he was attending the International AIDS Conference. "
};
var photo05 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039417/3/2000x1000.jpg",
  caption: "Jesus Guillen was invited to the International AIDS Conference in South Africa to represent a screening of “Last Men Standing,” The Chronicle’s documentary on AIDS and HIV survivors. "
};
var photo06 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039418/3/2000x1000.jpg",
  caption: "Jesus Guillen went shopping for clothes and small gifts while attending the International AIDS Conference in South Africa. These women were selling large avocados. "
};
var photo07 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039548/3/2000x1000.jpg",
  caption: "Jesus Guillen traveled to Portland, Ore., for a screening of “Last Men Standing” at an LGBT film festival. "
};

// filling in slideshow
[0,1,2,3,4,5,6,7].forEach(function(ff){
  $("#photo_g0"+ff).append(slideshow_template(eval("photo0"+ff)));
});

// photo gallery event listeners
var gallery0_idx = 0;
var Ngallery0 = 7; var kk = 0;
// set up clicking to update map interactive on mobile
document.getElementById("scroll-right-gallery"+kk).addEventListener("click", function() {
  console.log("clicked right");
  gallery0_idx = gallery0_idx+1;
  $(".photo_g"+kk).removeClass("active");
  $("#photo_g" + kk + eval("gallery"+kk+"_idx") ).addClass("active");
  console.log("#photo_g" + kk + eval("gallery"+kk+"_idx"));
  console.log(eval("gallery"+kk+"_idx"));
  if (eval("gallery"+kk+"_idx") == eval("Ngallery"+kk)) {
    $("#scroll-right-gallery"+kk).addClass("last");
  } else {
    $("#scroll-right-gallery"+kk).removeClass("last");
  };
  if (eval("gallery"+kk+"_idx") == 0) {
    $("#scroll-left-gallery"+kk).addClass("first");
  } else {
    $("#scroll-left-gallery"+kk).removeClass("first");
  };
});
document.getElementById("scroll-left-gallery"+kk).addEventListener("click", function() {
  console.log("clicked left");
  gallery0_idx = gallery0_idx-1;
  $(".photo_g"+kk).removeClass("active");
  $("#photo_g" + kk + eval("gallery"+kk+"_idx") ).addClass("active");
  console.log("#photo_g" + kk + eval("gallery"+kk+"_idx"));
  console.log(eval("gallery"+kk+"_idx"));
  if (eval("gallery"+kk+"_idx") == eval("Ngallery"+kk)) {
    $("#scroll-right-gallery"+kk).addClass("last");
  } else {
    $("#scroll-right-gallery"+kk).removeClass("last");
  };
  if (eval("gallery"+kk+"_idx") == 0) {
    $("#scroll-left-gallery"+kk).addClass("first");
  } else {
    $("#scroll-left-gallery"+kk).removeClass("first");
  };
});
