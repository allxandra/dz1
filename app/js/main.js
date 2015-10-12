    // Semicolon (;) to ensure closing of earlier scripting
    // Encapsulation
    // $ is assigned to jQuery
    ;(function($) {

         // DOM Ready
        $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('#popup_addproject').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('.popup').bPopup({
                    closeClass:'popup-close'
                });

            });

        });

    })(jQuery);

// Загрузка изображения
$('.form-input-file-origin').on('change', function(){ // по событию change инпут файла
    
    var
        $this = $(this),
        val = $this.val(); // берем value у инпут файла (путь загруженого файла)
    
    //ч то бы отрезать /fakepath/ (это добавляет сам браузер)
    
    var 
        regexp = /c:\\fakepath\\/gmi, //регулярное выражение для поиска
        pureVal = val.replace(regexp, ''); // заменяем то что нашли в строке - на пустоту
    
    $('.form-input-fake').text(pureVal); // вставляем в блок с текстом имя файла

});

//Placeholder
var fixPlaceholder = (function(){
    $('input[placeholder], textarea[placeholder]').placeholder();
})();


// Модуль валидации
var validation = (function (){

    var init = function(){
                console.log('Инициализация модуля validation');
                _setUpListners();
            },
            validateForm = function (form) { // Проверяет, чтобы все поля формы были не пустыми. Если пустые - вызывает тултипы
          console.log('Проверяем форму');

          var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
              valid = true;

          $.each(elements, function(index, val) {
            var element = $(val),
                val = element.val(),
                pos = element.attr('qtip-position');

            if(val.length === 0){
              element.addClass('has-error');
              _createQtip(element, pos);
              valid = false;
            }

          }); // each

          return valid;
      },
            _setUpListners = function () { // Прослушивает все события
          $('popup').on('keydown', '.has-error', _removeError); // удаляем красную обводку у элементов форм
          $('popup').on('reset', _clearForm); // при сбросе формы удаляем также: тултипы, обводку, сообщение от сервера
        },
        _removeError = function() { // Убирает красную обводку у элементов форм
          console.log('Красная обводка у элементов форм удалена');

          $(this).removeClass('has-error');
        },
        _clearForm = function(form) { // Очищает форму
          console.log('Очищаем форму');

          var form = $(this);
          form.find('.input, .textarea').trigger('hideTooltip'); // удаляем тултипы
          form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку
          form.find('.error-mes, success-mes').text('').hide(); // очищаем и прячем сообщения с сервера
        },
        _createQtip = function (element, position) { // Создаёт тултипы
          console.log('Создаем тултип');

          // позиция тултипа
          if (position === 'right') {
            position = {
              my: 'left center',
              at: 'right center'
            }
          }else{
            position = {
              my: 'right center',
              at: 'left center',
              adjust: {
                method: 'shift none'
              }
            }
          }

          // инициализация тултипа
          element.qtip({
            content: {
              text: function() {
                return $(this).attr('qtip-content');
              }
            },
            show: {
              event: 'show'
            },
            hide: {
              event: 'keydown hideTooltip'
            },
            position: position,
            style: {
              classes: 'qtip-mystyle qtip-rounded',
              tip: {
                height: 10,
                width: 16
              }
            }
          }).trigger('show');
        };

    return {
        init: init,
        validateForm: validateForm
    };

})();

validation.init();





// Модуль валидации
var validation = (function(){

    var init = function(){
                console.log('Инициализация модуля validation');
                _setUpListners();
            };
    var _setUpListners = function(ev) {
        $('.form').on('submit', _addProject); //добавление проекта
    };

    var _addProject = function(ev){
            console.log('Добавление проекта');
            ev.preventDefault();

            //Объявляем переменные
            var form = $(this),
            url = url,
            data = form.serialize();

            console.log(data);

            //Запрос на сервер
            $.ajax({
                url: '/path/to/file',
                type: 'POST',
                dataType: 'json',
                data: data,
            })
            .done(function(ans) {
                console.log("success");
                console.log("ans");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            
    }
    
    return {
        init: init
    };
})();  
