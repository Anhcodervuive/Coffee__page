const topMenu = document.getElementById('ct-top-menu');
const toogleTopMenuIcon = document.getElementById('ct-toogle-top-menu-icon');

document.addEventListener('click' , (e) => {
    if(toogleTopMenuIcon.contains(e.target)){
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-top-menu-expanded');
    } else{
        // Click outside from the menu
        if(topMenu.classList.contains('ct-top-menu-expanded')){
            topMenu.classList.remove('ct-top-menu-expanded');
            topMenu.classList.add('hidden');
        }
    }
});