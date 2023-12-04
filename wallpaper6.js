//this is white cat
//ear
let earTopY = 10 //the pointy ear
let earOutY = 60
let earLeftX = 45 //left ear back&front out&top is X
let earRightX = 155 //right ear back&front out&top is X
let earInY = 40 //the back one
let earIn2Y = 45 //the front one
//eye
let eyesOpen = true //if statement or condition/No. 76
let eyeScale = 30
let eyeScaleIn = 25
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
//let skyBlue = color(135,206,250);//No. 56
//let yellow = color(255,200,21);//No. 57
//let leftEyes = skyBlue//No. 60
//let rightEyes = yellow//No. 61

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 250;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset = 130;
}

function wallpaper_background() {
  background(174, 208, 232); //blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let pink = color(255, 192, 203);
  let skyBlue = color(135, 206, 250);
  let yellow = color(255, 200, 21);

  //color of body part
  let leftEyes = skyBlue
  let rightEyes = yellow

  //Ears
  strokeWeight(0.1);
  triangle(earLeftX, earOutY, earLeftX, earTopY, 95, earInY); //leaf
  triangle(110, earInY, earRightX, earTopY, earRightX, earOutY); //right
  stroke(pink);
  fill(pink);
  triangle(earLeftX, earOutY, earLeftX, earTopY, 85, earIn2Y); //front ear left
  triangle(120, earIn2Y, earRightX, earTopY, earRightX, earOutY); //front ear rigth
  //Face
  stroke(0.1);
  fill(white);
  ellipse(100, 85, 125, 110);
  //Eyes
  if (eyesOpen) {
    fill(leftEyes);
    stroke(leftEyes);
    ellipse(78, eyeMoveY, eyeScale); //left
    fill(black);
    ellipse(79, eyeMoveY, eyeScaleIn); //inside eye
    fill(rightEyes);
    ellipse(125, eyeMoveY, eyeScale); //right
    fill(black);
    ellipse(124, eyeMoveY, eyeScaleIn); //inside eye
  } else {
    //sleep eyes
    strokeWeight(1.5);
    line(60, 75, 85, 75); //left
    line(115, 75, 140, 75); //right
    //sleep
    strokeWeight(1);
    line(160, 150, 200, 150);
    line(160, 180, 200, 150);
    line(160, 180, 200, 180);
  }

  //Nose
  strokeWeight(0.5);
  fill(pink);
  triangle(94, noseTopY, 102, 92, 110, noseTopY);
  //Whiskers
  stroke(black);
  line(lineInleftX, lineIn1Y, lineOutleftX, lineOut1Y); //line 1 left
  line(lineInleftX, lineIn2Y, lineOutleftX, lineIn2Y); //line 2 left
  line(lineInleftX, lineIn3Y, lineOutleftX, lineOut3Y); //line 3 left
  line(lineOutRightX, lineOut1Y, lineInRightX, lineIn1Y); //line 1 right
  line(lineInRightX, lineIn2Y, lineOutRightX, lineIn2Y); //line 2 right
  line(lineOutRightX, lineOut3Y, lineInRightX, lineIn3Y); //line 3 right
  //Mouth
  line(mouthTopX, mouthTopY, 95, mouthDownY); //left
  line(110, mouthDownY, mouthTopX, mouthTopY); //right
  //cloud
  noStroke();
  fill(white);
  ellipse(130, 190, 60, 50);
  ellipse(160, 180, 60, 50);
  ellipse(210, 190, 60, 50);
  ellipse(150, 210, 60, 50);
  ellipse(190, 205, 60, 50);
}