$(document).ready(function(){
    $('.main-menu li').hover(function(){
        
        $(this).find('.drop').toggleClass('active');

        if ($(this).index() == 7) {
        
            $('.frecciasu').toggleClass('display');
            $('.frecciagiu').toggleClass('none');
            
        }
        
    })
});




// $(document).ready(function(){
//     $('.main-menu li').hover(function(){
        
//         var indice = $(this).index();
//         console.log(indice);

//         if (indice == 3) {
//             $('.drop-account').toggleClass('active');
//         }
        
//         else if (indice == 4) {
//             $('.drop-prodotti').toggleClass('active');
//         }

//         else if (indice == 5) {
//             $('.drop-azienda').toggleClass('active');
//         }

//         else if (indice == 6) {
//             $('.drop-aiuto').toggleClass('active');
//         }

//         else if (indice == 7) {
//             $('.drop-lingua').toggleClass('active');
//             $('.frecciasu').toggleClass('display');
//             $('.frecciagiu').toggleClass('none');

//         }
        

//     })
// });

