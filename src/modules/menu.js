const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const hundleMenu = () =>  {
        menu.classList.toggle('active-menu');        
    };

    menuBtn.addEventListener('click', hundleMenu);
    

    menu.addEventListener('click', (e) => {       
        if (e.target.tagName === 'A') {
            hundleMenu(e.target.toggle);
        }
    });
}

export default menu;