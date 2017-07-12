$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var platform = $("select#platform").val();
    var industry = $("select#industry").val();
    var end = $("select#end").val();


    if (platform === 'windows') {
      if (industry === 'business' && end === 'front') {
        $("#image").attr("src","img/Java.jpg");
      }
      else if (industry === 'gaming' && end === 'back') {
        $("#image").attr("src","img/csharp.jpg");
      }
      else if (industry === 'mobile' && end === 'design') {
        $("#image").attr("src","img/CSS.jpg");
      }
      else if (industry === 'gaming' && end === 'front') {
        $("#image").attr("src","img/Java.jpg");
      }
      else if (industry === 'mobile' && end === 'back') {
        $("#image").attr("src","img/csharp.jpg");
      }
      else if (industry === 'business' && end === 'design') {
        $("#image").attr("src","img/CSS.jpg");
      }
      else if (industry === 'mobile' && end === 'front') {
        $("#image").attr("src","img/Java.jpg");
      }
      else if (industry === 'business' && end === 'back') {
        $("#image").attr("src","img/csharp.jpg");
      }
      else if (industry === 'gaming' && end === 'design') {
        $("#image").attr("src","img/CSS.jpg");
      }

    }

      else if (platform === 'mac') {
        if (industry === 'business' && end === 'front') {
        $("#image").attr("src","img/Java.jpg");
      }
      else if (industry === 'gaming' && end === 'back') {
        $("#image").attr("src","img/csharp.jpg");
      }
      else if (industry === 'mobile' && end === 'design') {
        $("#image").attr("src","img/CSS.jpg");
      }
      else if (industry === 'gaming' && end === 'front') {
        $("#image").attr("src","img/Java.jpg");
      }
      else if (industry === 'mobile' && end === 'back') {
        $("#image").attr("src","img/csharp.jpg");
      }
      else if (industry === 'business' && end === 'design') {
        $("#image").attr("src","img/CSS.jpg");
      }
      else if (industry === 'mobile' && end === 'front') {
        $("#image").attr("src","img/Java.jpg");
      }
      else if (industry === 'business' && end === 'back') {
        $("#image").attr("src","img/csharp.jpg");
      }
      else if (industry === 'gaming' && end === 'design') {
        $("#image").attr("src","img/CSS.jpg");
      }

    }
    else {
         $("#image").attr("src","img/PhP.jpg");
       }
  event.preventDefault();
  });
});
