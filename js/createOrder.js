$(document).ready(function(){
    // products
    var products = {}
    products.product1 = {
        name: $(".product1 .product-name").text(),
        description: $(".product1 .product-desc").text(),
        type: $(".product1 .product-type").text(),
        listPrice: $(".product1 .product-list-price").text(),
        orderPrice: $(".product1 .product-order-price").val(),
        quantity: $(".product1 .product-qty").val(),
        total: $(".product1 .product-total").text()
    };
    products.product2 = {
        name: $(".product2 .product-name").text(),
        description: $(".product2 .product-desc").text(),
        type: $(".product2 .product-type").text(),
        listPrice: $(".product2 .product-list-price").text(),
        orderPrice: $(".product2 .product-order-price").val(),
        quantity: $(".product2 .product-qty").val(),
        total: $(".product2 .product-total").text()
    };
    products.product3 = {
        name: $(".product3 .product-name").text(),
        description: $(".product3 .product-desc").text(),
        type: $(".product3 .product-type").text(),
        listPrice: $(".product3 .product-list-price").text(),
        orderPrice: $(".product3 .product-order-price").val(),
        quantity: $(".product3 .product-qty").val(),
        total: $(".product3 .product-total").text()
    };

    // selection sort
    var sortSelect = function (select) {
        $(select).html($(select).children('option').sort(function (x, y) {
            return $(x).val().toUpperCase() < $(y).val().toUpperCase() ? -1 : 1;
        }));

        $(select).get(0).selectedIndex = 0;
    }

    // applying select2 here 
    $("#changeAccount").select2();
    $("#add-product").select2({
        placeholder: "Start typing product's name",
        maximumSelectionSize: 1
    });

    // applying datepicker here
    var today = new Date();
    $('.input-group.date').datepicker("setDate", today);
    $('.input-group.date').datepicker('update');

    // additional options expanding
    // start of changes
    $('#additional-options').on('click', function (event) {
        $(this).parent().toggleClass("open");
    });

    // tbd, the issue is reproducing when clicking out of dropdown
    $('body').on('click', function (event) {
        if (!$('.dropdown').find(event.target).length > 0 && $('#additional-options').parent().hasClass('open')) {
            $('#additional-options').parent().toggleClass("open");
        }
    });
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
    $('#product-select .select2.select2-container').on('click', function(){
        $('.product-option-divider').addClass('hidden');
        $('.product-select-browse').addClass('hidden');
        $('.product-select-cancel').removeClass('hidden');
    });

    $('#add-product').on('change', function(){
        switch ($('#add-product').select2('data')[0].element.value) {
            case 'product1':
                $('#add-product').find('[value="product1"]').remove();
                $('.product1').removeClass('hidden');
                $("#add-product").select2("val", "");
                break;
            case 'product2':
                $('#add-product').find('[value="product2"]').remove();
                $('.product2').removeClass('hidden');
                $("#add-product").select2("val", "");
                break;
            case 'product3':
                $('#add-product').find('[value="product3"]').remove();
                $('.product3').removeClass('hidden');
                $("#add-product").select2("val", "");
                break;
        }
        $('.product-option-divider').removeClass('hidden');
        $('.product-select-browse').removeClass('hidden');
        $('.product-select-cancel').addClass('hidden');
        
    });

    $('#product-select .select2.select2-container').on('blur', function(){
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
        $(this).addClass('hidden');
    });

    // here dropdown functionality is applied

    $(".set-field input").click(function(event){
        $(this).prop("checked", !$(this).prop("checked"));
    });

    $('.set-field').click(function(event){
        //event.preventDefault();
        var check = $(this).find("input");
        // 'checking input here'
        if (check.is(':checked')) {
            check.prop('checked', false);
        } else {
            check.prop('checked', true);
        }
        switch ($(this).text()) {
            case ' Purchase Order Number':
            if ($('#order-number').parent().parent().hasClass('hidden')){
                $('#order-number').parent().parent().removeClass('hidden');
            } else {
                $('#order-number').parent().parent().addClass('hidden');
            }
            break;
            case ' Sales Referal':
            if ($('#sales-referal').parent().parent().hasClass('hidden')){
                $('#sales-referal').parent().parent().removeClass('hidden');
            } else {
                $('#sales-referal').parent().parent().addClass('hidden');
            }
            break;
            case ' Custom Field A':
            if ($('#custom-field-1').parent().parent().hasClass('hidden')){
                $('#custom-field-1').parent().parent().removeClass('hidden');
            } else {
                $('#custom-field-1').parent().parent().addClass('hidden');
            }
            break;
            case ' Custom Field B':
            if ($('#custom-field-2').parent().parent().hasClass('hidden')){
                $('#custom-field-2').parent().parent().removeClass('hidden');
            } else {
                $('#custom-field-2').parent().parent().addClass('hidden');
            }
            break;
            case ' Notes':
            if ($('#notes').parent().parent().hasClass('hidden')){
                $('#notes').parent().parent().removeClass('hidden');
            } else {
                $('#notes').parent().parent().addClass('hidden');
            }
            break;
        }
    });

    $(".order-table td:last-child span:last-child").click(function(event){
        event.preventDefault();
        $(this).parent().parent().addClass('hidden');
        var product = $(this).parent().parent().find('dt').text();
        switch (product) {
            case 'Product Name A':
            $('#add-product').append($("<option></option>").val('product1').html(product));
            sortSelect('#add-product');
            break;
            case 'Product Name B':
            $('#add-product').append($("<option></option>").val('product2').html(product));
            sortSelect('#add-product');
            break;
            case 'Product Name C':
            $('#add-product').append($("<option></option>").val('product3').html(product));
            sortSelect('#add-product');
            break;
        }

    });

    $(".product-order-price").on('focusout', function(){
        var currentPrice = Number($(this).val()) || '';
        var currentQuantity = Number($(this).parent().next().find('input').val()) || '';
        var verifyPrice = false, verifyQty = false;
        if (typeof currentPrice === "number") {
            verifyPrice = true;
        }
        if (typeof currentQuantity === "number") {
            verifyQty = true;
        }
        if(currentPrice && currentQuantity && verifyPrice && verifyQty) {
            return $(this).parent().prev().find('.product-list-price-value').text(currentPrice*currentQuantity);
        } else {
            return $(this).parent().prev().find('.product-list-price-value').text('N/A');
        }
    });

    $(".product-qty").on('focusout', function(){
        var currentQuantity = Number($(this).val()) || '';
        var currentPrice = Number($(this).parent().prev().find('input').val()) || '';
        var verifyPrice = false, verifyQty = false;
        if (typeof currentPrice === "number") {
            verifyPrice = true;
        }
        if (typeof currentQuantity === "number") {
            verifyQty = true;
        }
        if(currentPrice && currentQuantity && verifyPrice && verifyQty) {
            return $(this).parent().prev().prev().find('.product-list-price-value').text(currentPrice*currentQuantity);
        } else {
            return $(this).parent().prev().prev().find('.product-list-price-value').text('N/A');
        }
    });

    $('#product-1-popover').popover({
        trigger: 'hover',
        html: 'true',
        content: '<div class="product-1-popup">'+
        '<div>Parameter 1 is verified</div>'+
        '<div>Parameter 2 is verified</div>'+
        '<div>Parameter 3 is verified</div>'+
        '<div>Parameter 4 is verified</div>'+
        '<div>Parameter 5 is verified</div>'+
        '</div>',
        placement: 'left'
    });
    $('#product-1-popover').click(function() {
        $('#product-1-modal').modal('show');
    })
           

    $('#product-2-popover').popover({
        trigger: 'hover',
        html: 'true',
        content: '<div class="product-1-popup">'+
        '<div>Parameter 1 is verified</div>'+
        '<div>Parameter 2 is verified</div>'+
        '<div>Parameter 3 is verified</div>'+
        '<div>Parameter 4 is verified</div>'+
        '<div>Parameter 5 is verified</div>'+
        '</div>',
        placement: 'left'
    });

    $('#product-3-popover').popover({
        trigger: 'hover',
        html: 'true',
        content: '<div class="product-1-popup">'+
        '<div>Parameter 1 is verified</div>'+
        '<div>Parameter 2 is verified</div>'+
        '<div>Parameter 3 is verified</div>'+
        '<div>Parameter 4 is verified</div>'+
        '<div>Parameter 5 is verified</div>'+
        '</div>',
        placement: 'left'
    });

});