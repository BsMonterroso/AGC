var botonMenu = document.getElementById('botonMenu'),
    botonMenu2 = document.getElementById('botonMenu2'),
    botonCerrar = document.getElementById('imgMenuCerrar'),
    menuResponsive = document.getElementById('rm_navEmpresa_r');



    function activarMenu(){
    
        menuResponsive.classList.add('activarMenuResponsive');
    };

    function desactivaMenu(){
    
        menuResponsive.classList.remove('activarMenuResponsive');
    };


    botonMenu.addEventListener("click", activarMenu,true);
    botonCerrar.addEventListener("click", desactivaMenu,true);
    botonMenu2.addEventListener("click", desactivaMenu,true);