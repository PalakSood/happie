//https://codepen.io/shravanti/pen/ExWeWZp?editors=1010
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3

function preload() {
    pic1= loadImage("image1.png")
   hriday=loadImage("HRIDAY.jpeg")
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
    canvas = createCanvas(400, 500)
    canvas.center()
    //canvas1= createCanvas(700, 400)
    canvas.hide()
    document.getElementById("solve").style.visibility = 'hidden';
}
function draw() {
    image(hriday,0,0,400,500)
    
    

}
function Start(){
    document.getElementById("song").play();
    document.getElementById("image1").style.visibility = 'hidden';
    
    document.getElementById("image1").style.width = "0px";
    document.getElementById("image1").style.height = "0px";
    document.getElementById("image2").style.width = "430px";
    document.getElementById("image2").style.height = "500px";
    
    document.getElementById("image2").style.visibility = 'visible';
    document.getElementById("solve").style.visibility = 'visible';
    setTimeout(function () {
        document.getElementById("image2").style.visibility = 'hidden';
        canvas.show()
        document.getElementById("solve").style.visibility = 'hidden';
    }, 5000);
   
}

function Stop(){
    document.getElementById("song").pause();

}
