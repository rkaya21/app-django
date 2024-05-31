$(document).ready(function () {

    (function ($) {
        "use strict";

        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value);
        }, "doğru cevabı yazın -_-");

        // İletişim formunu doğrula
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2 // En az 2 karakter olmalı
                    },
                    subject: {
                        required: true,
                        minlength: 4 // En az 4 karakter olmalı
                    },
                    number: {
                        required: true,
                        minlength: 5 // En az 5 karakter olmalı
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20 // En az 20 karakter olmalı
                    }
                },
                messages: {
                    name: {
                        required: "adınızı girmelisiniz",
                        minlength: "adınız en az 2 karakter olmalıdır"
                    },
                    subject: {
                        required: "konu giriniz",
                        minlength: "konu en az 4 karakter olmalıdır"
                    },
                    number: {
                        required: "numaranızı girmelisiniz",
                        minlength: "numara en az 5 karakter olmalıdır"
                    },
                    email: {
                        required: "e-posta adresinizi girmelisiniz"
                    },
                    message: {
                        required: "mesajınızı yazmalısınız",
                        minlength: "mesajınız en az 20 karakter olmalıdır"
                    }
                },
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "/contact/contact_form",
                        success: function (response) {
                            console.log(response);
                            if (response.success) {
                                $('#contactForm :input').attr('disabled', 'disabled');
                                $('#contactForm').fadeTo("slow", 1, function () {
                                    $(this).find(':input').attr('disabled', 'disabled');
                                    $(this).find('label').css('cursor', 'default');
                                    $('#success').fadeIn();
                                    $('.modal').modal('hide');
                                    $('#success').modal('show');
                                });
                            } else {
                                $('#contactForm').fadeTo("slow", 1, function () {
                                    $('#error').fadeIn();
                                    $('.modal').modal('hide');
                                    $('#error').modal('show');
                                });
                            }
                        },
                        error: function () {
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $('#error').fadeIn();
                                $('.modal').modal('hide');
                                $('#error').modal('show');
                            });
                        }
                    });
                }
            });
        });

    })(jQuery);
});
