$(document).ready(function () {
  let $btns = $(".project-area .button-group button");

  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });
    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  //Owl-carousel

  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
    },
  });

  // Sticky nav
  let nav_offset_top = $(".header-area").height() + 50;

  function navbarFixed() {
    if ($(".header-area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header-area .main-menu").addClass("navbar-fixed");
        } else {
          $(".header-area .main-menu").removeClass("navbar-fixed");
        }
      });
    }
  }

  navbarFixed();
});

function downloadCV() {
  // Replace 'cv_file_path' with the path to your CV file
  var cvFilePath = "../images/my CV .pdf";

  // Create a new anchor element
  var downloadLink = document.createElement("a");

  // Set the href attribute to the path of the CV file
  downloadLink.href = cvFilePath;

  // Set the download attribute to force download
  downloadLink.download = "MHS-cv"; // You can specify the name of the downloaded file

  // Append the anchor element to the body
  document.body.appendChild(downloadLink);

  // Programmatically trigger a click event on the anchor element
  downloadLink.click();

  // Clean up: remove the anchor element from the DOM
  document.body.removeChild(downloadLink);
}
