$(document).ready(function () {
    $('input[type=file]').change(function (e) {
        $name = $(this).val();
        $(".custom-file-label").html($name);
    });
});
let forms = {
    tech:$("#pop-up-create-tech"),
    razdel:$("#pop-up-create-razdel"),
    post:$("#pop-up-create-post"),
    creteFile: function () {
        //отправка файла
        var $that = $("#form-user-update"),
            formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
        $.ajax({
            type: 'POST',
            url: '/user',
            contentType: false, // важно - убираем форматирование данных по умолчанию
            processData: false, // важно - убираем преобразование строк по умолчанию
            data: formData,
            beforeSend: function () {
                $('#preloader').removeClass('none');
            },
            success: function (data) {
                $('#preloader').addClass('none');
                let $res = $("#result");
                $("#create").trigger('reset');
                $res.css('opacity', 1).delay(4000);
                setTimeout(function () {
                    $res.css('opacity', 0);
                }, 4000);


            },
            error: function (xhr, str) {
                if (typeof (xhr.responseJSON.errors.email) !== "undefined") {
                    $('.error-email').html(xhr.responseJSON.errors.email[0]);
                }
                if (typeof (xhr.responseJSON.errors.name) !== "undefined") {
                    $('.error-name').html(xhr.responseJSON.errors.name[0]);
                }
                $('#preloader').addClass('none');

            }
        });
    },
    getTechnologyPage: function (id) {
        $.ajax({
            type: 'GET',
            url: '/technology/'+id,
            beforeSend: function () {
                $('#preloader').removeClass('none');
            },
            success: function (data) {
                $('#preloader').addClass('none');
                let $res = $("#result-post");
                $res.html(data);
            },
            error: function (xhr, str) {
                $('.error-email').html(xhr.responseJSON.errors);
                $('#preloader').addClass('none');
            }
        });
    },
}
//форма добавления файла в раздел
$("#btn-form-user-update").on('click', function (event) {
    event.preventDefault();
    if (confirm("Регистрационные данные будут изменены?")) {
        $('.error-name, .error-email').html('');
        forms.creteFile();
    }
});
$(".link-technology-ajax").on('click', function (event) {
    event.preventDefault();
    let $attribute = $(this).attr('data-name');
    forms.getTechnologyPage($attribute);
})
//open form tech
$("#show-pop-up-create-tech").on('click',function(event){
    forms.tech.removeClass('none');
});
//open form razdel
$("#show-pop-up-create-razdel").on('click',function(event){
    forms.razdel.removeClass('none');
});
//open form post
$("#show-pop-up-create-post").on('click',function(event){
    forms.post.removeClass('none');
});
//send form all
$('.create').on('click',function(){
    let $idForm = $(this).data('create');

});
//closed form all
$('.closed').on('click',function(){
    let $idBlock = $(this).data('closed')
    $("#"+$idBlock).addClass('none')
});
//clear form all
$(".clear").on('click',function(){
    let $idForm = $(this).data('clear')
    $("#"+$idForm).trigger('reset');
});

