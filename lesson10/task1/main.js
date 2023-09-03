const number1 = $("#input1");
const number2 = $("#input2");
const block = $("#block")
const button = $("#btn")

button.on("click", function(){
  block.css(top, number1.value + "px");
  block.css(left, number2.value + "px");
});