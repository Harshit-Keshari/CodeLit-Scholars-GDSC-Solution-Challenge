function join(){
    alert("Please Login Or SignUp !");
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  stickyElem = document.querySelector(".cart");
 
  /* Gets the amount of height
  of the element from the
  viewport and adds the
  pageYOffset to get the height
  relative to the page */
  currStickyPos = stickyElem.getBoundingClientRect().top 
    + window.pageYOffset;
  window.onscroll = function () {

      /* Check if the current Y offset
      is greater than the position of
      the element */
      if (window.pageYOffset > currStickyPos) {
          stickyElem.style.position = "fixed";
          stickyElem.style.top = "0px";
      } else {
          stickyElem.style.position = "relative";
          stickyElem.style.top = "initial";
      }
  }
  // stickyElem = document.querySelector(".navbar");
 
  // /* Gets the amount of height
  // of the element from the
  // viewport and adds the
  // pageYOffset to get the height
  // relative to the page */
  // currStickyPos = stickyElem.getBoundingClientRect().top 
  //   + window.pageYOffset;
  // window.onscroll = function () {

  //     /* Check if the current Y offset
  //     is greater than the position of
  //     the element */
  //     if (window.pageYOffset > currStickyPos) {
  //         stickyElem.style.position = "fixed";
  //         stickyElem.style.top = "0px";
  //     } else {
  //         stickyElem.style.position = "relative";
  //         stickyElem.style.top = "initial";
  //     }
  // }
  