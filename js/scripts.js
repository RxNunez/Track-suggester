$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var platform = $("input#platform").val();
    var industry = $("input#industry").val();
    var end = $("input#end").val();


    if (platform === 'windows') {
      if (industry === 'business' && end === 'front') {
        $("#image").attr("src","img/CSS.jpg");
      }
      else if (industry === 'gaming' && end === 'back') {
        $("#image").attr("src","img/C#.jpg");
      }
      else if (industry === 'mobile' && end === 'design') {
        $("#image").attr("src","img/Java.jpg");
      }
    }

    else if (platform === 'mac') {
      if (industry === 'business' && end === 'front') {
        $("#image").attr("src","img/CSS.jpg");
      }
      else if (industry === 'gaming' && end === 'back') {
        $("#image").attr("src","img/C#.jpg");
      }
      else if (industry === 'mobile' && end === 'design') {
        $("#image").attr("src","img/Java.jpg");
      }
    }

  event.preventDefault();
  });
});
