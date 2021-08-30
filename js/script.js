navbar=document.querySelector('.navbar');
toggle_btn=document.querySelector('.btn-toggle');
header=document.querySelector('.bg-dark');

toggle_btn.addEventListener('click',()=>{

        if(navbar.style.display=="block"){
            navbar.style.display="none";
            header.style.height="40px";
        }else{
            navbar.style.display="block";
            header.style.height="274px";
        }
});