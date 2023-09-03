const input = $("#input_text");
const button = $("#btn");
const warning = $("#warning");

button.on("click", function(){
    if(input.value === ""){
        warning.text("*Поле обязательно для заполнения")
    }
    return

    if(input.value.length < 3){
        warning.text("*Поле должно содержать не менее 3-х символов")
    }
    return
    
    warning.text("")
    
})
