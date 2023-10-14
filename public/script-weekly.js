let input_1=document.getElementsByName("chk");
for(var i=0;i<input_1.length;i++){
        input_1[i].addEventListener("change",function(event){
        printer(this);
    });
}
function printer(key){
    console.log(key);
    console.log(key.value);
    let msg=document.querySelector("span[value='"+key.value+"']");
    msg.classList.toggle("strike");
}