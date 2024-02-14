// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items: 2, //numero de imagens que irão aparecer na tela 
//         loop: true, //ativa o loop nas imagens
//         margin: 10, //define um espaçamento em cada imagem
//         nav: true, //adiciona botões de navagação ao carrosel
//         navText: ["Anterior" , "Próximo"], //muda o texto dos botões de navegação
//         autoplay: true, //faz com que o carrosel funcione autmaticamente
//         autoplayTimeout: 1000, //define o tempo em milisegundos, nesse caso fica em 2 segundos
//         dots: true, //desabilita as "bolinhas" de navegação
//         autoplayHoverPause: true, //para o carrosel quando passa o mouse em cima da imagem
//         //slideBy: 2, //define quantas imagens serão puladas, por padrão é de 1 em 1
//         slideTransition: 'ease-in', //transição de imagens mais suaves
//         responsive: {
//             0: {
//                 items: 1
//             },
//             480: {
//                 items: 2
//             },

//             740: {
//                 items: 3
//             },
//             980: {
//                 items: 4
//             }
//         }
//     });
// });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2, //numero de imagens que irão aparecer na tela 
        loop: true, //ativa o loop nas imagens
        margin: 10, //define um espaçamento em cada imagem
        nav: true, //adiciona botões de navagação ao carrosel
        navText: ["Anterior" , "Próximo"], //muda o texto dos botões de navegação
        autoplay: true, //faz com que o carrosel funcione autmaticamente
        autoplayTimeout: 1000, //define o tempo em milisegundos, nesse caso fica em 2 segundos
        dots: true, //desabilita as "bolinhas" de navegação
        autoplayHoverPause: true, //para o carrosel quando passa o mouse em cima da imagem
        //slideBy: 2, //define quantas imagens serão puladas, por padrão é de 1 em 1
        slideTransition: 'ease-in', //transição de imagens mais suaves
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },

            740: {
                items: 3
            },
            980: {
                items: 4
            }
        }
    });
});