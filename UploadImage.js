function upload() {
  var fileinput = document.getElementById('buttonInput');
  var filename = fileinput.value;
  var imgcanvas = document.getElementById('canv');
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
