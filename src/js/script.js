$(document).ready(function(){

  function openToggle() {
    $(".page-header__navbar-wrap").slideToggle("slow");
  }
  $('.toggle-btn').on('click', openToggle);
});
