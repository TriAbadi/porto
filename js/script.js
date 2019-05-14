// event pada saat link di klik

$('.page-scroll').on('click', function(e){

        // console.log('ok');
    //  ambil isi href
    var tujuan = $(this).attr('href');
        // console.log(href);
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
        // console.log(elemenTujuan.offset().top);
    // console.log($('body').scrollTop());

    // $('html,body').scrollTop(elemenTujuan.offset().top);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top-50},
        1000,'easeInOutExpo');

    e.preventDefault();        

});

// paralax

// about

$(window).on('load', function() {
    
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

});

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();


        // jumbotron

            $('.jumbotron img').css({
            'transform' : 'translate(0px, '+ wScroll/4 +'%)'
            // semakin banyak di / maka semakin lambat
    });

            $('.jumbotron h1').css({
            'transform' : 'translate(0px, '+ wScroll/2 +'%)'
            // semakin banyak di / maka semakin lambat
    });
            $('.jumbotron p').css({
            'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
            // semakin banyak di / maka semakin lambat
    });




        // portofolio

        // if ( wScroll > $('.portofolio').offset().top ) {
        //     console.log('ok');
        // } buat cek posisi lokasi portofolio

        if ( wScroll > $('.portofolio').offset().top -250) {
           
            $('.portofolio .thumbnail').each(function(i) {

                setTimeout(function() {
                    // console.log('ok');
                    $('.portofolio .thumbnail').eq(i).addClass('muncul');
                }, 300 * (i+1));
            });


            // $('.portofolio .thumbnail').addClass('muncul');
        }



});
