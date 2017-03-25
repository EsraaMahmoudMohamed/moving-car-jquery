$(document).ready(function(){
	 var y=0;

//move road 
	$('body').on('keydown',function(e){

	console.log("hi",e.keyCode);

	if(e.keyCode == 38)
	{
		$('body').css("background-position-y",y)
		y+=20;
	}

	if(e.keyCode == 40)
		{
			$('body').css("background-position-y",y)
			y-=10;
		}



	console.log(y);
	})// keydown

//-----------------------------------------------

$('.body').on('keyup',function(e){

})// keyup

//-------------------------------------------------









})// end of $(document).ready(function(){})