$(function(){
	var color = 'white';
	var colors = 'white green red blue yellow purple';

	$('#red').on('click', function() {
		color = 'red';
	});
	$('#blue').on('click', function() {
		color = 'blue';
	});
	$('#green').on('click', function() {
		color = 'green';
	});
	$('#yellow').on('click', function() {
		color = 'yellow';
	});
	$('#white').on('click', function() {
		color = 'white';
	});
	$('#rand').on('click', function(){
		color= '#'+Math.floor(Math.random()*16777216).toString(16);
		$('#rand span').css('background-color', color);
	});


	$('.box').on('click', function() {
		$(this).addClass(color);
		$(this).css('background-color', color);
	});

	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
		$(this).css('background-color', '');
	});

	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
		$('.box').css('background-color', '');
	});


	var isPressed = false;
	$('.box').on('mousedown', function(){
		isPressed = true;
	});
	$('.box').on('mouseup', function(){
		isPressed = false;
	});
	$('.box').on('mouseenter', function(){
		if(isPressed){
			$(this).addClass(color);
			$(this).css('background-color', color);
		}
	});
	


});