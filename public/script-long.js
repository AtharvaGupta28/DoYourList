let input_2=document.getElementsByName("chk");
for(var i=0;i<input_2.length;i++){
        input_2[i].addEventListener("change",function(event){
        printer(this);
    });
}
function printer(key){
    console.log(key);
    console.log(key.value);
    let msg=document.querySelector("span[value='"+key.value+"']");
    msg.classList.toggle("strike");
}