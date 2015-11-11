$(document).ready(function(){

    // applying select2 here 
    $(".js-example-basic-single").select2();

    // applying datepicker here
    var today = new Date();
    $('.input-group.date').datepicker("setDate", today);
    $('.input-group.date').datepicker('update');

    // typeahead for product input (#product-select)
    // the start of changes
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            matches = [];
            substrRegex = new RegExp(q, 'i');
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            cb(matches);
        };
    };

    // the end of changes
    // setting accounts value
    /*$('.tt-dataset-accounts .tt-highlight').click(function(){
        $('.account-name').val() = $('#changeAccount').val();
        $('.change-account').removeClass('hidden');
        
        $('#changeAccount').addClass('hidden');
        $(this).parent().parent().parent().parent().addClass('hidden');
    })*/

    // additional options expanding
    // start of changes
    $('#additional-options').on('click', function (event) {
        $(this).parent().toggleClass("open");
    });

    // tbd, the issue is reproducing when clicking out of dropdown
    /*$('body').on('click', function (event) {
        if (!$('.additional-options-expanded').children().is(event.target)) {
            console.log(event.target)
            $('#additional-options').parent().toggleClass("open");
        }
    });*/
    // end of changes

    // change account and cancel button functionality
    $('.change-account').on('click', function(e){
        e.preventDefault();
        $('#changeAccount').parent().removeClass('hidden');
        $('.cancel-account-change').removeClass('hidden');
        $(this).addClass('hidden');
        $('.account-name').addClass('hidden');
    });

    $('.cancel-account-change').on('click', function(e){
        e.preventDefault();
        $('.change-account').removeClass('hidden');
        $('.account-name').removeClass('hidden');
        $('#changeAccount').parent().addClass('hidden');
        $(this).addClass('hidden');
    });

    $('#changeAccount').on('change', function(e){
        $('.account-name').text($('#changeAccount').select2('data')[0].text);
        if ($('#changeAccount').val() === "account1") {
            $('#account-address').text('620 Congress avenue');
            $('#account-address-general').text('Austin, TX 78071 USA');
        } else if ($('#changeAccount').val() === "account2") {
            $('#account-address').text('Street 250 Marriott Driv');
            $('#account-address-general').text('Tallahassee, FL 32301 USA');
        } else {
            $('#account-address').text('120 E 87th Street');
            $('#account-address-general').text('New York , 10128 USA');
        }
        $('.change-account').removeClass('hidden');
        $('.account-name').removeClass('hidden');
        $('#changeAccount').parent().addClass('hidden');
        $('.cancel-account-change').addClass('hidden');
    });

    // browse and cancel button block
    $('#product-select .typeahead').on('focus', function(){
        $('.product-option-divider').addClass('hidden');
        $('.product-select-browse').addClass('hidden');
        $('.product-select-cancel').removeClass('hidden');
    });

    $('#product-select .typeahead').on('blur', function(){
        if (!$(this).val()) {
            $('.product-option-divider').removeClass('hidden');
            $('.product-select-browse').removeClass('hidden');
            $('.product-select-cancel').addClass('hidden');
        }
    });
    $('.product-select-cancel').on('click', function(e){
        e.preventDefault();
        $('.product-option-divider').removeClass('hidden');
        $('.product-select-browse').removeClass('hidden');
        $('#product-select .typeahead').val('');
        $(this).addClass('hidden');
    });

    // here dropdown functionality is applied

    $('.set-number-field').on('click', function(e){
        e.preventDefault();
        var childGlyph = $(this).find("i");
        if (childGlyph.hasClass('glyphicon-unchecked')) {
            childGlyph.removeClass('glyphicon-unchecked');
            childGlyph.addClass('glyphicon-check');
            $('#order-number').parent().parent().removeClass('hidden');
        } else {
            childGlyph.addClass('glyphicon-unchecked');
            childGlyph.removeClass('glyphicon-check');
            $('#order-number').parent().parent().addClass('hidden');
        }
    });

    $('.set-referal').on('click', function(e){
        e.preventDefault();
        var childGlyph = $(this).find("i");
        if (childGlyph.hasClass('glyphicon-unchecked')) {
            childGlyph.removeClass('glyphicon-unchecked');
            childGlyph.addClass('glyphicon-check');
            $('#sales-referal').parent().parent().removeClass('hidden');
        } else {
            childGlyph.addClass('glyphicon-unchecked');
            childGlyph.removeClass('glyphicon-check');
            $('#sales-referal').parent().parent().addClass('hidden');
        }
    });

    $('.set-custom-field-1').on('click', function(e){
        e.preventDefault();
        var childGlyph = $(this).find("i");
        if (childGlyph.hasClass('glyphicon-unchecked')) {
            childGlyph.removeClass('glyphicon-unchecked');
            childGlyph.addClass('glyphicon-check');
            $('#custom-field-1').parent().parent().removeClass('hidden');
        } else {
            childGlyph.addClass('glyphicon-unchecked');
            childGlyph.removeClass('glyphicon-check');
            $('#custom-field-1').parent().parent().addClass('hidden');
        }
    });

    $('.set-custom-field-2').on('click', function(e){
        e.preventDefault();
        var childGlyph = $(this).find("i");
        if (childGlyph.hasClass('glyphicon-unchecked')) {
            childGlyph.removeClass('glyphicon-unchecked');
            childGlyph.addClass('glyphicon-check');
            $('#custom-field-2').parent().parent().removeClass('hidden');
        } else {
            childGlyph.addClass('glyphicon-unchecked');
            childGlyph.removeClass('glyphicon-check');
            $('#custom-field-2').parent().parent().addClass('hidden');
        }
    });

    $('.set-notes').on('click', function(e){
        e.preventDefault();
        var childGlyph = $(this).find("i");
        if (childGlyph.hasClass('glyphicon-unchecked')) {
            childGlyph.removeClass('glyphicon-unchecked');
            childGlyph.addClass('glyphicon-check');
            $('#notes').parent().parent().removeClass('hidden');
        } else {
            childGlyph.addClass('glyphicon-unchecked');
            childGlyph.removeClass('glyphicon-check');
            $('#notes').parent().parent().addClass('hidden');
        }
    });

    
});