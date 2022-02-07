//https://codepen.io/shravanti/pen/ExWeWZp?editors=1010
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3

function preload() {
    img1 = loadImage("1.jpg")
    img2 = loadImage("2.jpg")
    img3 = loadImage("3.jpg")
    img4 = loadImage("4.jpg")
    img5 = loadImage("5.jpg")
    img6 = loadImage("6.jpg")
    img7 = loadImage("7.jpg")
    img8 = loadImage("8.jpg")
    img9 = loadImage("9.jpg")
    img10 = loadImage("10.jpg")
    img11 = loadImage("11.jpg")
    img12 = loadImage("12.jpg")
    img13 = loadImage("13.jpg")
    img14 = loadImage("14.jpg")
    img15 = loadImage("15.jpg")
    img16 = loadImage("16.jpg")
    img17 = loadImage("17.jpg")
    img18 = loadImage("18.jpg")
    img19 = loadImage("19.jpg")
    img20 = loadImage("20.jpg")
    img21 = loadImage("21.jpg")
    img22 = loadImage("22.jpg")
    img23 = loadImage("23.jpg")
    img24 = loadImage("24.jpg")
    img25 = loadImage("25.jpg")
}
function setup() {
    canvas = createCanvas(700, 400)
    canvas.center()
}
function draw() {
    image(img1, 40, 10, 70, 70)
    image(img2, 120, 10, 70, 70)
    image(img3, 200, 10, 70, 70)
    image(img4, 280, 10, 70, 70)

    image(img5, 360, 10, 70, 70)

    image(img6, 440, 10, 70, 70)
    image(img7, 520, 10, 70, 70)
    image(img8, 600, 10, 70, 70)

    image(img9, 40, 90, 70, 70)
    image(img10, 120, 90, 70, 70)
    image(img11, 200, 90, 70, 70)
    image(img12, 280, 90, 70, 70)

    image(img13, 360, 90, 70, 70)

    image(img14, 440, 90, 70, 70)
    image(img15, 520, 90, 70, 70)
    image(img16, 600, 90, 70, 70)



    image(img17, 40, 170, 70, 70)
    image(img18, 120, 170, 70, 70)
    image(img19, 200, 170, 70, 70)
    image(img20, 280, 170, 70, 70)

    image(img21, 360, 170, 70, 70)

    image(img22, 440, 170, 70, 70)
    image(img23, 520, 170, 70, 70)
    image(img24, 600, 170, 70, 70)
    image(img25, 40, 250, 70, 70)



}
function Start(){
    document.getElementById("song").play();
    var id = null;
function myMove() {
 // var elem = document.getElementById("img1");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      img25.style.top = pos + 'px'; 
      img25.style.left = pos + 'px'; 
    }
  }
}

}

function Stop(){
    document.getElementById("song").pause();

}