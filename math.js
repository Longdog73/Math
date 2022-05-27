// alert("js is working")
var i = 0;

$(document).click(function() {
  var a = Math.floor(Math.random()*9 + 2); // 2 to 10
  if (a = 10) {
    a = 11;
  }
  var b = Math.floor(Math.random()*9 + 2);
  if (b = 10) {
    b = 11;
  }
  $(".math").text(a + " x " + b);
  $(".answer").text(a*b);
  i = i + 1;
  $(".count").text(i);
})
