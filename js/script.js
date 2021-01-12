$(document).ready(function(){
    $('.main-menu li').hover(function(){
        
        var indice = $(this).index();
        console.log(indice);

        if (indice == 3) {
            $('.drop-account').toggleClass('active');
        }
        
        if (indice == 5) {
            $('.drop-prodotti').toggleClass('active');
        }

        if (indice == 7) {
            $('.drop-azienda').toggleClass('active');
        }

        if (indice == 9) {
            $('.drop-aiuto').toggleClass('active');
        }

        if (indice == 11) {
            $('.drop-lingua').toggleClass('active');
        }
        

        
    })
});

function dropdown () {
    if (indice == 11) {
        $('.drop-lingua').toggleClass('active');
    }
}