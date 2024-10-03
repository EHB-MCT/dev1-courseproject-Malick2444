Signature();

function Signature() {
	//green square
	context.beginPath();
	context.rect(100, 100, 300, 300);
	context.fillStyle = "chartreuse";
	context.fill();

	context.fillStyle = "black";
	//upper notch
	context.beginPath();
	context.rect(220, 100, 50, 50);

	context.fill();

	//left down notch
	context.beginPath();
	context.rect(100, 280, 50, 50);
	context.fill();

	//right down notch
	context.beginPath();
	context.rect(350, 280, 50, 50);
	context.fillStyle = "black";
	context.fill();

	//left eye socket
	context.beginPath();
	context.rect(100, 280, 50, 50);
	context.fillStyle = "black";
	context.fill();

	//middle eye socket
	context.beginPath();
	context.rect(220, 280, 50, 50);
	context.fillStyle = "black";
	context.fill();

	// left eye
	context.beginPath();
	context.rect(160, 220, 50, 50);
	context.fillStyle = "black";
	context.fill();

	//right eye
	context.beginPath();
	context.rect(280, 220, 50, 50);
	context.fillStyle = "black";
	context.fill();
}
