
$('#form-faq').validate({
  rules: {
    emailfaq: {
      required: true,
      minlength: 5,
      maxlength: 75
    },
    messagefaq: {
      required: true,
      minlength: 10,
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    emailfaq: {
      required: "Укажите e-mail",
      minlength: jQuery.validator.format("Минимальная длинна почты {0} символов"),
      maxlength: jQuery.validator.format("Максимальная длинна почты {0} символов"),
      email: "Введите корректный email"
    },
    messagefaq: {
      required: "Введите Ваш вопрос",
      minlength: jQuery.validator.format("Минимальная длинна сообщения {0} символов"),
    }
  },
  submitHandler: function() {
    $('.modal-thanks').css('display', 'flex');
    // setTimeout(function() {
    //   $('.modal-thanks').css('display', 'none');
    // }, 3000);
    $('#modal-product-faq').fadeOut().delay(200);
    $('body').css('overflow', 'auto');
    $.ajax({
      type: 'POST',
      url: 'mail_faq.php',
      data: $('#form-faq').serialize(),
      success: function (responce) {
        $('#form-faq')[0].reset();
        console.log('Форма успешно отправлена');
      },
      error: function(responce) {
        console.error('error')
      }
    })
  }
});


// validator for one click

$('#form-oneclick').validate({
  rules: {
    emailoneclick: {
      required: true,
      minlength: 5,
      maxlength: 75
    },
    phoneoneclick: {
      required: true,
      minlength: 10,
      maxlength: 75
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    emailoneclick: {
      required: "Укажите e-mail",
      minlength: jQuery.validator.format("Минимальная длинна почты {0} символов"),
      maxlength: jQuery.validator.format("Максимальная длинна почты {0} символов"),
      email: "Введите корректный email"
    },
    phoneoneclick: {
      required: "Укажите телефон",
    }
  },
  submitHandler: function() {
    $('.modal-thanks').css('display', 'flex');
    // setTimeout(function() {
    //   $('.modal-thanks').css('display', 'none');
    // }, 3000);
    $('#modal-product-one-click').fadeOut().delay(200);
    $('body').css('overflow', 'auto');
    $.ajax({
      type: 'POST',
      url: 'mail_oneclick.php',
      data: $('#form-oneclick').serialize(),
      success: function (responce) {
        $('#form-oneclick')[0].reset();
        console.log('Форма успешно отправлена');
      },
      error: function(responce) {
        console.error('error')
      }
    })
  }
});


// mask input

$('input[type="tel"]').mask('+7 (999) 999-99-99');


let allowedRegex = /^[а-яА-Яa-zA-Z-.-@]+$/;
let allowedCharRegex = /[а-яА-Яa-zA-Z-.-@]/;

$('input').on('paste', function (e) {
    let newValue = e.originalEvent.clipboardData.getData('Text');
    if (!allowedRegex.test(newValue)) {
        e.stopPropagation();
        return false;
    }
});

$('input').keypress(function(e) {
    return allowedCharRegex.test(e.key);
});

let allowedRegexTextArea = /^[а-яА-Яa-zA-Z-"!;:,.?\s]+$/g;
let allowedCharRegexTextArea = /^[а-яА-Яa-zA-Z-"!;:,.?()\s]/;
$('textarea').on('paste', function (e) {
  let newValueTextArea = e.originalEvent.clipboardData.getData('Text');
  if (!allowedRegexTextArea.test(newValueTextArea)) {
      e.stopPropagation();
      return false;
  }
});

$('textarea').keypress(function(e) {
  return allowedCharRegexTextArea.test(e.key);
});

