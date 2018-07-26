$(function () {

    $(".tweet-generator__perfil").submit(function(e) {
        let user_name = $("#nombre-de-usuario").val();
        let user_image = function previewFile() {
            var preview = document.querySelector('img');
            var file    = document.querySelector('input[type=file]').files[0];
            var reader  = new FileReader();
          
            reader.onloadend = function () {
              preview.src = reader.result;
            }
          
            if (file) {
              reader.readAsDataURL(file);
            } else {
              preview.src = "";
            }
          };
        e.preventDefault();
        $(".nombre-de-usuario").text(user_name);
        $(".imagen-de-usuario").attr("src",user_image);
        $(".plantilla-tweets").css("display", "block");
    })
    $(".imagen-de-usuario").on("load", function() {
        let source = ($(".imagen-de-usuario").attr("src"));
        $(".imagen-de-usuario__tweet").attr("src",source);
    })
    let counter = 0;
    $(".publicar-tweet").submit(function (e) {
        e.preventDefault();
        $(".plantilla-publicacion").css("display", "block");
        let texto_tweet = $("#texto-tweet").val();
        $(".publicacion__text p").text(texto_tweet);
    })
    $(".fa-heart").on("click", function () {
        $(".fa-heart").css("color", "#EE2E31");
        counter = counter + 1;
        $(".publicacion__social small").text(counter);
    })
    $(".fa-trash").on("click", function () {
        let confirma = confirm("¿Estás Seguro de Eliminar Éste Mensaje?");
        if (confirma == false) {
            return
        }
        $(".fa-trash").parent().parent().remove();
    })
    
})