$(document).ready(function(){

    //applying datepicker here
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

    var states = ['Product 1', 'Sub-product', 'One More Product'];

    $('#product-select .typeahead').typeahead({
        hint: false,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: substringMatcher(states)
    });

    var accounts = ['Account 1', 'Sub-account', 'One More Account'];

    $('#changeAccount.typeahead').typeahead({
        hint: false,
        highlight: true,
        minLength: 1
    },
    {
        name: 'accounts',
        source: substringMatcher(accounts)
    });
    // the end of changes

    // change account and cancel button functionality
    $('.change-account').on('click', function(){
        $('#changeAccount').removeClass('hidden');
        $('.cancel-account-change').removeClass('hidden');
        $(this).addClass('hidden');
        $('.account-name').addClass('hidden');
    });

    $('.cancel-account-change').on('click', function(e){
        e.preventDefault();
        $('.change-account').removeClass('hidden');
        $('.account-name').removeClass('hidden');
        $('#changeAccount').addClass('hidden');
        $('#changeAccount').val('');
        $(this).addClass('hidden');
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