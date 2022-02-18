function insert(num) {
  $("#display").val($("#display").val() + num);
}
function equal() {
  $("#display").val(eval($("#display").val()));
}
function clear() {
  $("#display").val("");
}


$("#clear").bind("click", function () {
  $("input[type=text], textarea").val("");
});
