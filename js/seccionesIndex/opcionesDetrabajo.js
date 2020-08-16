 
    var opc1_1 = document.getElementById('opc1_1'),
        opc1_2 = document.getElementById('opc1_2'),
        opc1_3 = document.getElementById('opc1_3');


    var opcion_1 = document.getElementById('opcion_1'),
        opcion_2 = document.getElementById('opcion_2'),
        opcion_3 = document.getElementById('opcion_3');




function boton1(){
    
        opcion_1.classList.add('opcionSelecionado');
        opcion_2.classList.remove('opcionSelecionado');
        opcion_3.classList.remove('opcionSelecionado');


        opc1_1.classList.remove('desactivado');
        opc1_2.classList.add('desactivado');
        opc1_3.classList.add('desactivado');

};

function boton2(){

    opcion_1.classList.remove('opcionSelecionado');
    opcion_2.classList.add('opcionSelecionado');
    opcion_3.classList.remove('opcionSelecionado');

    opc1_1.classList.add('desactivado');
    opc1_3.classList.add('desactivado');
    opc1_2.classList.remove('desactivado');

};

function boton3(){

    opc1_1.classList.add('desactivado');
    opc1_2.classList.add('desactivado');
    opc1_3.classList.remove('desactivado');

    opcion_1.classList.remove('opcionSelecionado');
    opcion_2.classList.remove('opcionSelecionado');
    opcion_3.classList.add('opcionSelecionado');



};

opcion_1.addEventListener("click", boton1,true);
opcion_2.addEventListener("click", boton2,true);
opcion_3.addEventListener("click", boton3,true);