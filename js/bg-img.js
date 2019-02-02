bg = new Image();
var imgSource = "img/bg2_c.jpg";
bg.onload = function() {
    $('#bg').removeClass('blank');
    $('#bg').addClass('img');
};
bg.src = imgSource;