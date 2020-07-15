$(function() {
	var data = [0, 200, 250, 630, 77, 55, 0, 340, 8];

	for (var i = 1; i <= data.length; i++) {
		var ready1 = "#num" + i;
		var ready2 = "#bar" + i
		$(ready1).text(data[i]);
		$(ready2).text(data[i]);
		count();
	}


	$(".col-sm-3 .btn").click(function(event) {
		console.log(event.target.id);
		alert("非常感谢您的投票!");
		var num = event.target.id.replace("b", "");
		console.log(num);
		var a = "#num" + num;
		data[num]++;
		$(a).text(data[num]);
		var b = "#bar" + num;
		$(b).text(data[num]);
		count();
	});


	//计算投票比例
	function count() {
		for (var i = 1; i <= data.length; i++) {
			var perent = parseFloat(data[i] * 0.1);
			var ready2 = "#bar" + i
			console.log(perent + '%');
			$(ready2).css("width", perent + '%');
		}
	}



});
