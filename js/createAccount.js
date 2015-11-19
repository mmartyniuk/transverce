$(document).ready(function(){
    // enterprise form
    $("#currency").prop("disabled", true);
    $("#accountCategory").prop("disabled", true);
    $("#paymentTerm").prop("disabled", true);
    $("#billCycle").prop("disabled", true);
    $("#spinnerAcc").css('display', 'block');
    $("#spinnerPay").css('display', 'block');
    $("#spinnerBill").css('display', 'block');
    $("#spinnerCurr").css('display', 'block');
    setTimeout(function(){
        $("#currency").prop("disabled", false);
        $("#accountCategory").prop("disabled", false);
        $("#paymentTerm").prop("disabled", false);
        $("#spinnerAcc").css('display', 'none');
        $("#spinnerPay").css('display', 'none');
        $("#spinnerBill").css('display', 'none');
        $("#spinnerCurr").css('display', 'none');
    }, 3000);
    var parents = [{name: 'Account 1', id: '22345', external: '6789'},{name: 'Account 2', id: '34567', external: '32890'}];
    // phone description logic
    $('.desc-remove').click(function(){
        var $this = $(this);
        // phone
        $this.parent().parent().addClass('hidden');
        var case1 = $('.phone1').hasClass('hidden');
        var case2 = $('.phone2').hasClass('hidden');
        var case3 = $('.phone3').hasClass('hidden');
        var case4 = $('.phone4').hasClass('hidden');
        if (!(case1 && case2 && case3) || !(case2 && case3 && case4) || !(case1 && case3 && case4) || !(case1 && case2 && case4)) {
            $(".addPhone").removeClass('hidden');
        }
        if ((case1 && case2 && case3) || (case2 && case3 && case4) || (case1 && case3 && case4) || (case1 && case2 && case4)) {
            $(".desc-remove").addClass('hidden');
        }
        var appendSelectedPhoneType = $this.parent().children('.input-container').children().val();
        if (appendSelectedPhoneType) {
            $('.phone-type1').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
            $('.phone-type2').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
            $('.phone-type3').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
            $('.phone-type4').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
        }
        
    });

    function formatData (parents) {
        var $data = $('<span>' + parents.name + '</span>' + '<span> ' + parents.id + '</span>' + '<span> ' + parents.external + '</span>');
        return $data;
    }

    // credit card register field
    $('#card-number').payment('formatCardNumber');
    $('#card-date').payment('formatCardExpiry');
    $('#card-cvv').payment('formatCardCVC');
    $('.addCard').on('click', function (e) {
        e.preventDefault();
        $('.card-apply').removeClass('hidden');
        $(this).parent().addClass('hidden');
    });

    $('.card-cancel').on('click', function (e) {
        if (!$('#credit-card-full').val()) {
            $('.card-apply').addClass('hidden');
            $('#credit-card-full').val("");
            $("#card-first-name").val("");
            $("#card-last-name").val("");
            $("#card-type").val("");
            $("#card-number").val("");
            $("#card-date").val("");
            $("#card-cvv").val("");
            $('.addCard').parent().removeClass('hidden');
        } else {
            $('.card-apply').addClass('hidden');
            $('#credit-card-full').parent().removeClass('hidden');
        }

    });

    // checking if card info is valid
    $('.card-submit').on('click', function () {
        var cardNumberValid = $.payment.validateCardNumber($('#card-number').val());
        var cardDateValid = $.payment.validateCardExpiry($('#card-date').payment('cardExpiryVal'));
        var cardCvvValid = $.payment.validateCardCVC($('#card-cvv').val());
        var maskedNumber = 'XXXX-XXXX-XXXX-' + $('#card-number').val().slice(-4);
        creditFormValid = cardNumberValid && cardDateValid && cardCvvValid && $('#card-first-name').val() && $('#card-last-name').val();
        if (creditFormValid) {
            $('.card-apply').addClass('hidden');
            $('#credit-card-full').parent().removeClass('hidden');
            $('#credit-card-full').val(maskedNumber);
        }
    });

    // click on credit card masked value will expand edit functionality
    $('#credit-card-full').on('click', function () {
        $(this).parent().addClass('hidden');
        $('.card-apply').removeClass('hidden');
    });

    $(".account-name-container").tooltip();

    // add additional fields logic, start of changes
    $('#additional-options').on('click', function (event) {
        $(this).parent().toggleClass("open");
    });

    $('body').on('click', function (event) {
        if ($('.dropdown').find(event.target).length <= 0 && $('#additional-options').parent().hasClass('open')) {
            $('#additional-options').parent().toggleClass("open");
        }
    });

    $(".set-value input").click(function(event){
        $(this).prop("checked", !$(this).prop("checked"));
    });

    $('.set-value').click(function(event){
        //event.preventDefault();
        var check = $(this).find("input");
        // 'checking input here'
        if (check.is(':checked')) {
            check.prop('checked', false);
        } else {
            check.prop('checked', true);
        }
        switch ($(this).text()) {
            case 'External ID':
            if ($('.external-id').hasClass('hidden')){
                $('.external-id').removeClass('hidden');
            } else {
                if ($('#ExternalAccountID').val()) {
                    $('#ExternalAccountID').val("");
                    $('#ExternalAccountID').focusout(); 
                }
                $('.external-id').addClass('hidden');
            }
            break;
            case 'Taxes':
            if ($('.taxes').hasClass('hidden')){
                $('.taxes').removeClass('hidden');
            } else {
                if ($('#tax').val()) {
                    $('#tax').val("");
                    $('#tax').focusout(); 
                }
                if (!$('#taxExempt').is(":checked")) {
                    $('#taxExempt').prop('checked', true);
                }
                $('.taxes').addClass('hidden');
            }
            break;
            case 'Email':
            if ($('.email-add').hasClass('hidden')){
                $('.email-add').removeClass('hidden');
            } else {
                if ($('#corporateEmail').val()) {
                    $('#corporateEmail').val("");
                    $('#corporateEmail').focus(); 
                    $('#corporateEmail').focusout(); 
                }
                $('.email-add').addClass('hidden');
            }
            break;
            case 'Phone':
            if ($('.phone-numbers').hasClass('hidden')){
                $('.phone-numbers').removeClass('hidden');
            } else {
                if (!$('.desc-remove').hasClass('hidden')) {
                    $('.desc-remove').addClass('hidden');
                }
                if (!$('.phone2').hasClass('hidden')) {
                    $('.phone2').addClass('hidden');
                }
                if (!$('.phone3').hasClass('hidden')) {
                    $('.phone3').addClass('hidden');
                }
                if (!$('.phone4').hasClass('hidden')) {
                    $('.phone4').addClass('hidden');
                }
                if ($('.addPhone').hasClass('hidden')) {
                    $('.addPhone').removeClass('hidden');
                }
                if ($('#phone1').val()) {
                    $('#phone1').val("");
                    $('#phone1').parent().removeClass('success-container');
                }
                if ($('#phone2').val()) {
                    $('#phone2').val("");
                    $('#phone2').parent().removeClass('success-container');
                }
                if ($('#phone3').val()) {
                    $('#phone3').val("");
                    $('#phone3').parent().removeClass('success-container');
                }
                if ($('#phone4').val()) {
                    $('#phone4').val("");
                    $('#phone4').parent().removeClass('success-container');
                }
                if (!$(".phone-type1 option[value='']").is(':selected')) {
                    $('.phone-type1').find('option').remove();
                    $(".phone-type1").append($("<option></option>").val('').html("Please select a value"));
                    $(".phone-type1").append($("<option></option>").val('Office').html("Office"));
                    $(".phone-type1").append($("<option></option>").val('Home').html("Home"));
                    $(".phone-type1").append($("<option></option>").val('Fax').html("Fax"));
                    $(".phone-type1").append($("<option></option>").val('Mobile').html("Mobile"));
                }
                if (!$(".phone-type2 option[value='']").is(':selected')) {
                    $('.phone-type2').find('option').remove();
                    $(".phone-type2").append($("<option></option>").val('').html("Please select a value"));
                    $(".phone-type2").append($("<option></option>").val('Office').html("Office"));
                    $(".phone-type2").append($("<option></option>").val('Home').html("Home"));
                    $(".phone-type2").append($("<option></option>").val('Fax').html("Fax"));
                    $(".phone-type2").append($("<option></option>").val('Mobile').html("Mobile"));
                }
                if (!$(".phone-type3 option[value='']").is(':selected')) {
                    $('.phone-type3').find('option').remove();
                    $(".phone-type3").append($("<option></option>").val('').html("Please select a value"));
                    $(".phone-type3").append($("<option></option>").val('Office').html("Office"));
                    $(".phone-type3").append($("<option></option>").val('Home').html("Home"));
                    $(".phone-type3").append($("<option></option>").val('Fax').html("Fax"));
                    $(".phone-type3").append($("<option></option>").val('Mobile').html("Mobile"));
                }
                if (!$(".phone-type4 option[value='']").is(':selected')) {
                    $('.phone-type4').find('option').remove();
                    $(".phone-type4").append($("<option></option>").val('').html("Please select a value"));
                    $(".phone-type4").append($("<option></option>").val('Office').html("Office"));
                    $(".phone-type4").append($("<option></option>").val('Home').html("Home"));
                    $(".phone-type4").append($("<option></option>").val('Fax').html("Fax"));
                    $(".phone-type4").append($("<option></option>").val('Mobile').html("Mobile"));
                }
                $('.phone-numbers').addClass('hidden');
            }
            break;
            case 'Custom Field 1':
            if ($('.custom-field-1').hasClass('hidden')){
                $('.custom-field-1').removeClass('hidden');
            } else {
                if ($('#field1').val()) {
                    $('#field1').val("");
                    $('#field1').focusout(); 
                }
                $('.custom-field-1').addClass('hidden');
            }
            break;
            case 'Custom Field 2':
            if ($('.custom-field-2').hasClass('hidden')){
                $('.custom-field-2').removeClass('hidden');
            } else {
                if ($('#field2').val()) {
                    $('#field2').val("");
                    $('#field2').focusout(); 
                }
                $('.custom-field-2').addClass('hidden');
            }
            break;
            case 'Payment Term':
            if ($('.payment-term').hasClass('hidden')){
                $('.payment-term').removeClass('hidden');
            } else {
                if ($('#paymentTerm').val()) {
                    $("#paymentTerm option[value='']").attr('selected', 'true');
                    $('#paymentTerm').focusout(); 
                }
                $('.payment-term').addClass('hidden');
            }
            break;
            case 'Authorize Auto-Payment':
            if ($('.authorize-auto-payment').hasClass('hidden')){
                $('.authorize-auto-payment').removeClass('hidden');
            } else {
                if ($('#autoPayment').is(":checked")) {
                    $('#autoPayment').prop('checked', false);
                }
                $('.authorize-auto-payment').addClass('hidden');
            }
            break;
            case 'Parent Account':
            if ($('.parent-account').hasClass('hidden')){
                $('.parent-account').removeClass('hidden');
                // autocomplete for parent account
                // with some additional overrides
                $("#parentAccount").select2({
                    data: parents,
                    templateSelection: formatData,
                    templateResult: formatData
                });
            } else {
                if ($('#parentAccount').val()) {
                    $('#parentAccount').val('');
                    $('#parentAccount').select2({data: null});
                }
                $('.parent-account').addClass('hidden');
            }
            break;
            case 'Account Segment':
            if ($('.account-segment').hasClass('hidden')){
                $('.account-segment').removeClass('hidden');
            } else {
                if ($('#accountSegment').val()) {
                    $("#accountSegment option[value='']").attr('selected', 'true');
                    $('#accountSegment').focusout(); 
                }
                $('.account-segment').addClass('hidden');
            }
            break;
        }
    });
    // add additional fields logic, end of changes

    var ifCurrencyChangedInitially = false;
    var ifInvoiceChangedInitially = false;
    var ifAccountChangedInitially = false;
    var iAddressBillingChangedInitially = false;
    var ifcityBillingChangedInitially = false;
    var ifpostalCodeChangedInitially = false;
    var iAddressShippingChangedInitially = false;
    var ifcityShippingChangedInitially = false;
    var ifpostalCodeShippingChangedInitially = false;
    var iAddressServiceChangedInitially = false;
    var ifcityServiceChangedInitially = false;
    var ifpostalCodeServiceChangedInitially = false;

    $('#currency').bind("change", handlerCurrency);
    function handlerCurrency(e) {
        if ($('#currency').val()) {
            $('#currency').unbind("change", handlerCurrency);
            ifCurrencyChangedInitially = true;
        }
    }
    $('#invoiceType').bind("change", handlerInvoice);
    function handlerInvoice(e) {
        if ($('#invoiceType').val()) {
            $('#invoiceType').unbind("change", handlerInvoice);
            ifInvoiceChangedInitially = true;
        }
    }
    $('#accountCategory').bind("change", handlerAccount);
    function handlerAccount(e) {
        if ($('#accountCategory').val()) {
            $('#accountCategory').unbind("change", handlerAccount);
            ifAccountChangedInitially = true;
        }
    }
    $('#address1Billing').bind("focusout", handlerAddressBilling);
    function handlerAddressBilling(e) {
        if ($('#address1Billing').val()) {
            $('#address1Billing').unbind("focusout", handlerAddressBilling);
            iAddressBillingChangedInitially = true;
        }
    }
    $('#cityBilling').bind("focusout", handlerCityBilling);
    function handlerCityBilling(e) {
        if ($('#cityBilling').val()) {
            $('#cityBilling').unbind("focusout", handlerCityBilling);
            ifcityBillingChangedInitially = true;
        }
    }
    $('#postalCodeBilling').bind("focusout", handlerPostalBilling);
    function handlerPostalBilling(e) {
        if ($('#postalCodeBilling').val()) {
            $('#postalCodeBilling').unbind("focusout", handlerPostalBilling);
            ifpostalCodeChangedInitially = true;
        }
    }
    $('#address1Service').bind("focusout", handlerAddressService);
    function handlerAddressService(e) {
        if ($('#address1Service').val()) {
            $('#address1Service').unbind("focusout", handlerAddressService);
            iAddressServiceChangedInitially = true;
        }
    }
    $('#cityService').bind("focusout", handlerCityService);
    function handlerCityService(e) {
        if ($('#cityService').val()) {
            $('#cityService').unbind("focusout", handlerCityService);
            ifcityServiceChangedInitially = true;
        }
    }
    $('#postalCodeService').bind("focusout", handlerPostalService);
    function handlerPostalService(e) {
        if ($('#postalCodeService').val()) {
            $('#postalCodeService').unbind("focusout", handlerPostalService);
            ifpostalCodeServiceChangedInitially = true;
        }
    }
    $('#address1Shipping').bind("focusout", handlerAddressShipping);
    function handlerAddressShipping(e) {
        if ($('#address1Shipping').val()) {
            $('#address1Shipping').unbind("focusout", handlerAddressShipping);
            iAddressShippingChangedInitially = true;
        }
    }
    $('#cityShipping').bind("focusout", handlerCityShipping);
    function handlerCityShipping(e) {
        if ($('#cityShipping').val()) {
            $('#cityShipping').unbind("focusout", handlerCityShipping);
            ifcityShippingChangedInitially = true;
        }
    }
    $('#postalCodeShipping').bind("focusout", handlerPostalShipping);
    function handlerPostalShipping(e) {
        if ($('#postalCodeShipping').val()) {
            $('#postalCodeShipping').unbind("focusout", handlerPostalShipping);
            ifpostalCodeShippingChangedInitially = true;
        }
    }

    var sortSelect = function (select) {

        $(select).html($(select).children('option').sort(function (y, x) {
            return $(x).val().toUpperCase() < $(y).val().toUpperCase() ? -1 : 1;
        }));

        $(select).get(0).selectedIndex = 0;
    };

    $('#companyName').on('focusout', function() {
        var $this = $(this);
        var companyExists = $("#AccountName option[value='Company']").length > 0;
        var namesExists = $("#AccountName option[value='Name']").length > 0;
        var placeholder = $("#AccountName option[value='']").length > 0;
        if ($this.val() && !companyExists) {
            $('#AccountName').append("<option value='Company'>"+$this.val()+"</option>");
            $('#AccountName').find('[value=""]').remove();
            $('#AccountName').prop("disabled", false);
        } else if ($this.val() && companyExists) {
            $('#AccountName').find('[value="Company"]').remove();
            $('#AccountName').append("<option value='Company'>"+$this.val()+"</option>");
            $('#AccountName').prop("disabled", false);
        } else if (!$this.val() && companyExists && !namesExists) {
            if (!placeholder) {
                $('#AccountName').append("<option value=''>Please fill (First Name and Last Name) or (Company Name)</option>");
            }
            $('#AccountName').find('[value="Company"]').remove();
            $('#companyName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", true);
        } else {
            $('#AccountName').find('[value="Company"]').remove();
            $('#companyName').parent().removeClass('success-container');
        }
        sortSelect('#AccountName');
    });
    $('#firstName').on('focusout', function() {
        var $this = $(this);
        var companyExists = $("#AccountName option[value='Company']").length > 0;
        var namesExists = $("#AccountName option[value='Name']").length > 0;
        var lastNameVal = $('#LastName').val();
        var placeholder = $("#AccountName option[value='']").length > 0;
        if ($this.val() && !namesExists && lastNameVal) {
            $('#AccountName').append("<option value='Name'>" + $this.val() + " " + lastNameVal + "</option>");
            $('#AccountName').find('[value=""]').remove();
            $('#AccountName').prop("disabled", false);
        } else if ($this.val() && companyExists) {
            $('#firstName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", false);
        } else if (!$this.val() && companyExists) {
            $('#AccountName').find('[value="Name"]').remove();
            $('#firstName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", false);
        } else if (!$this.val() && lastNameVal) {
            $('#AccountName').find('[value="Name"]').remove();
            if (!placeholder) {
                $('#AccountName').append("<option value=''>Please fill (First Name and Last Name) or (Company Name)</option>");
            }
            $('#firstName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", true);
        } else if ($this.val() && lastNameVal) {
            $('#AccountName').find('[value="Name"]').remove();
            $('#AccountName').append("<option value='Name'>"+ $this.val() + " " + lastNameVal +"</option>");
        } else {
            if (!placeholder) {
                $('#AccountName').append("<option value=''>Please fill (First Name and Last Name) or (Company Name)</option>");
            }
            $('#firstName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", true);
        }
        sortSelect('#AccountName');
    });
    $('#LastName').on('focusout', function() {
        var $this = $(this);
        var companyExists = $("#AccountName option[value='Company']").length > 0;
        var namesExists = $("#AccountName option[value='Name']").length > 0;
        var firstNameVal = $('#firstName').val();
        var placeholder = $("#AccountName option[value='']").length > 0;
        if ($this.val() && !namesExists && firstNameVal) {
            $('#AccountName').append("<option value='Name'>"+ firstNameVal + " " + $this.val() +"</option>");
            $('#AccountName').find('[value=""]').remove();
            $('#AccountName').prop("disabled", false);
        } else if ($this.val() && companyExists) {
            $('#LastName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", false);
        } else if (!$this.val() && companyExists) {
            $('#AccountName').find('[value="Name"]').remove();
            $('#LastName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", false);
        } else if (!$this.val() && firstNameVal) {
            $('#AccountName').find('[value="Name"]').remove();
            if (!placeholder) {
                $('#AccountName').append("<option value=''>Please fill (First Name and Last Name) or (Company Name)</option>");
            }
            $('#LastName').parent().removeClass('success-container');
            $('#AccountName').prop("disabled", true);
        } else if ($this.val() && firstNameVal && namesExists) {
            $('#AccountName').find('[value="Name"]').remove();
            $('#AccountName').append("<option value='Name'>"+ firstNameVal + " " + $this.val() +"</option>");
        } else {
            if (!placeholder) {
                $('#AccountName').append("<option value=''>Please fill (First Name and Last Name) or (Company Name)</option>");
            }
            $('#AccountName').prop("disabled", true);
            $('#LastName').parent().removeClass('success-container');
        }
        sortSelect('#AccountName');
    });

    // here is logic to add another block of fields
    // if user wants to add more than one address
    // also he can check 'same as billing' checkbox
    // in this case additional block will be hided
    // and pre-filled in future
    $('#showBilling').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            if (!$('#serviceBlockEnterprise').hasClass('hidden')) {
                $('#sameServiceEnterprise').parent().parent().removeClass('hidden');
            }
            if (!$('#shippingBlockEnterprise').hasClass('hidden')) {
                $('#sameShippingEnterprise').parent().parent().removeClass('hidden');
            }
            $('#BillingAdd').removeClass('hidden');
            $("#address1Billing").rules("add", {
                minlength: 5,
                maxlength: 20,
                notEqualAddress: {
                    param: '',
                    depends: function(element) {
                        return iAddressBillingChangedInitially;
                    }
                }
            });
            $("#cityBilling").rules("add", {
                minlength: 3,
                maxlength: 20,
                notEqualCity: {
                    param: '',
                    depends: function(element) {
                        return ifcityBillingChangedInitially;
                    }
                }
            });
            $("#postalCodeBilling").rules("add", {
                minlength: 2,
                maxlength: 20,
                number: true,
                notEqualPostal: {
                    param: '',
                    depends: function(element) {
                        return ifpostalCodeChangedInitially;
                    }
                }
            });
        } else {
            $('#BillingAdd').addClass('hidden');
            $("#countriesBilling").select2('val', 'US');
            $("#address1Billing").val("");
            $("#address2Billing").val("");
            $("#cityBilling").val("");
            if ($("#statesUS").hasClass('hidden')) {
                $("#statesUS").removeClass('hidden');
            }
            $("#statesUS").select2('val', 'NY');
            $("#postalCodeBilling").val("");
            $("#address1Billing").rules("remove", "minlength");
            $("#address1Billing").rules("remove", "maxlength");
            $("#address1Billing").rules("remove", "notEqualAddress");
            $("#cityBilling").rules("remove", "minlength");
            $("#cityBilling").rules("remove", "maxlength");
            $("#cityBilling").rules("remove", "notEqualCity");
            $("#postalCodeBilling").rules("remove", "minlength");
            $("#postalCodeBilling").rules("remove", "maxlength");
            $("#postalCodeBilling").rules("remove", "notEqualPostal");
            $("#postalCodeBilling").rules("remove", "number");
            $('#sameServiceEnterprise').parent().parent().addClass('hidden');
            $('#sameShippingEnterprise').parent().parent().addClass('hidden');
            if ($('#sameServiceEnterprise').is(":checked")) {
                $('#sameServiceEnterprise').prop('checked', false);
                $('#serviceBlockEnterprise').removeClass('hidden');
                $("#address1Service").rules("add", {
                    minlength: 5,
                    maxlength: 20,
                    notEqualAddress: {
                        param: '',
                        depends: function(element) {
                            return iAddressServiceChangedInitially;
                        }
                    }
                });
                $("#cityService").rules("add", {
                    minlength: 3,
                    maxlength: 20,
                    notEqualCity: {
                        param: '',
                        depends: function(element) {
                            return ifcityServiceChangedInitially;
                        }
                    }
                });
                $("#postalCodeService").rules("add", {
                    minlength: 2,
                    maxlength: 20,
                    number: true,
                    notEqualPostal: {
                        param: '',
                        depends: function(element) {
                            return ifpostalCodeServiceChangedInitially;
                        }
                    }
                });
            }
            if ($('#sameShippingEnterprise').is(":checked")) {
                $('#sameShippingEnterprise').prop('checked', false);
                $('#shippingBlockEnterprise').removeClass('hidden');
                $("#address1Shipping").rules("add", {
                    minlength: 5,
                    maxlength: 20,
                    notEqualAddress: {
                        param: '',
                        depends: function(element) {
                            return iAddressShippingChangedInitially;
                        }
                    }
                });
                $("#cityShipping").rules("add", {
                    minlength: 3,
                    maxlength: 20,
                    notEqualCity: {
                        param: '',
                        depends: function(element) {
                            return ifcityShippingChangedInitially;
                        }
                    }
                });
                $("#postalCodeShipping").rules("add", {
                    minlength: 2,
                    maxlength: 20,
                    number: true,
                    notEqualPostal: {
                        param: '',
                        depends: function(element) {
                            return ifpostalCodeShippingChangedInitially;
                        }
                    }
                });
            }
        }
    });
    $('#showService').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#serviceBlockEnterprise').removeClass('hidden');
            if (!$('#BillingAdd').hasClass('hidden')) {
                $('#sameServiceEnterprise').parent().parent().removeClass('hidden');
            }
            $("#address1Service").rules("add", {
                minlength: 5,
                maxlength: 20,
                notEqualAddress: {
                    param: '',
                    depends: function(element) {
                        return iAddressServiceChangedInitially;
                    }
                }
            });
            $("#cityService").rules("add", {
                minlength: 3,
                maxlength: 20,
                notEqualCity: {
                    param: '',
                    depends: function(element) {
                        return ifcityServiceChangedInitially;
                    }
                }
            });
            $("#postalCodeService").rules("add", {
                minlength: 2,
                maxlength: 20,
                number: true,
                notEqualPostal: {
                    param: '',
                    depends: function(element) {
                        return ifpostalCodeServiceChangedInitially;
                    }
                }
            });
        } else {
            $('#sameServiceEnterprise').parent().parent().addClass('hidden');
            $('#serviceBlockEnterprise').addClass('hidden');
            $("#countriesService").select2('val', 'US');
            $("#address1Service").val("");
            $("#address2Service").val("");
            $("#cityService").val("");
            if ($("#statesUSService").hasClass('hidden')) {
                $("#statesUSService").removeClass('hidden');
            }
            $("#statesUSService").select2('val', 'NY');
            $("#postalCodeService").val("");
            $("#address1Service").rules("remove", "minlength");
            $("#address1Service").rules("remove", "maxlength");
            $("#address1Service").rules("remove", "notEqualAddress");
            $("#cityService").rules("remove", "minlength");
            $("#cityService").rules("remove", "maxlength");
            $("#cityService").rules("remove", "notEqualCity");
            $("#postalCodeService").rules("remove", "minlength");
            $("#postalCodeService").rules("remove", "maxlength");
            $("#postalCodeService").rules("remove", "notEqualPostal");
            $("#postalCodeService").rules("remove", "number");
        }
    });
    $('#showShipping').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            if (!$('#BillingAdd').hasClass('hidden')) {
                $('#sameShippingEnterprise').parent().parent().removeClass('hidden');
            }
            $('#shippingBlockEnterprise').removeClass('hidden');
            $("#address1Shipping").rules("add", {
                minlength: 5,
                maxlength: 20,
                notEqualAddress: {
                    param: '',
                    depends: function(element) {
                        return iAddressShippingChangedInitially;
                    }
                }
            });
            $("#cityShipping").rules("add", {
                minlength: 3,
                maxlength: 20,
                notEqualCity: {
                    param: '',
                    depends: function(element) {
                        return ifcityShippingChangedInitially;
                    }
                }
            });
            $("#postalCodeShipping").rules("add", {
                minlength: 2,
                maxlength: 20,
                number: true,
                notEqualPostal: {
                    param: '',
                    depends: function(element) {
                        return ifpostalCodeShippingChangedInitially;
                    }
                }
            });
        } else {
            $('#sameShippingEnterprise').parent().parent().addClass('hidden');
            $('#shippingBlockEnterprise').addClass('hidden');
            $("#countriesShipping").select2('val', 'US');
            $("#address1Shipping").val("");
            $("#address2Shipping").val("");
            $("#cityShipping").val("");
            if ($("#statesUSShipping").hasClass('hidden')) {
                $("#statesUSShipping").removeClass('hidden');
            }
            $("#statesUSShipping").select2('val', 'NY');
            $("#postalCodeShipping").val("");
            $("#address1Shipping").rules("remove", "minlength");
            $("#address1Shipping").rules("remove", "maxlength");
            $("#address1Shipping").rules("remove", "notEqualAddress");
            $("#cityShipping").rules("remove", "minlength");
            $("#cityShipping").rules("remove", "maxlength");
            $("#cityShipping").rules("remove", "notEqualCity");
            $("#postalCodeShipping").rules("remove", "minlength");
            $("#postalCodeShipping").rules("remove", "maxlength");
            $("#postalCodeShipping").rules("remove", "notEqualPostal");
            $("#postalCodeShipping").rules("remove", "number");
        }
    });
    $('#sameServiceEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#serviceBlockEnterprise').addClass('hidden');
            $("#address1Service").rules("remove", "minlength");
            $("#address1Service").rules("remove", "maxlength");
            $("#address1Service").rules("remove", "notEqualAddress");
            $("#cityService").rules("remove", "minlength");
            $("#cityService").rules("remove", "maxlength");
            $("#cityService").rules("remove", "notEqualCity");
            $("#postalCodeService").rules("remove", "minlength");
            $("#postalCodeService").rules("remove", "maxlength");
            $("#postalCodeService").rules("remove", "notEqualPostal");
            $("#postalCodeService").rules("remove", "number");
        } else {
            $('#shippingBlockEnterprise').removeClass('hidden');
            $("#address1Service").rules("add", {
                minlength: 5,
                maxlength: 20,
                notEqualAddress: {
                    param: '',
                    depends: function(element) {
                        return iAddressServiceChangedInitially;
                    }
                }
            });
            $("#cityService").rules("add", {
                minlength: 3,
                maxlength: 20,
                notEqualCity: {
                    param: '',
                    depends: function(element) {
                        return ifcityServiceChangedInitially;
                    }
                }
            });
            $("#postalCodeService").rules("add", {
                minlength: 2,
                maxlength: 20,
                number: true,
                notEqualPostal: {
                    param: '',
                    depends: function(element) {
                        return ifpostalCodeServiceChangedInitially;
                    }
                }
            });
        }
    });

    $('#sameShippingEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#shippingBlockEnterprise').addClass('hidden');
            $("#address1Shipping").rules("remove", "minlength");
            $("#address1Shipping").rules("remove", "maxlength");
            $("#address1Shipping").rules("remove", "notEqualAddress");
            $("#cityShipping").rules("remove", "minlength");
            $("#cityShipping").rules("remove", "maxlength");
            $("#cityShipping").rules("remove", "notEqualCity");
            $("#postalCodeShipping").rules("remove", "minlength");
            $("#postalCodeShipping").rules("remove", "maxlength");
            $("#postalCodeShipping").rules("remove", "notEqualPostal");
            $("#postalCodeShipping").rules("remove", "number");
        } else {
            $('#shippingBlockEnterprise').removeClass('hidden');
            $("#address1Shipping").rules("add", {
                minlength: 5,
                maxlength: 20,
                notEqualAddress: {
                    param: '',
                    depends: function(element) {
                        return iAddressShippingChangedInitially;
                    }
                }
            });
            $("#cityShipping").rules("add", {
                minlength: 3,
                maxlength: 20,
                notEqualCity: {
                    param: '',
                    depends: function(element) {
                        return ifcityShippingChangedInitially;
                    }
                }
            });
            $("#postalCodeShipping").rules("add", {
                minlength: 2,
                maxlength: 20,
                number: true,
                notEqualPostal: {
                    param: '',
                    depends: function(element) {
                        return ifpostalCodeShippingChangedInitially;
                    }
                }
            });
        }
    });

    // showing additional phone number in case it is needed
    $('.addPhone').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var case1 = $('.phone1').hasClass('hidden');
        var case2 = $('.phone2').hasClass('hidden');
        var case3 = $('.phone3').hasClass('hidden');
        var case4 = $('.phone4').hasClass('hidden');
        
        if ((case2 && case3) || (case2 && case4) || (case2 && !case1 && !case3 && !case4)) {
            $('.phone2').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
        } else if (case3 && (!case1 && !case2)) {
            $('.phone3').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
        } else if (!case1 && !case2 && !case3) {
            $('.phone4').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.addClass('hidden');
        } else {
            $('.phone1').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
        }
        
    });

    //credit card
    /*$('#saveCard').click(function(e){
        e.preventDefault();
        var cardType = $('#card-type').val();
        var cardNum = $('#card-number').val().replace( /[0-9]{4}$/, '****' );
        var cardDate = $('#card-date').val();
        var cardCvv = $('#cvv').val();
        
        $('#card-type-copy').val(cardType).prop("disabled", true);
        $('#card-number-copy').val(cardNum).prop("disabled", true);
        $('#card-date-copy').val(cardDate).prop("disabled", true);
        $('#cvv-copy').val(cardCvv).prop("disabled", true);
        $('.card-values').removeClass('hidden');
        $('#card-form').modal('hide');
    });*/
    

    var previous1, previous2, previous3, previous4; // variables to store previous values from select
    //to prevent option lose

    $('.phone-type1').on('click', function(){
        previous1 = this.value;
    });
    $('.phone-type2').on('click', function(){
        previous2 = this.value;
    });
    $('.phone-type3').on('click', function(){
        previous3 = this.value;
    });
    $('.phone-type4').on('click', function(){
        previous4 = this.value;
    });

    $('.phone-type1').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type2 option[value='"+selected+"']").remove();
            $(".phone-type3 option[value='"+selected+"']").remove();
            $(".phone-type4 option[value='"+selected+"']").remove();
        }
        if (previous1){
            $(".phone-type2").append("<option value='"+previous1+"'>"+previous1+"</option>");
            $(".phone-type3").append("<option value='"+previous1+"'>"+previous1+"</option>");
            $(".phone-type4").append("<option value='"+previous1+"'>"+previous1+"</option>");
        }
    });
    $('.phone-type2').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type1 option[value='"+selected+"']").remove();
            $(".phone-type3 option[value='"+selected+"']").remove();
            $(".phone-type4 option[value='"+selected+"']").remove();
        }
        if (previous2){
            $(".phone-type1").append("<option value='"+previous2+"'>"+previous2+"</option>");
            $(".phone-type3").append("<option value='"+previous2+"'>"+previous2+"</option>");
            $(".phone-type4").append("<option value='"+previous2+"'>"+previous2+"</option>");
        }
    });
    $('.phone-type3').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type1 option[value='"+selected+"']").remove();
            $(".phone-type2 option[value='"+selected+"']").remove();
            $(".phone-type4 option[value='"+selected+"']").remove();
        }
        if (previous3){
            $(".phone-type1").append("<option value='"+previous3+"'>"+previous3+"</option>");
            $(".phone-type2").append("<option value='"+previous3+"'>"+previous3+"</option>");
            $(".phone-type4").append("<option value='"+previous3+"'>"+previous3+"</option>");
        }
    });
    $('.phone-type4').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type1 option[value='"+selected+"']").remove();
            $(".phone-type2 option[value='"+selected+"']").remove();
            $(".phone-type3 option[value='"+selected+"']").remove();
        }
        if (previous4){
            $(".phone-type1").append("<option value='"+previous4+"'>"+previous4+"</option>");
            $(".phone-type2").append("<option value='"+previous4+"'>"+previous4+"</option>");
            $(".phone-type3").append("<option value='"+previous4+"'>"+previous4+"</option>");
        }
    });
    // autocomplete countries and states
    $(".js-example-basic-single").select2();

    // temp remove of selection arrow
    // it doesn't match to default browser styles

    // select countries and states for USA
    $('#countriesBilling').on('change', function(){
        if ($("#select2-countriesBilling-container").text() !== 'United States') {
            $('#statesUS').parent().addClass('hidden');
            $('#statesUS').parent().prev().addClass('hidden');
            $("#postalCodeBilling").rules("add", {
                number: false
            });
        } else {
            $('#statesUS').parent().removeClass('hidden');
            $('#statesUS').parent().prev().removeClass('hidden');
            $("#postalCodeBilling").rules("add", {
                number: true
            });
        }
    });
    $('#countriesService').on('change', function(){
        if ($("#select2-countriesService-container").text() !== 'United States') {
            $('#statesUSService').parent().addClass('hidden');
            $('#statesUSService').parent().prev().addClass('hidden');
            $("#postalCodeService").rules("add", {
                number: false
            });
        } else {
            $('#statesUSService').parent().removeClass('hidden');
            $('#statesUSService').parent().prev().removeClass('hidden');
            $("#postalCodeService").rules("add", {
                number: true
            });
        }
    });
    $('#countriesShipping').on('change', function(){
        if ($("#select2-countriesShipping-container").text() !== 'United States') {
            $('#statesUSShipping').parent().addClass('hidden');
            $('#statesUSShipping').parent().prev().addClass('hidden');
            $("#postalCodeShipping").rules("add", {
                number: false
            });
        } else {
            $('#statesUSShipping').parent().removeClass('hidden');
            $('#statesUSShipping').parent().prev().removeClass('hidden');
            $("#postalCodeShipping").rules("add", {
                number: true
            });
        }
    });
    // Bill Cycle changes depending on currency selected value
    $('#currency').on('change', function(){
        if ($("#currency").val() === 'USD') {
            $("#billCycle").prop("disabled", false);
            $("#billCycle option").each(function() {
                $(this).remove();
            });
            $('#billCycle').append("<option value='USD'>Test Data For USD</option>");
        } else if ($("#currency").val() === 'EU') {
            $("#billCycle").prop("disabled", false);
            $("#billCycle option").each(function() {
                $(this).remove();
            });
            $('#billCycle').append("<option value='EU'>Test Data For EU</option>");
        } else {
            $("#billCycle option").each(function() {
                $(this).remove();
                $('#billCycle').append("<option value=''></option>");
                $("#billCycle").prop("disabled", true);
            });
        }
    });
    jQuery.validator.addMethod("notEqualName", function(value, element, param) {
        return value !== param;
    }, "Please enter at least 3 characters.");
    jQuery.validator.addMethod("notEqualCompanyName", function(value, element, param) {
        return value !== param;
    }, "Company Name field shouldn't be empty");
    jQuery.validator.addMethod("notEqualEmail", function(value, element, param) {
        return value !== param;
    }, "Please enter a valid email address.");
    jQuery.validator.addMethod("notSelect", function(value, element, param) {
        return value !== param;
    }, "Please select a value");
    jQuery.validator.addMethod("notEqualExternalID", function(value, element, param) {
        return value !== param;
    }, "External Account ID field shouldn't be empty");
    jQuery.validator.addMethod("notEqualAddress", function(value, element, param) {
        return value !== param;
    }, "Address field shouldn't be empty");
    jQuery.validator.addMethod("notEqualCity", function(value, element, param) {
        return value !== param;
    }, "City field shouldn't be empty");
    jQuery.validator.addMethod("notEqualPostal", function(value, element, param) {
        return value !== param;
    }, "Please fill in a value");
    
    $("#enterprise").validate({
        onfocusout: function(element) {
            this.element(element);
        },
        focusCleanup: false,
        onkeyup: false,
        rules: {
            currency: {
                notSelect: {
                    param: '',
                    depends: function(element) {
                        return ifCurrencyChangedInitially;
                    }
                }
            },
            invoiceType: {
                notSelect: {
                    param: '',
                    depends: function(element) {
                        return ifInvoiceChangedInitially;
                    }
                }
            },
            accountCategory: {
                notSelect: {
                    param: '',
                    depends: function(element) {
                        return ifAccountChangedInitially;
                    }
                }
            },
            address1Billing: {
                minlength: 5,
                maxlength: 20,
                notEqualAddress: {
                    param: '',
                    depends: function(element) {
                        return iAddressBillingChangedInitially;
                    }
                }
            },
            cityBilling: {
                minlength: 3,
                maxlength: 20,
                notEqualCity: {
                    param: '',
                    depends: function(element) {
                        return ifcityBillingChangedInitially;
                    }
                }
            },
            postalCodeBilling: {
                minlength: 2,
                maxlength: 20,
                number: true,
                notEqualPostal: {
                    param: '',
                    depends: function(element) {
                        return ifpostalCodeChangedInitially;
                    }
                }
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
            if(!$(element).is("select")) {
                $(element).parent().removeClass('success-container');
                $(element).parent().removeClass('success-container-postal');
                if(element.id == 'postalCodeBilling' || element.id == 'postalCodeService' || element.id == 'postalCodeShipping') {
                    $(element).parent().addClass('icon-container-postal');
                }else{
                    $(element).parent().addClass('icon-container');
                }
            }
        },
        unhighlight: function(element) {
            if ($(element).closest('.form-group').hasClass('has-error')) {
                $(element).closest('.form-group').removeClass('has-error');
                if ($(element).val() && !$(element).is("select")){
                    $(element).parent().addClass('success-container');
                    if(element.id == 'postalCodeBilling' || element.id == 'postalCodeService' || element.id == 'postalCodeShipping') {
                        $(element).parent().addClass('success-container-postal');
                    }else{
                        if (element.id == 'corporateEmail') {
                            $(element).parent().addClass('success-container');
                        }
                    }
                } else {
                    $(element).parent().removeClass('success-container');
                    $(element).parent().removeClass('success-container-postal');
                    $(element).parent().removeClass('icon-container-postal');
                    $(element).parent().removeClass('icon-container');
                }
            }
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(!$(element).is("select")) {
            element.focus(function () {
                error.insertAfter(element.parent());
                error.removeClass('hidden');
            }).blur(function(){
                error.addClass('hidden');
            });
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault(event);
            $("#enterprise :input").prop("disabled", true);
            $("#enterprise :checkbox").prop("disabled", true);
            $("#createSpin").css("display", "block");
            $("body").css("opacity", "0.7");
            
            setTimeout(function(){
            // adding required fields logic after click on submit button
                $("#enterprise :input").prop("disabled", false);
                $("#enterprise :checkbox").prop("disabled", false);

                if (!$("#billCycle").val()) {
                    $("#billCycle").prop("disabled", true);
                }
                $("#createSpin").css("display", "none");
                $("body").css("opacity", "1");
                
                $("#billCycle").rules("add", {
                    required: true,
                    messages: {
                        required: "Please select an item"
                    }
                });
                $("#invoiceType").rules("add", {
                    required: true,
                    messages: {
                        required: "Please select an item"
                    }
                });
                $("#accountCategory").rules("add", {
                    required: true,
                    messages: {
                        required: "Please select an item"
                    }
                });
                if ($("#showBilling").is(':checked')) {
                    $("#address1Billing").rules("add", {
                        required: true,
                        messages: {
                            required: "Address field is required"
                        }
                    });
                    $("#cityBilling").rules("add", {
                        required: true,
                        messages: {
                            required: "City field is required"
                        }
                    });
                    $("#postalCodeBilling").rules("add", {
                        required: true,
                        messages: {
                            required: "Postal Code is required"
                        }
                    });
                } else {
                    $("#address1Billing").rules("remove", "required");
                    $("#cityBilling").rules("remove", "required");
                    $("#postalCodeBilling").rules("remove", "required");
                }
                if ($("#showShippingEnterprise").is(':checked') && !$("#sameShippingEnterprise").is(':checked')) {
                    $("#address1Shipping").rules("add", {
                        required: true,
                        messages: {
                            required: "Address field is required"
                        }
                    });
                    $("#cityShipping").rules("add", {
                        required: true,
                        messages: {
                            required: "City field is required"
                        }
                    });
                    $("#postalCodeShipping").rules("add", {
                        required: true,
                        messages: {
                            required: "Postal Code is required"
                        }
                    });
                } else {
                    $("#address1Shipping").rules("remove", "required");
                    $("#cityShipping").rules("remove", "required");
                    $("#postalCodeShipping").rules("remove", "required");
                }
                if ($("#showServiceEnterprise").is(':checked') && !$("#sameServiceEnterprise").is(':checked')) {
                    $("#address1Service").rules("add", {
                        required: true,
                        messages: {
                            required: "Address field is required"
                        }
                    });
                    $("#cityService").rules("add", {
                        required: true,
                        messages: {
                            required: "City field is required"
                        }
                    });

                    $("#postalCodeService").rules("add", {
                        required: true,
                        messages: {
                            required: "Postal Code is required"
                        }
                    });
                } else {
                    $("#address1Service").rules("remove", "required");
                    $("#cityService").rules("remove", "required");
                    $("#postalCodeService").rules("remove", "required");
                }

                $("#AccountName").rules("add", {
                    required: true,
                    messages: {
                        required: "Account Name is required field"
                    }
                });
                $("#currency").rules("add", {
                    required: true,
                    messages: {
                        required: "Currency is required"
                    }
                });

                if ($("#enterprise").valid()){
                    // here validation from backend should be applied
                    $("#errormessages").parent().removeClass('hidden');
                    $('html, body').animate({
                        scrollTop: $("#errormessages").offset().top + (-40)
                    }, 100);
                    //form.submit();
                } else {
                    // here added behaviors for temporary removal of 'required' errors
                    // this should be done after click on related field
                    $('html, body').animate({
                        scrollTop: $(".has-error:first").offset().top + (-40)
                    }, 100);
                }
            }, 3000);
        }
    });
});