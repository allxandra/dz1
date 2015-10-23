
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
