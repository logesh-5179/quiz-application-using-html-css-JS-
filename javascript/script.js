function val(choosen){
    const buttons=document.querySelectorAll("btn");
    buttons.forEach(button =>{
        button.style.backgroundColor="white";
    });
    if(choosen.id=='correct'){
        choosen.style.backgroundColor="green";
        return true;
    }
    else{
        choosen.style.backgroundColor="red";
        return false;  
    }
    
}