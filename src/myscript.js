function insert(num) {
	$('#display').val($('#display').val() + num);
}
 function equal() {
 	$('#display').val(eval($('#display').val()));
}
function clear() {
	$('#display').val('');
}
function del() {
	result = $('#display').val();
	$('#display').val(result.substring(0, result.length ));
}
$("#clear").bind("click", function() {
    $("input[type=text], textarea").val("");
  });