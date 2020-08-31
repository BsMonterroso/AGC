$(document).ready(function(){
    function ocultar(){
        $('#ar_caja').fadeOut(200);
    };
    function mostrar(){
        $('#ar_caja').fadeIn(500);
    };
    ocultar();
    mostrar();
    $('#ar_btn1').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Water Intrusion:");
        $('#ar_descripcion').text('Time is critical when a water intrusion occurs, Accuracy are specialists in restoring properties with the highest standard protocol in the industry and minimizing costs for our customers');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn2').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Mold Remediation:");
        $('#ar_descripcion').text('At Accuracy we know how dangerous mold infection can be after a water instruction, mold can appear in 48 hours after water damage, our mold remediation experts are trained to safely remove mold.');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn3').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Fire/smoke:");
        $('#ar_descripcion').text('At Accuracy we use a specialized process that includes fire damage restoration and smoke damage cleaning. After the local authorities give us the green light we begin as quickly as possible with an assessment beyond the visible damage.');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn4').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Auto impact:");
        $('#ar_descripcion').text('We know how difficult it is after a car hits a structure, Accuracy has the experience to restore commercial or residential structures, our experts will be there as soon as you call us to evaluate the damage.');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn5').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Biohazard/Sewages");
        $('#ar_descripcion').text('Accuracy is ready to help clean up sewage and other hazardous materials. We provide cleaning services and our indoor environment experts will certify that your home or workplace is free of any bacteria.');
        $('#enlace').attr('href','Pega el link aqui');;
    });
});




