$('#more-btn').on('click', function() {
    let divChildren = $('.gallery').children(':first').clone();
    let divGridChildren = $('.gallery-grid').children(':first').clone();
    console.log('click klack', divChildren);
    // if ( ($('.gallery')).is(':visible') || ($('.gallery-grid')).is(':visible')) {
    //     $('.gallery').hide('slow')
    //     $('.gallery-grid').hide('slow')
    //     $(this).html('Show')
    // } else {
    //     $('.gallery').show('slow');
    //     $('.gallery-grid').show('slow');
    //     $(this).html('Hide');
    // }
    $('.gallery').append(divChildren);
    $('.gallery-grid').append(divGridChildren);
    $('.gallery-grid').css('display', 'flex');
})