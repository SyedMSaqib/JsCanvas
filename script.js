const canvas = document.getElementById('myCanvas');
const Canvas = canvas.getContext('2d');


function drawCurvedTriangle(Canvas, x, y, width, height, curveAmount, rotationAngle) {
   
    Canvas.save();

    Canvas.translate(x + width / 2, y + height / 2);
    Canvas.rotate(rotationAngle);
    Canvas.translate(-(x + width / 2), -(y + height / 2));

    Canvas.beginPath();
    Canvas.rect(x, y, width, height / 6); // Adjust height to cut more
    Canvas.clip();
    
    Canvas.fillStyle = '#f64a50'; 
    Canvas.beginPath();
    Canvas.moveTo(x-1 + width / 2, y); 
    Canvas.bezierCurveTo(x, y + curveAmount, x, y + height, x + width / 2, y + height);
    Canvas.bezierCurveTo(x + width, y + height, x + width, y + curveAmount, x + width / 2, y);
    Canvas.closePath();
    Canvas.fill();

    Canvas.restore();
}
function drawRocketMid(Canvas, x, y, width, height, curveAmount, rotationAngle) {
    Canvas.save();

    Canvas.translate(x + width / 2, y + height / 2);
    Canvas.rotate(rotationAngle);
    Canvas.translate(-(x + width / 2), -(y + height / 2));

    Canvas.beginPath();
    Canvas.rect(x, y + height / 6, width, height / 1.7);
    Canvas.clip();

    Canvas.fillStyle = '#1E90FF'; 
    Canvas.beginPath();
    Canvas.moveTo(x-1 + width / 2, y); 
    Canvas.bezierCurveTo(x, y + curveAmount, x, y + height, x + width / 2, y + height);
    Canvas.bezierCurveTo(x + width, y + height, x + width, y + curveAmount, x + width / 2, y);
    Canvas.closePath();
    Canvas.fill();

    Canvas.restore();
}

function drawRocketEnd(Canvas, x, y, width, height, curveAmount, rotationAngle) {
    // Save the current canvas state
    Canvas.save();

    Canvas.translate(x + width / 2, y + height / 2);
 
    Canvas.rotate(rotationAngle);
    
    Canvas.translate(-(x + width / 2), -(y + height / 2));

    Canvas.beginPath();
    Canvas.rect(x, y + height / 1.4, width, height / 4);
    Canvas.clip();

    
    Canvas.fillStyle = '#f64a50'; 
    Canvas.beginPath();
    Canvas.moveTo(x-1 + width / 2, y); 
    Canvas.bezierCurveTo(x, y + curveAmount, x, y + height, x + width / 2, y + height);
    Canvas.bezierCurveTo(x + width, y + height, x + width, y + curveAmount, x + width / 2, y);
    Canvas.closePath();
    Canvas.fill();

    
    Canvas.restore();
}





function drawPlanet(Canvas, x, y, radius, color1, color2, rotationAngle) {
    
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
    Canvas.bezierCurveTo(x + radius + 70, y - radius / 4, x - radius - 70, y - radius / 4, x - radius, y);
    Canvas.stroke();

    
    Canvas.restore();
}


function drawTick(Canvas, x, y, radius, rotationAngle) {
    
    Canvas.save();

    
    Canvas.translate(x, y);
   
    Canvas.rotate(rotationAngle);
    
    Canvas.translate(-x, -y);

    
    Canvas.fillStyle = '#559702';
    Canvas.beginPath();
    Canvas.arc(x, y, radius, 0, Math.PI * 2);
    Canvas.fill();

    Canvas.strokeStyle = '#FFFFFF';
    Canvas.lineWidth = 3;
    Canvas.beginPath();
    Canvas.moveTo(x - radius * 0.5, y);
    
    Canvas.lineTo(x - radius * 0.2, y + radius * 0.5);
    Canvas.lineTo(x + radius * 0.5, y - radius * 0.5);
    Canvas.stroke();


    Canvas.restore();
}

function drawLightBulb(Canvas, x, y, radius) {
   
    Canvas.fillStyle = '#FFD700';
    Canvas.beginPath();
    Canvas.ellipse(x, y - radius * 0.3, radius, radius * 1.2, 0, 0, Math.PI * 2);
    Canvas.fill();

   
    Canvas.fillStyle = '#8A2BE2';
    Canvas.beginPath();
    Canvas.arc(x, y + radius * 0.8, radius * 0.4, 0, Math.PI);
    Canvas.fill();
}



drawCurvedTriangle(Canvas, 350, 250, 100, 200, 35,Math.PI / 4);
drawRocketMid(Canvas, 350, 250, 100, 200, 35,Math.PI / 4);
drawRocketEnd(Canvas, 350, 250, 100, 200, 35,Math.PI / 4);

drawPlanet(Canvas, 350, 250, 25, '#1E90FF', '#8A2BE2',Math.PI / -8);
drawPlanet(Canvas, 500, 400, 20, '#7b0c2b', '#a62e30',Math.PI/8);
drawTick(Canvas, 250, 300, 20, Math.PI/-5);
drawLightBulb(Canvas, 500, 330, 20);
