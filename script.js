const canvas = document.getElementById("myCanvas");
const Canvas = canvas.getContext("2d");

function RocketHead(Canvas, x, y, width, height, curveAmount, rotationAngle) {
  Canvas.save();

  Canvas.translate(x + width / 2, y + height / 2);
  Canvas.rotate(rotationAngle);
  Canvas.translate(-(x + width / 2), -(y + height / 2));

  Canvas.beginPath();
  Canvas.rect(x, y, width, height / 6);
  Canvas.clip();

  Canvas.fillStyle = "#f64a50";
  Canvas.beginPath();
  Canvas.moveTo(x - 1 + width / 2, y);
  Canvas.bezierCurveTo(x, y + curveAmount, x, y + height, x + width / 2, y + height);
  Canvas.bezierCurveTo(x + width, y + height, x + width, y + curveAmount, x + width / 2, y);
  Canvas.closePath();
  Canvas.fill();

  Canvas.restore();
}
function RocketMid(Canvas, x, y, width, height, curveAmount, rotationAngle) {
  Canvas.save();

  Canvas.translate(x + width / 2, y + height / 2);
  Canvas.rotate(rotationAngle);
  Canvas.translate(-(x + width / 2), -(y + height / 2));

  Canvas.beginPath();
  Canvas.rect(x, y + height / 6, width, height / 1.7);
  Canvas.clip();

  Canvas.fillStyle = "#1E90FF";
  Canvas.beginPath();
  Canvas.moveTo(x - 1 + width / 2, y);
  Canvas.bezierCurveTo(x, y + curveAmount, x, y + height, x + width / 2, y + height);
  Canvas.bezierCurveTo(x + width, y + height, x + width, y + curveAmount, x + width / 2, y);
  Canvas.closePath();
  Canvas.fill();

  Canvas.restore();
}

function RocketEnd(Canvas, x, y, width, height, curveAmount, rotationAngle) {
  RocketWings(Canvas, 310, 340, 20, 70, 35, Math.PI / 2.4);
  RocketWings(Canvas, 355, 400, 20, 70, 35, Math.PI / 5.4);
  RocketTail(Canvas, 315, 435, 100, 150, 100, Math.PI / 4, "#D3D3D3", "#000000", 5, 20);

  Canvas.save();

  Canvas.translate(x + width / 2, y + height / 2);

  Canvas.rotate(rotationAngle);

  Canvas.translate(-(x + width / 2), -(y + height / 2));

  Canvas.beginPath();
  Canvas.rect(x, y + height / 1.4, width, height / 4);
  Canvas.clip();

  Canvas.fillStyle = "#f64a50";
  Canvas.beginPath();
  Canvas.moveTo(x - 1 + width / 2, y);
  Canvas.bezierCurveTo(x, y + curveAmount, x, y + height, x + width / 2, y + height);
  Canvas.bezierCurveTo(x + width, y + height, x + width, y + curveAmount, x + width / 2, y);
  Canvas.closePath();
  Canvas.fill();

  Canvas.restore();

  RocketWings(Canvas, 330, 370, 20, 70, 35, Math.PI / 4);
  HandMid(Canvas, 397, 420, 100, 150, 100, Math.PI / 0.95, "#e69278");
}

function Circle(Canvas, x, y, radius, innerColor, borderColor, borderWidth) {
  Canvas.fillStyle = innerColor;
  Canvas.beginPath();
  Canvas.arc(x, y, radius, 0, Math.PI * 2);
  Canvas.fill();

  Canvas.strokeStyle = borderColor;
  Canvas.lineWidth = borderWidth;
  Canvas.beginPath();
  Canvas.arc(x, y, radius, 0, Math.PI * 2);
  Canvas.stroke();
}

function RocketWings(Canvas, x, y, width, height, curveAmount, rotationAngle) {
  Canvas.save();

  Canvas.translate(x + width / 2, y + height / 2);

  Canvas.rotate(rotationAngle);

  Canvas.translate(-(x + width / 2), -(y + height / 2));

  Canvas.fillStyle = "#fda704";
  Canvas.beginPath();
  Canvas.moveTo(x - 1 + width / 2, y);

  Canvas.bezierCurveTo(x, y + curveAmount, x, y + height, x + width / 2, y + height);

  Canvas.bezierCurveTo(x + width, y + height, x + width, y + curveAmount, x + width / 2, y);
  Canvas.closePath();
  Canvas.fill();

  Canvas.restore();
}

