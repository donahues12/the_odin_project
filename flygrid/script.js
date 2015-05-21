$(document).ready(function() {

	var defaultInput = 96; /*create global variable and define default number of grid squares*/
	gridFill(defaultInput);
	cellColor();


	/*click functions*/
	/*for default tracing function*/
	$('#tracer').click(function() {
		$('.cell').remove();
		defaultInput = parseInt(prompt('Please enter the number of desired grid blocks:'));
		if (defaultInput > 1000) {
			defaultInput = 1000;
		}
		else if (defaultInput < 1) {
			defaultInput = 1;
		}
		gridFill(defaultInput);
		cellColor(); /*activates appropriate function*/
	});

	/*for default trailing function*/
	$('#trailer').click(function() {
		$('.cell').remove();
		defaultInput = parseInt(prompt('Please enter the number of desired grid blocks:'));
		if (defaultInput > 1000) {
			defaultInput = 1000;
		} 
		else if (defaultInput < 1) {
			defaultInput = 1;
		}
		gridFill(defaultInput);
		cellLight(); /*activates appropriate function*/
	});



});



/*Creates our grid by taking the input, calculating total grid size, and appending it to the original div*/
function gridFill(cellCount) {
	for (var i = 0; i < (cellCount * cellCount); i++) {
		$('<div/>', {
			'class': 'cell'
		}).appendTo('#grid');
	}
	/*figures out the dimensions needed for each square based on input*/
	var gridSize = 960 / cellCount;
	$('.cell').css({
		'width': gridSize,
		'height': gridSize
	}); /*adds css dimensions for square calculations*/
}

/*creates mouseover effect, adding a color when mouseenters and slowly fading to 0.5 opacity when it leaves*/
function cellColor() {
	$('.cell').mouseenter(function() {
		$(this).addClass('cellHover');
		$(this).mouseleave(function() {
			$(this).fadeTo('slow', 0.5);
		});
	});
}

/*same as function above, but the opacity goes to 0 when the mouse leaves instead*/
function cellLight() {
	$('.cell').mouseenter(function() {
		$(this).addClass('cellHover');
		$(this).mouseleave(function() {
			$(this).fadeTo('slow', 0); /*same but with 0 opacity*/
		});
	});
}