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


