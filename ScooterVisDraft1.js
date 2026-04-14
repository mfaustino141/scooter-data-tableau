function setup() {
  let canvas = createCanvas(1920, 1080);
  canvas.parent("p5-container");
}


function draw() {
  clear();

  drawLegend();
}

function drawLegend() {
  let w = 360;
  let h = 170;
  let x = 30;
  let y = 750;

  // Background card
  fill(20, 20, 30, 160);
  noStroke();
  rect(x, y, w, h, 20);

  // Title
  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("Scooter Status", x + 20, y + 35);

  textStyle(NORMAL);
  textSize(14);

  // Green dot
  fill(0, 220, 120);
  noStroke();
  ellipse(x + 25, y + 65, 14);

  fill(255);
  text(
    "Properly parked in a designated area",
    x + 45,
    y + 70
  );

  // Red dot
  fill(255, 80, 80);
  ellipse(x + 25, y + 100, 14);

  fill(255);
  text(
    "Not in a parking area & no nearby parking",
    x + 45,
    y + 105
  );

  let yShift = 5;

  // Red X
  stroke(255, 80, 80);
  strokeWeight(3);
  line(x + 18, y + 125 + yShift, x + 32, y + 139 + yShift);
  line(x + 32, y + 125 + yShift, x + 18, y + 139 + yShift);

  noStroke();
  fill(255);
  text(
    "Not parked, but near a parking area",
    x + 45,
    y + 135 + yShift
  );
}
