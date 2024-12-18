// Create the canvas element dynamically
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

// Function to generate a random color
function randomColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red}, ${green}, ${blue})`;
}

// Function to draw a random rectangle
function drawRectangle() {
	const context = canvas.getContext("2d");
	const x = Math.random() * canvas.width;
	const y = Math.random() * canvas.height;
	const width = Math.random() * 200 + 20;
	const height = Math.random() * 200 + 20;
	context.fillStyle = randomColor();
	context.fillRect(x, y, width, height);
}

// Function to draw a random circle
function drawCircle() {
	const context = canvas.getContext("2d");
	const x = Math.random() * canvas.width;
	const y = Math.random() * canvas.height;
	const radius = Math.random() * 100 + 10;
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2);
	context.fillStyle = randomColor();
	context.fill();
	context.closePath();
}

// Function to draw the repeating pattern (motif)
function drawMotif() {
	const context = canvas.getContext("2d");
	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	for (let i = 0; i < 5; i++) {
		context.beginPath();
		context.arc(centerX, centerY, 50 + i * 30, 0, Math.PI * 2);
		context.strokeStyle = randomColor();
		context.lineWidth = 5;
		context.stroke();
		context.closePath();
	}
}

// Main function to create the T-shirt design
function createDesign() {
	const context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	const shapeCount = 20; // Number of random shapes
	for (let i = 0; i < shapeCount; i++) {
		if (Math.random() > 0.5) {
			drawRectangle();
		} else {
			drawCircle();
		}
	}
	drawMotif(); // Draw the central motif
}

// Initial design
createDesign();

// Redraw the design when the canvas is clicked
canvas.addEventListener("click");
