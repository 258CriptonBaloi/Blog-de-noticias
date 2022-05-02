$(document).ready(function(){
    //progress bar
    let containerA = document.getElementById('circleA');

    let circleA =  new ProgressBar.Circle(containerA,{

        color:'#55F',
        strokeWidth:8,
        duration: 1400,
        from:{ color: '#AAA'},
        to:{ color:'#55F'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value()* 7)

            circle.setText(value);
        }

    });

    let containerB = document.getElementById('circleB');

    let circleB =  new ProgressBar.Circle(containerB,{

        color:'#55F',
        strokeWidth:8,
        duration: 2100,
        from:{ color: '#AAA'},
        to:{ color:'#55F'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value()* 40)

            circle.setText(value);
        }

    });

    let containerC = document.getElementById('circleC');

    let circleC =  new ProgressBar.Circle(containerC,{

        color:'#55F',
        strokeWidth:8,
        duration: 2800,
        from:{ color: '#AAA'},
        to:{ color:'#55F'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value()* 60)

            circle.setText(value);
        }

    });

    let containerD = document.getElementById('circleD');

    let circleD =  new ProgressBar.Circle(containerD,{

        color:'#55F',
        strokeWidth:8,
        duration: 3500,
        from:{ color: '#AAA'},
        to:{ color:'#55F'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value()* 100)

            circle.setText(value);
        }

    });

    //iniciando o loader quando o usuario chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = 
        $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop ==0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    //parallax
    setTimeout(function(){
        $('#data-area').parallax({imageSrc: 'imagens/paralax1.jpg'});
    }, 250);

    //filtro por categoria
    $('.filter-btn').on('click', function(){

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'design-btn'){
            eachBoxes('design', boxes);

        }

    });

    function eachBoxes(type, boxes) {

        if(type == 'all'){
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow');
                } else{
                    $(this).fadeIn();
                }

            });
        }

    }

});