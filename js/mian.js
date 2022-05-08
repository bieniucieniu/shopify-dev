
const dropdownMenu = document.querySelector('.dropdown-menu');

 document.addEventListener('click', (e) =>{
    const isDropdownButton = e.target.matches('.button, .button *');

    if(!isDropdownButton && e.target.closest('.dropdown') != null) return;

    if(isDropdownButton){
        dropdownMenu.classList.toggle('active');
    }else{
        dropdownMenu.classList.remove('active');
    }
})