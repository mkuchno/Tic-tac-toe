$(document).ready(function(){

	var clicked = false;

	var click_counter = 0;

	var x = "photos/x.jpg";
	var o = "photos/o.jpg";
	var none = "photos/none.jpg";

	var p1_type = $("#p1_type").attr("src");
	var p2_type = $("#p2_type").attr("src");

	var p1_score = 0;
	var p2_score = 0;

	//show who has turn at start
	$("#p1_view").css("color", "yellow");

	$(".board").click(function(){

		//draw a circle or cross
		if($(this).attr("src") != x && $(this).attr("src") != o){

			click_counter++;

			if(!clicked){

				clicked = true;
				$(this).attr("src", x);

			}else{

				clicked = false;
				$(this).attr("src", o);
			}

			//each position in tic-tac-toe 3x3
			var t1 = $("#t1").attr("src");
			var t2 = $("#t2").attr("src");
			var t3 = $("#t3").attr("src");

			var t4 = $("#t4").attr("src");
			var t5 = $("#t5").attr("src");
			var t6 = $("#t6").attr("src");

			var t7 = $("#t7").attr("src");
			var t8 = $("#t8").attr("src");
			var t9 = $("#t9").attr("src");

			//win conditions
			if(
				//horizontal conditions
				(t1 == t2 && t1 == t3 && t1 != none) ||
				(t4 == t5 && t4 == t6 && t4 != none) ||
				(t7 == t8 && t7 == t9 && t7 != none) ||

				//vertical conditions
				(t1 == t4 && t1 == t7 && t1 != none) ||
				(t2 == t5 && t2 == t8 && t2 != none) ||
				(t3 == t6 && t3 == t9 && t3 != none) ||

				//diagonally conditions
				(t1 == t5 && t1 == t9 && t1 != none) ||
				(t3 == t5 && t3 == t7 && t3 != none)

				){

				click_counter = 0;

				var who;

				//check who win
				if(clicked) who = x;
				else who = o;

				if(p1_type == who){

					p1_score++;
					$("#p1_score").text(p1_score);

					$("#game_alert_text").text("Player one win!");
					$("#game_alert").attr("class", "alert alert-success alert-dismissible collapse");
					$("#game_alert").show();
				}

				if(p2_type == who){

					p2_score++;
					$("#p2_score").text(p2_score);

					$("#game_alert_text").text("Player two win!");
					$("#game_alert").attr("class", "alert alert-info alert-dismissible collapse");
					$("#game_alert").show();

				}

				//swap player type (x or o)
				var tmp = p1_type;

				p1_type = p2_type;
				$("#p1_type").attr("src", p1_type);

				p2_type = tmp;
				$("#p2_type").attr("src", p2_type);

				//clear board
				clicked = false;
				$(".board").attr("src", none);

			}

			//condition if no one win
			if(click_counter == 9){

				click_counter = 0;

				//swap player type (x or o)
				var tmp = p1_type;

				p1_type = p2_type;
				$("#p1_type").attr("src", p1_type);

				p2_type = tmp;
				$("#p2_type").attr("src", p2_type);

				//clear board
				clicked = false;
				$(".board").attr("src", none);

				$("#game_alert_text").text("Draw");
				$("#game_alert").attr("class", "alert alert-warning alert-dismissible collapse");
				$("#game_alert").show();
			}
		}

		//show who has turn
		if(!clicked){

			if(p1_type == x){

				$("#p1_view").css("color", "yellow");
				$("#p2_view").css("color", "black");

			}else{

				$("#p2_view").css("color", "yellow");
				$("#p1_view").css("color", "black");
			}

		}else{

			if(p2_type == o){

				$("#p2_view").css("color", "yellow");
				$("#p1_view").css("color", "black");

			}else{

				$("#p1_view").css("color", "yellow");
				$("#p2_view").css("color", "black");
			}
		}

	});
				
	//start the game from the beginning
	$("#reset").click(function(){

		click_counter = 0;

		clicked = false;
		$(".board").attr("src", none);

		//show who has turn
		if(p1_type == x){

			$("#p1_view").css("color", "yellow");
			$("#p2_view").css("color", "black");

		}else{

			$("#p2_view").css("color", "yellow");
			$("#p1_view").css("color", "black");
		}

	});

	//clear the results
	$("#score").click(function() {

		$("#p1_score").text("0");
		p1_score = 0;

		$("#p2_score").text("0");
		p2_score = 0;

	});

	//game alert close function
	$("#game_alert_close").click(function() {

		$("#game_alert").hide();
	});

});