function Planet(Canvas, x, y, radius, color1, color2, rotationAngle) {
  Canvas.save();

  Canvas.translate(x, y);

  Canvas.rotate(rotationAngle);

  Canvas.translate(-x, -y);

  Canvas.fillStyle = color1;
  Canvas.beginPath();
  Canvas.arc(x, y, radius, 0, Math.PI * 2);
  Canvas.fill();

  Canvas.strokeStyle = color2;
  Canvas.lineWidth = 10;
  Canvas.beginPath();
  Canvas.moveTo(x + radius, y);
  Canvas.bezierCurveTo(
    x + radius + 70,
    y - radius / 4,
    x - radius - 70,
    y - radius / 4,
    x - radius,
    y
  );
  Canvas.stroke();

  Canvas.restore();
}

function Tick(Canvas, x, y, radius, rotationAngle) {
  Canvas.save();

  Canvas.translate(x, y);

  Canvas.rotate(rotationAngle);

  Canvas.translate(-x, -y);

  Canvas.fillStyle = "#559702";
  Canvas.beginPath();
  Canvas.arc(x, y, radius, 0, Math.PI * 2);
  Canvas.fill();

  Canvas.strokeStyle = "#FFFFFF";
  Canvas.lineWidth = 3;
  Canvas.beginPath();
  Canvas.moveTo(x - radius * 0.5, y);

  Canvas.lineTo(x - radius * 0.2, y + radius * 0.5);
  Canvas.lineTo(x + radius * 0.5, y - radius * 0.5);
  Canvas.stroke();

  Canvas.restore();
}

function LightBulb(Canvas, x, y, radius) {
  Canvas.fillStyle = "#fda704";
  Canvas.beginPath();
  Canvas.ellipse(x, y - radius * 0.3, radius, radius * 1.2, 0, 0, Math.PI * 2);
  Canvas.fill();

  Canvas.fillStyle = "#8A2BE2";
  Canvas.beginPath();
  Canvas.arc(x, y + radius * 0.8, radius * 0.4, 0, Math.PI);
  Canvas.fill();
}

function RocketTail(
  Canvas,
  x,
  y,
  topWidth,
  bottomWidth,
  height,
  rotationAngle,
  fillColor,
  lineColor,
  lineWidth,
  lineOffset
) {
  Canvas.save();

  Canvas.translate(x, y);

  Canvas.rotate(rotationAngle);

  Canvas.translate(-x, -y);

  const halfTopWidth = topWidth / 6;
  const halfBottomWidth = bottomWidth / 4.5;
  const topY = y - height / 4;
  const bottomY = y + height / 4;
  const curveAmount = 10;

  Canvas.fillStyle = fillColor;
  Canvas.beginPath();
  Canvas.moveTo(x - halfTopWidth, topY);

  Canvas.bezierCurveTo(
    x - halfTopWidth + curveAmount,
    topY - curveAmount,
    x + halfTopWidth - curveAmount,
    topY - curveAmount,
    x + halfTopWidth,
    topY
  );

  Canvas.bezierCurveTo(
    x + halfTopWidth + curveAmount,
    topY + curveAmount,
    x + halfBottomWidth + curveAmount,
    bottomY - curveAmount,
    x + halfBottomWidth,
    bottomY
  );

  Canvas.bezierCurveTo(
    x + halfBottomWidth - curveAmount,
    bottomY + curveAmount,
    x - halfBottomWidth + curveAmount,
    bottomY + curveAmount,
    x - halfBottomWidth,
    bottomY
  );

  Canvas.bezierCurveTo(
    x - halfBottomWidth - curveAmount,
    bottomY - curveAmount,
    x - halfTopWidth - curveAmount,
    topY + curveAmount,
    x - halfTopWidth,
    topY
  );

  Canvas.closePath();
  Canvas.fill();

  Canvas.strokeStyle = lineColor;
  Canvas.lineWidth = lineWidth - 2;

  const numLines = 3;
  const spacing = (bottomWidth - topWidth) / (numLines + 1);
  for (let i = 1; i <= numLines; i++) {
    const offsetX = halfTopWidth + i * spacing - (spacing * (numLines + 1)) / 2 - lineOffset;
    Canvas.beginPath();
    Canvas.moveTo(x + offsetX, topY);
    Canvas.lineTo(x + offsetX + ((bottomWidth - topWidth) * (i - 1)) / (numLines + 1), bottomY);
    Canvas.stroke();
  }

  Canvas.restore();
}
function HandMid(Canvas, x, y, topWidth, bottomWidth, height, rotationAngle, fillColor) {
  Canvas.save();

  Canvas.translate(x, y);
  Canvas.rotate(rotationAngle);
  Canvas.translate(-x, -y);

  const halfTopWidth = topWidth / 6;
  const halfBottomWidth = bottomWidth / 8;
  const topY = y - height / 4;
  const bottomY = y + height / 4;
  const curveAmount = 5;

  Canvas.fillStyle = fillColor;
  Canvas.beginPath();
  Canvas.moveTo(x - halfTopWidth, topY);

  Canvas.bezierCurveTo(
    x - halfTopWidth + curveAmount,
    topY - curveAmount,
    x + halfTopWidth - curveAmount,
    topY - curveAmount,
    x + halfTopWidth,
    topY
  );

  Canvas.bezierCurveTo(
    x + halfTopWidth + curveAmount,
    topY + curveAmount,
    x + halfBottomWidth + curveAmount,
    bottomY - curveAmount,
    x + halfBottomWidth,
    bottomY
  );

  Canvas.bezierCurveTo(
    x + halfBottomWidth - curveAmount,
    bottomY + curveAmount,
    x - halfBottomWidth + curveAmount,
    bottomY + curveAmount,
    x - halfBottomWidth,
    bottomY
  );

  Canvas.bezierCurveTo(
    x - halfBottomWidth - curveAmount,
    bottomY - curveAmount,
    x - halfTopWidth - curveAmount,
    topY + curveAmount,
    x - halfTopWidth,
    topY
  );

  Canvas.closePath();
  Canvas.fill();

  Canvas.strokeStyle = "#bf7966";
  Canvas.lineWidth = 3;

  const lineStartX = x - halfBottomWidth;
  const lineStartY = y + 15;
  const lineEndX = x + halfBottomWidth;
  const lineEndY = y + 15;

  Canvas.beginPath();
  Canvas.moveTo(lineStartX, lineStartY);
  Canvas.lineTo(lineEndX, lineEndY);
  Canvas.stroke();

  Canvas.restore();
}

