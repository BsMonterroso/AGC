$(document).ready(main);

var contador =1;

funtion main(){
    $('.imgMenu').click(function)(){
        if(contador ==1){
            $('.van').animate({
                left:'0'
            });
            contador = 0;
        }else{
            $('.nav').animate({
                left: '-100%'
            });
        }
    }
}