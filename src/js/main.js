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


//DELETE======================================================================
$(".agency").click(function() {
  for (var i=0; i<12; i++) {
      $('#agencyINFO'+i).css("display","none");
  }
  var elemID = this.id;
  var elemIDnum = elemID.split("y")[1];
  $("#agencyINFO"+elemIDnum).fadeIn();
});
//DELETE======================================================================

// templates for the two interactives
var slideshow_template = dot.compile(require("../partials/_slideshow.html"));

// Gray photo gallery
var photo00 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039548/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo01 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039430/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo02 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039425/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo03 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039421/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo04 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039420/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo05 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039418/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo06 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039417/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo07 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039401/3/2000x1000.jpg",
  caption: "This is a caption. "
};
var photo08 = {
  url: "http://ww2.hdnux.com/photos/54/11/64/12039400/3/2000x1000.jpg",
  caption: "This is a caption. "
};

// filling in slideshow
[0,1,2,3,4,5,6,7,8].forEach(function(ff){
  $("#photo_g0"+ff).append(slideshow_template(eval("photo0"+ff)));
});

// photo gallery event listeners
var gallery0_idx = 0;
var Ngallery0 = 8; var kk = 0;
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
