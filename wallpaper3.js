//this is gray cat
//ear
let earTopY = 10 //the pointy ear
let earOutY = 60 //all 
let earLeftX = 45 //left ear back&front out&top is X
let earRightX = 155 //right ear back&front out&top is X
let earInY = 40 //the back one
let earIn2Y = 45 //the front one
//eye
let openRightEye = true//if statement or condition. No. 77
let eyeScale = 30
let eyeScaleIn = 25 //the inside eyes
let eyeMoveY = 70 //move both eyes
//nose
let noseTopY = 83 //move the top straight part
//whiskers
let lineInleftX = 55 //'In' mean inside the face
let lineInRightX = 145
let lineIn1Y = 80 //both L&R
let lineIn2Y = 90 //both L&R
let lineIn3Y = 100 //both L&R
let lineOutleftX = 15 //'Out' mean outside the face
let lineOutRightX = 185
let lineOut1Y = 60 //both L&R
let lineOut3Y = 120 //both L&R
//mouth
let mouthDownY = 110
let mouthTopY = 102
let mouthTopX = 102
//colors
let white = 255
let black = 0
//let pink = color(255,192,203);//No. 55
//let gray = color(167,173,186);/No. 56
//let blue = color(0,236,255);/No. 57
//let eyeColor = blue//No. 60
//let bodyColor = gray//No. 61

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset = 130;
}

function wallpaper_background() {
  background(255, 249, 249); //white with little bit of pink
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let pink = color(255, 192, 203);
  let gray = color(167, 173, 186);
  let blue = color(0, 236, 255);

  //body color
  let eyeColor = blue
  let bodyColor = gray

  //Ears
  fill(bodyColor); //back ear
  stroke(bodyColor);
  triangle(earLeftX, earOutY, earLeftX, earTopY, 95, earInY); //leaf
  triangle(110, earInY, earRightX, earTopY, earRightX, earOutY); //right
  fill(pink); //front ear
  stroke(pink);
  triangle(earLeftX, earOutY, earLeftX, earTopY, 85, earIn2Y); //front ear left
  triangle(120, earIn2Y, earRightX, earTopY, earRightX, earOutY); //front ear rigth
  //Face
  stroke(bodyColor);
  fill(bodyColor);
  ellipse(100, 85, 125, 110);
  //Eyes
  if (openRightEye) {
    fill(eyeColor);
    stroke(eyeColor);
    ellipse(78, eyeMoveY, eyeScale); //left
    fill(black);
    ellipse(79, eyeMoveY, eyeScaleIn); //inside eye
    fill(eyeColor);
    ellipse(125, eyeMoveY, eyeScale); //right
    fill(black);
    ellipse(124, eyeMoveY, eyeScaleIn); //inside eye
  } else {
    fill(eyeColor);
    stroke(eyeColor);
    ellipse(78, eyeMoveY, eyeScale); //left
    fill(black);
    ellipse(79, eyeMoveY, eyeScaleIn); //inside eye
    strokeWeight(1.5);
    stroke(black);
    line(115, 75, 140, 75);
  }

  //Nose
  fill(pink);
  strokeWeight(0.5);
  stroke(black);
  triangle(94, noseTopY, 102, 92, 110, noseTopY);
  //Whiskers
  strokeWeight(0.5);
  stroke(black);
  line(lineInleftX, lineIn1Y, lineOutleftX, lineOut1Y); //line 1 left
  line(lineInleftX, lineIn2Y, lineOutleftX, lineIn2Y); //line 2 left
  line(lineInleftX, lineIn3Y, lineOutleftX, lineOut3Y); //line 3 left
  line(lineOutRightX, lineOut1Y, lineInRightX, lineIn1Y); //line 1 right
  line(lineInRightX, lineIn2Y, lineOutRightX, lineIn2Y); //line 2 right
  line(lineOutRightX, lineOut3Y, lineInRightX, lineIn3Y); //line 3 right
  //Mouth
  stroke(black);
  line(mouthTopX, mouthTopY, 95, mouthDownY); //left
  line(110, mouthDownY, mouthTopX, mouthTopY); //right
}