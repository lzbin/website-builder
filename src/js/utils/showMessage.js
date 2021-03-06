// Tip 提示
export default function showMessage(info, time) {
	if (typeof info !== 'string') {
		info = JSON.stringify(info);
	}
	var id = (function random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	})(1, 10000000);
	$('body').append(
		'<div id="msg' + id + '" class="showMessage">' + info + '</div>'
	);
	setTimeout(function() {
		$('#msg' + id).fadeOut(200, function () {
			$(this).remove();
		});
	}, time || 1500);
}
