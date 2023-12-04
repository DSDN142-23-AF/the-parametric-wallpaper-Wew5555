//this is orange cat
//ear
let earTopY = 10 //the pointy ear
let earOutY = 60 //all 
let earLeftX = 45 //left ear back&front out&top is X
let earRightX = 155 //right ear back&front out&top is X
let earInY = 40 //the back one
let earIn2Y = 45 //the front one
//eye
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
//line on body
let lineDownY = 50
//colors
let white = 255
let black = 0
//let pink = color(255,192,203);//No. 55
//let green = color(173,255,0);//No. 56
//let cream = color(255,156,89);//No. 57
//let orange = color(255,88,15);//No. 58

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 260;
  pWallpaper.grid_settings.row_offset = 130;
}

function wallpaper_background() {
  background(218, 245, 241); //really light sky blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let pink = color(255, 192, 203);
  let green = color(173, 255, 0);
  let cream = color(255, 156, 89);
  let orange = color(255, 88, 15);

  //Ears
  fill(cream); //back ear
  stroke(cream);
  triangle(earLeftX, earOutY, earLeftX, earTopY, 95, earInY); //leaf
  triangle(110, earInY, earRightX, earTopY, earRightX, earOutY); //right
  fill(pink); //front ear
  stroke(pink);
  triangle(earLeftX, earOutY, earLeftX, earTopY, 85, earIn2Y); //front ear left
  triangle(120, earIn2Y, earRightX, earTopY, earRightX, earOutY); //front ear rigth
  //Face
  stroke(cream);
  fill(cream);
  ellipse(100, 85, 125, 110);
  //Eyes
  fill(green);
  stroke(green);
  ellipse(78, eyeMoveY, eyeScale); //left
  fill(black);
  ellipse(79, eyeMoveY, eyeScaleIn); //inside eye
  fill(green);
  ellipse(125, eyeMoveY, eyeScale); //right
  fill(black);
  ellipse(124, eyeMoveY, eyeScaleIn); //inside eye
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
  line(mouthTopX, mouthTopY, 95, mouthDownY); //left
  line(110, mouthDownY, mouthTopX, mouthTopY); //right
  //line in body
  strokeWeight(5);
  stroke(orange);
  line(92, lineDownY, 85, 34); //left
  line(101, lineDownY, 101, 32); //middle
  line(110, lineDownY, 117, 34); //right
}