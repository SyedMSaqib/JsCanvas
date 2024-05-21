const canvas = document.getElementById('myCanvas');
const Canvas = canvas.getContext('2d');

// Function to draw the rocket
// function drawRocket(Canvas, x, y, width, height) {
    
// }


function drawRocketHead(Canvas, x, y, width, height, curveAmount) {
    Canvas.beginPath();
    Canvas.moveTo(x, y); // Move to the starting point
    
    // Calculate control point
    const controlX = x - width / 2;
    const controlY = y - curveAmount; // Adjust curve downward, you can adjust this as needed

    // Draw the curve
    Canvas.quadraticCurveTo(controlX, controlY, x + width, y - height);

    // Stroke or fill the curve as needed
    Canvas.stroke();
    //Canvas.fill(); // Uncomment this if you want to fill the curve

    Canvas.closePath();
}






// Function to draw the hand
function drawHand(Canvas, x, y) {
    Canvas.fillStyle = '#FFCC99';
    Canvas.beginPath();
    Canvas.moveTo(x - 30, y + 170);
    Canvas.lineTo(x - 30, y + 300);
    Canvas.lineTo(x + 30, y + 300);
    Canvas.lineTo(x + 30, y + 170);
    Canvas.closePath();
    Canvas.fill();
}

// Function to draw a planet
function drawPlanet(Canvas, x, y, radius, color1, color2) {
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
}


function drawTick(Canvas, x, y, radius) {
    Canvas.fillStyle = '#32CD32';
    Canvas.beginPath();
    Canvas.arc(x, y, radius, 0, Math.PI * 2);
    Canvas.fill();

    Canvas.strokeStyle = '#FFFFFF';
    Canvas.lineWidth = 3; 
    Canvas.beginPath();
    Canvas.moveTo(x - radius * 0.5, y);
    // Draw the tick shape
    Canvas.lineTo(x - radius * 0.2, y + radius * 0.5);
    Canvas.lineTo(x + radius * 0.5, y - radius * 0.5);
    Canvas.stroke();
}

function drawLightBulb(Canvas, x, y, radius) {
    // Draw the light bulb
    Canvas.fillStyle = '#FFD700';
    Canvas.beginPath();
    Canvas.ellipse(x, y - radius * 0.3, radius, radius * 1.2, 0, 0, Math.PI * 2);
    Canvas.fill();

    // Draw the holder
    Canvas.fillStyle = '#8A2BE2';
    Canvas.beginPath();
    Canvas.arc(x, y + radius * 0.8, radius * 0.4, 0, Math.PI);
    Canvas.fill();

    
}



// Draw the elements
// drawRocket(Canvas, 350, 350, 40, 100);

drawRocketHead(Canvas, 350, 300, 70, 100, 15);

// drawHand(Canvas, 400, 350);
drawPlanet(Canvas, 350, 150, 25, '#1E90FF', '#8A2BE2');
drawPlanet(Canvas, 650, 400, 20, '#8B0000', '#cc0000');
drawTick(Canvas, 200, 150, 20);
drawLightBulb(Canvas, 630, 300, 20);
