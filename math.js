// alert("js is working")
var i = 0;

$(document).click(function() {
  var a = Math.floor(Math.random()*9 + 3); // 3 to 12
  if (a >= 10) {
    a++;
  }
  var b = Math.floor(Math.random()*8 + 3);
  if (b >= 10) {
    b++;
  }
  $(".math").text(a + " x " + b);
  $(".answer").text(a*b);
  i = i + 1;
  $(".count").text(i);
})
