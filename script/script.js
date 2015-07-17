$('.currentOption').on('click', function() {
    $('.customOptions').toggle();
});

$('.customOptions').on('click', 'li', function() {
    var choosenValue = $(this).data('value'),
        choosenText = $(this).text();
    $('select').val(choosenValue).prop('selected', true);
    $(".currentOption")
        .data('value', choosenValue)
        .find('span')
        .text(choosenText);
    $('.customOptions').hide();
});


$('.mobileNav').on('click', function() {
    $('.mob-lenguage').on('click', function() {
        $('.MobileMenuList').toggle();
    });
    $('.MobileMenuList').toggle();
});