function Finger(Canvas, x, y, width, height, curveAmount, rotationAngle) {
  for (var i = 0; i < 4; i++) {
    Canvas.save();

    if (i === 0) {
      Canvas.translate(x + width / 2, y + height / 1.6);
      Canvas.rotate(rotationAngle);
    } else if (i === 1) {
      Canvas.translate(x + width / 1.3, y + height / 2);
      Canvas.rotate(rotationAngle + 0.27);
    } else if (i === 2) {
      Canvas.translate(x + width / 0.95, y + height / 2);
      Canvas.rotate(rotationAngle + 0.56);
    } else if (i === 3) {
      Canvas.translate(x + width / 0.8, y + height / 1.6);
      Canvas.rotate(rotationAngle + 0.8);
    }

    Canvas.translate(-(x + width / 2), -(y + height / 2));

    Canvas.fillStyle = "#e69278";
    Canvas.beginPath();

    Canvas.moveTo(x + width / 2, y);

    Canvas.bezierCurveTo(
      x + width * 0.1,
      y + curveAmount / 2,
      x + width * 0.8,
      y + height * 0.8,
      x + width,
      y + height
    );

    Canvas.bezierCurveTo(
      x + width * 0.2,
      y + height + curveAmount / 2,
      x + width * 0.05,
      y + height * 0.2,
      x + width / 2,
      y
    );

    Canvas.closePath();
    Canvas.fill();

    Canvas.restore();
  }
  HandBottom(Canvas, 380, 420, 30, 70, 35);
}

function HandBottom(Canvas, x, y, width, height, curveAmount) {
  Canvas.save();

  Canvas.fillStyle = "#e69278";
  Canvas.beginPath();

  Canvas.moveTo(x, y);

  Canvas.lineTo(x + width, y);

  Canvas.bezierCurveTo(
    x + width + curveAmount / 2,
    y,
    x + width,
    y + curveAmount * 0.4,
    x + width,
    y + curveAmount
  );

  Canvas.lineTo(x + width, y + height - curveAmount);

  Canvas.bezierCurveTo(
    x + width,
    y + height - curveAmount * 0.4,
    x + width + curveAmount / 2,
    y + height,
    x + width,
    y + height
  );

  Canvas.lineTo(x, y + height);

  Canvas.lineTo(x, y + curveAmount);

  Canvas.bezierCurveTo(x, y + curveAmount * 0.4, x - curveAmount / 2, y, x, y);

  Canvas.closePath();
  Canvas.fill();

  Canvas.restore();
}

RocketHead(Canvas, 350, 250, 100, 200, 35, Math.PI / 4);
RocketMid(Canvas, 350, 250, 100, 200, 35, Math.PI / 4);
RocketEnd(Canvas, 350, 250, 100, 200, 35, Math.PI / 4);
Circle(Canvas, 430, 320, 15, "#D8D8D8", "#c5c7c2", 5);
Planet(Canvas, 350, 250, 25, "#1E90FF", "#8A2BE2", Math.PI / -8);
Planet(Canvas, 500, 400, 20, "#7b0c2b", "#a62e30", Math.PI / 8);
Tick(Canvas, 280, 300, 20, Math.PI / -5);
LightBulb(Canvas, 500, 330, 20);
Finger(Canvas, 370, 360, 30, 70, 35, Math.PI / 1);
