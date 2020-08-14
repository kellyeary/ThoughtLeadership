$(document).ready(function() {


$( "#corePlus" ).click(function (e) {
      $(".active").removeClass("active");
      $(".show").removeClass("show").addClass("hide");
      $(".coreDrop").removeClass("hide");
      $(".coreDrop").addClass("show");
      $(this).addClass("active");
e.preventDefault();
});

$( "#hcmPlus" ).click(function (e) {
      $(".active").removeClass("active");
      $(".show").removeClass("show").addClass("hide");
      $(".hcmDrop").removeClass("hide");
      $(".hcmDrop").addClass("show");
      $(this).addClass("active");
e.preventDefault();
});

$( "#scmPlus" ).click(function (e) {
      $(".active").removeClass("active");
      $(".show").removeClass("show").addClass("hide");
      $(".scmDrop").removeClass("hide");
      $(".scmDrop").addClass("show");
      $(this).addClass("active");
e.preventDefault();
});

$( "#cxmPlus" ).click(function (e) {
      $(".active").removeClass("active");
      $(".show").removeClass("show").addClass("hide");
      $(".cxmDrop").removeClass("hide");
      $(".cxmDrop").addClass("show");
      $(this).addClass("active");
e.preventDefault();
});

});
