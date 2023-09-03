const input = $("#input");
const button = $("#btn");
const warning = $("#warning");

button.on("click", function(){

    let number = parseInt(input.value);

    if(isNaN(number)){
        warning.text("*Введите число");
        return
    }
    else{ 
        number = number ** 2;
        input.value = number;
        warning.text("");
    }
})
