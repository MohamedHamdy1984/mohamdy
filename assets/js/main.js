$(document).on('click', '.projects-filter li', function(){
    $(this).addClass('active').siblings().removeClass('active');
})

$(document).ready(function () {
    $('.list').click(function () { 
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.img-box').show('1000');
        } else {
            $('.img-box').not('.'+value).hide('1000');
            $('.img-box').filter('.'+value).show('1000');
        }
    });
});
