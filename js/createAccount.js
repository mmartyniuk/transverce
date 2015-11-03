$(document).ready(function(){
    // enterprise form
    $("#currency").prop("disabled", true);
    $("#accountCategory").prop("disabled", true);
    $("#paymentTerm").prop("disabled", true);
    $("#billCycle").prop("disabled", true);
    $("#tax").prop("disabled", false);
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
    }, 3000)
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
    var ifFirstNameChangedInitially = false;
    var ifLastNameChangedInitially = false;
    var ifCompanyNameChangedInitially = false;
    var ifCorporateEmailChangedInitially = false;
    var ifCurrencyChangedInitially = false;
    var ifInvoiceChangedInitially = false;
    var ifAccountChangedInitially = false;
    var iExternalIDChangedInitially = false;
    var iAddressBillingChangedInitially = false;
    var ifcityBillingChangedInitially = false;
    var ifpostalCodeChangedInitially = false;
    var iAddressShippingChangedInitially = false;
    var ifcityShippingChangedInitially = false;
    var ifpostalCodeShippingChangedInitially = false;
    var iAddressServiceChangedInitially = false;
    var ifcityServiceChangedInitially = false;
    var ifpostalCodeServiceChangedInitially = false;

    $('#firstName').bind("focusout", handlerFirstName);
    function handlerFirstName(e) {
        if ($('#firstName').val()) {
            $('#firstName').unbind("focusout", handlerFirstName);
            ifFirstNameChangedInitially = true;
        }
    }
    $('#LastName').bind("focusout", handlerLastName);
    function handlerLastName(e) {
        if ($('#LastName').val()) {
            $('#LastName').unbind("focusout", handlerLastName);
            ifLastNameChangedInitially = true;
        }
    }
    $('#companyName').bind("focusout", handlerCompanyName);
    function handlerCompanyName(e) {
        if ($('#companyName').val()) {
            $('#companyName').unbind("focusout", handlerCompanyName);
            ifCompanyNameChangedInitially = true;
        }
    }
    $('#corporateEmail').bind("focusout", handlerEmail);
    function handlerEmail(e) {
        if ($('#corporateEmail').val()) {
            $('#corporateEmail').unbind("focusout", handlerEmail);
            ifCorporateEmailChangedInitially = true;
        }
    }
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
    $('#ExternalAccountID').bind("focusout", handlerExternalID);
    function handlerExternalID(e) {
        if ($('#ExternalAccountID').val()) {
            $('#ExternalAccountID').unbind("focusout", handlerExternalID);
            iExternalIDChangedInitially = true;
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
    $('#taxExempt').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $("#tax").prop("disabled", false);
            if ($("#tax").val()) {
                $("#tax").parent().addClass('success-container');
            }
        } else {
            $("#tax").prop("disabled", true);
            $("#tax").parent().removeClass('success-container');
        }
    });
    $('#companyName').on('focusout', function() {
        var $this = $(this);
        if ($this.val()) {
            $("#firstName").rules("add", {
                required: false,
            });
            $("#firstName").rules("remove", "notEqualName");
            $("#firstName").blur();
            $("#LastName").rules("add", {
                required: false,
            });
            $("#LastName").rules("remove", "notEqualName");
            $("#LastName").blur();
            $('#firstName').prop("disabled", true);
            $('#LastName').prop("disabled", true);
            $('#LastName').parent().removeClass('success-container');
            $('#LastName').parent().removeClass('icon-container');
            $('#firstName').parent().removeClass('success-container');
            $('#firstName').parent().removeClass('icon-container');
            $('#firstName').prev().css("opacity", "0.5");
            $('#LastName').prev().css("opacity", "0.5");
            $("#firstName").rules("add", {
                required: false,
            });
            $("#LastName").rules("add", {
                required: false,
            });
        } else {
            $('#firstName').prop("disabled", false);
            $('#LastName').prop("disabled", false);
            $("#firstName").rules("add", {
                notEqualName: {
                    param: '',
                    depends: function(element) {
                        return ifFirstNameChangedInitially;
                    }
                }
            });
            $("#LastName").rules("add", {
                notEqualName: {
                    param: '',
                    depends: function(element) {
                        return ifLastNameChangedInitially;
                    }
                }
            });
            $('#firstName').prev().css("opacity", "1");
            $('#LastName').prev().css("opacity", "1");
        }
    });
    $('#firstName').on('focusout', function() {
        var $this = $(this);
        if ($this.val()) {
            $("#companyName").rules("add", {
                required: false,
            });
            $("#companyName").rules("remove", "notEqualCompanyName");
            $("#companyName").blur();
            $('#companyName').prop("disabled", true);
            $('#companyName').parent().removeClass('success-container');
            $('#companyName').parent().removeClass('icon-container');
            $('#companyName').prev().css("opacity", "0.5");
        } else if ($('#LastName').val()) {
            $('#companyName').prop("disabled", true);
            $("#companyName").rules("remove", "notEqualCompanyName");
            $('#companyName').parent().removeClass('success-container');
            $('#companyName').parent().removeClass('icon-container');
            $('#companyName').prev().css("opacity", "0.5");
            $("#companyName").rules("add", {
                required: false,
            });
        } else {
            $('#companyName').prop("disabled", false);
            $('#companyName').prev().css("opacity", "1");
            $("#companyName").rules("add", {
                notEqualCompanyName: {
                    param: '',
                    depends: function(element) {
                        return ifCompanyNameChangedInitially;
                    }
                }
            });
        }
    });
    $('#LastName').on('focusout', function() {
        var $this = $(this);
        if ($this.val()) {
            $("#companyName").rules("add", {
                required: false,
            });
            $("#companyName").rules("remove", "notEqualCompanyName");
            $("#companyName").blur();
            $('#companyName').prop("disabled", true);
            $('#companyName').parent().removeClass('success-container');
            $('#companyName').parent().removeClass('icon-container');
            $('#companyName').prev().css("opacity", "0.5");
            $("#companyName").rules("add", {
                required: false,
            });
        } else if ($('#firstName').val()) {
            $('#companyName').prop("disabled", true);
            $('#companyName').parent().removeClass('success-container');
            $('#companyName').parent().removeClass('icon-container');
            $('#companyName').prev().css("opacity", "0.5");
            $("#companyName").rules("add", {
                required: false,
            });
            $("#companyName").rules("remove", "notEqualCompanyName");
        } else {
            $('#companyName').prop("disabled", false);
            $('#companyName').prev().css("opacity", "1");
            $("#companyName").rules("add", {
                notEqualCompanyName: {
                    param: '',
                    depends: function(element) {
                        return ifCompanyNameChangedInitially;
                    }
                }
            });
        }
    });
    // here is logic to add another block of fields
    // if user wants to add more than one address
    // also he can check 'same as billing' checkbox
    // in this case additional block will be hided
    // and pre-filled in future
    $('#showShippingEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
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
            if ($('#showBilling').is(':checked')) {
                $('#sameShippingEnterprise').parent().removeClass('hidden');
            }
        } else {
            $('#sameShippingEnterprise').parent().addClass('hidden');
            $('#shippingBlockEnterprise').addClass('hidden');
            $("#sameShippingEnterprise").prop('checked', false); 
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
    $('#showServiceEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
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
            if ($('#showBilling').is(':checked')) {
                $('#sameServiceEnterprise').parent().removeClass('hidden');
            }
        } else {
            $('#sameServiceEnterprise').parent().addClass('hidden');
            $('#serviceBlockEnterprise').addClass('hidden');
            $("#sameServiceEnterprise").prop('checked', false);
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

    $('#showBilling').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
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
        }
        if ($this.is(':checked') && $('#showShippingEnterprise').is(':checked')) {
            $('#sameShippingEnterprise').parent().removeClass('hidden');
        } else {
            $('#sameShippingEnterprise').parent().addClass('hidden');
        }
        if ($this.is(':checked') && $('#showServiceEnterprise').is(':checked')) {
            $('#sameServiceEnterprise').parent().removeClass('hidden');
        } else {
            $('#sameServiceEnterprise').parent().addClass('hidden');
        }
        if (!$this.is(':checked') && $('#showShippingEnterprise').is(':checked')) {
            $("#sameShippingEnterprise").prop('checked', false); 
            $('#shippingBlockEnterprise').removeClass('hidden');
        }
        if (!$this.is(':checked') && $('#showServiceEnterprise').is(':checked')) {
            $("#sameServiceEnterprise").prop('checked', false); 
            $('#serviceBlockEnterprise').removeClass('hidden');
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
            corporateEmail: {
                email: true,
                notEqualEmail: {
                    param: '',
                    depends: function(element) {
                        return ifCorporateEmailChangedInitially;
                    }
                }
            },
            firstName: {
                minlength: 3,
                maxlength: 20,
                notEqualName: {
                    param: '',
                    depends: function(element) {
                        return ifFirstNameChangedInitially;
                    }
                }
            },
            LastName: {
                minlength: 3,
                maxlength: 20,
                notEqualName: {
                    param: '',
                    depends: function(element) {
                        return ifLastNameChangedInitially;
                    }
                }
            },
            companyName: {
                notEqualCompanyName: {
                    param: '',
                    depends: function(element) {
                        return ifCompanyNameChangedInitially;
                    }
                }
            },
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
            ExternalAccountID: {
                notEqualExternalID: {
                    param: '',
                    depends: function(element) {
                        return iExternalIDChangedInitially;
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
                if(element.id == 'postalCodeBilling' || element.id == 'postalCodeService' || element.id == 'postalCodeShipping') {
                    $(element).parent().addClass('icon-container-postal');
                }else{
                    $(element).parent().addClass('icon-container');
                }
            }
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
            if ($(element).val() && !$(element).is("select")){
                $(element).parent().addClass('success-container');
                if(element.id == 'postalCodeBilling' || element.id == 'postalCodeService' || element.id == 'postalCodeShipping') {
                    $(element).parent().addClass('success-container-postal');
                }else{
                    $(element).parent().addClass('success-container');
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
            })
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault(event);
            if ($("#firstName").prop('disabled') && $("#LastName").prop('disabled')){
                    $("#companyName").rules("add", {
                        required: true,
                        messages: {
                            required: "Last name field is required"
                        }
                    });
                } else if ($("#companyName").prop('disabled')){
                    $("#firstName").rules("add", {
                        required: true,
                        messages: {
                            required: "First name field is required"
                        }
                    });
                    $("#LastName").rules("add", {
                        required: true,
                        messages: {
                            required: "Last name field is required"
                        }
                    });
                    $("#companyName").rules("add", {
                        required: false
                    });
                } else {
                    $("#firstName").rules("add", {
                        required: true,
                        messages: {
                            required: "First name field is required"
                        }
                    });
                    $("#LastName").rules("add", {
                        required: true,
                        messages: {
                            required: "Last name field is required"
                        }
                    });
                    $("#companyName").rules("add", {
                        required: true,
                        messages: {
                            required: "Company name field is required"
                        }
                    });
                }
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
                if (!$("#tax").val()) {
                    $("#tax").prop("disabled", true);
                }
                if ($("#firstName").val() || $("#LastName").val()) {
                    $("#companyName").prop("disabled", true);
                } else if ($("#companyName").val() ) {
                    $("#firstName").prop("disabled", true);
                    $("#LastName").prop("disabled", true);
                } else {
                    $("#companyName").prop("disabled", false);
                    $("#firstName").prop("disabled", false);
                    $("#LastName").prop("disabled", false);
                }
                $("#createSpin").css("display", "none");
                $("body").css("opacity", "1");
                $("#corporateEmail").rules("add", {
                    required: true,
                    messages: {
                        required: "Email is required"
                    }
                });
                
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

                $("#currency").rules("add", {
                    required: true,
                    messages: {
                        required: "Currency is required"
                    }
                });

                $("#ExternalAccountID").rules("add", {
                    required: true,
                    messages: {
                        required: "External Account ID is required"
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
            }, 3000)
        }
    });
});